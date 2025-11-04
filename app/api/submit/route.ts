import { NextRequest, NextResponse } from "next/server"
import { Client } from "@notionhq/client"

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    console.log("Received BGMI registration data:", data)
    
    // Validate required environment variables
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      console.error("Missing Notion environment variables")
      console.error("NOTION_TOKEN exists:", !!process.env.NOTION_TOKEN)
      console.error("NOTION_DATABASE_ID exists:", !!process.env.NOTION_DATABASE_ID)
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    // Format database ID to UUID format (add dashes if missing)
    const formatDatabaseId = (id: string): string => {
      // Remove any existing dashes
      const cleanId = id.replace(/-/g, '')
      // Add dashes in UUID format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
      return `${cleanId.slice(0, 8)}-${cleanId.slice(8, 12)}-${cleanId.slice(12, 16)}-${cleanId.slice(16, 20)}-${cleanId.slice(20, 32)}`
    }

    const databaseId = formatDatabaseId(process.env.NOTION_DATABASE_ID)
    console.log("Using database ID:", databaseId)

    // Retrieve database schema to see actual property names
    const database = await notion.databases.retrieve({ database_id: databaseId })
    console.log("\n=== DATABASE SCHEMA ===")
    console.log("Available properties:", Object.keys(database.properties))
    
    // Log each property with its type
    Object.entries(database.properties).forEach(([name, prop]: [string, any]) => {
      console.log(`  - "${name}": ${prop.type}`)
    })
    console.log("======================\n")

    // Find the title property (there should be exactly one)
    const titleProperty = Object.entries(database.properties).find(
      ([_, prop]: [string, any]) => prop.type === 'title'
    )
    const titlePropertyName = titleProperty ? titleProperty[0] : 'Name'
    console.log("Using title property:", titlePropertyName)

    // Create a mapping helper to find property names (case-insensitive and flexible)
    const dbProps = database.properties as Record<string, any>
    const findProperty = (searchTerms: string[]): string | null => {
      for (const term of searchTerms) {
        // Try exact match first
        if (dbProps[term]) return term
        
        // Try case-insensitive partial match
        const found = Object.keys(dbProps).find(key => {
          const keyLower = key.toLowerCase().replace(/[^a-z0-9]/g, '')
          const termLower = term.toLowerCase().replace(/[^a-z0-9]/g, '')
          return keyLower.includes(termLower) || termLower.includes(keyLower)
        })
        if (found) return found
      }
      return null
    }

    // Log all available properties for debugging
    console.log("\n==========================================")
    console.log("AVAILABLE DATABASE PROPERTIES:")
    console.log("==========================================")
    Object.entries(dbProps).forEach(([name, prop]: [string, any]) => {
      console.log(`"${name}": ${prop.type}`)
    })
    console.log("==========================================\n")

    // Helper to add College ID property as file
    const addCollegeIdProperty = (
      collegeIdValue: string | undefined,
      searchTerms: string[],
      playerLabel: string = ''
    ) => {
      const collegeIdUrl = formatUrl(collegeIdValue)
      if (!collegeIdUrl) return
      
      let collegeProp = findProperty(searchTerms)
      
      if (collegeProp) {
        const propType = dbProps[collegeProp]?.type
        console.log(`Adding College ID for ${playerLabel}: "${collegeProp}" as type: ${propType}`)
        
        if (propType === 'url') {
          notionProperties[collegeProp] = { url: collegeIdUrl }
        } else if (propType === 'files') {
          notionProperties[collegeProp] = {
            files: [
              {
                name: `${playerLabel} College ID`,
                external: { url: collegeIdUrl }
              }
            ]
          }
        }
      } else {
        console.warn(`College ID property not found for ${playerLabel}`)
      }
    }

    // Helper to add Aadhar property as file/URL based on database type
    const addAadharProperty = (
      aadharValue: string | undefined,
      searchTerms: string[],
      playerLabel: string = ''
    ) => {
      if (!aadharValue || aadharValue.trim() === "") {
        console.log(`\nSkipping Aadhar for ${playerLabel}: empty value`)
        return
      }
      
      const aadharUrl = formatUrl(aadharValue)
      if (!aadharUrl) {
        console.log(`\nSkipping Aadhar for ${playerLabel}: invalid URL`)
        return
      }
      
      let aadharProp = findProperty(searchTerms)
      
      // If not found, try exact match for common names
      if (!aadharProp) {
        const commonNames = ['Aadhar number', 'Aadhaar number', 'Aadhar', 'Aadhaar', 'Aadhar Card']
        for (const name of commonNames) {
          if (dbProps[name]) {
            aadharProp = name
            break
          }
        }
      }
      
      console.log(`\nProcessing Aadhar for ${playerLabel}:`)
      console.log(`  Search terms: ${searchTerms.join(', ')}`)
      console.log(`  Found property: "${aadharProp}"`)
      
      if (aadharProp) {
        const propType = dbProps[aadharProp]?.type
        console.log(`  Property type in DB: ${propType}`)
        console.log(`  URL: ${aadharUrl}`)
        
        if (propType === 'url') {
          notionProperties[aadharProp] = { url: aadharUrl }
          console.log(`  ✓ Added as url`)
        } else if (propType === 'files') {
          notionProperties[aadharProp] = {
            files: [
              {
                name: `${playerLabel} Aadhar Card`,
                external: {
                  url: aadharUrl
                }
              }
            ]
          }
          console.log(`  ✓ Added as files`)
        } else if (propType === 'rich_text') {
          notionProperties[aadharProp] = {
            rich_text: [{ text: { content: aadharUrl } }]
          }
          console.log(`  ✓ Added as rich_text`)
        } else {
          console.error(`  ✗ Unknown property type: ${propType}`)
        }
      } else {
        console.error(`  ✗ Property not found in database`)
        console.log(`  Available properties with 'aadhar' in name:`)
        Object.keys(dbProps).forEach(key => {
          if (key.toLowerCase().includes('aadhar') || key.toLowerCase().includes('aadhaar')) {
            console.log(`    - "${key}": ${dbProps[key].type}`)
          }
        })
      }
    }

    // Helper function to validate and format URL
    const formatUrl = (url: string | undefined | null): string | null => {
      if (!url || url.trim() === "") return null
      // Check if it's a valid URL
      try {
        new URL(url)
        return url
      } catch {
        // If not a valid URL, return null
        console.warn(`Invalid URL provided: ${url}`)
        return null
      }
    }

    // Helper function to validate phone number
    const formatPhone = (phone: string | undefined | null): string | null => {
      if (!phone || phone.trim() === "") return null
      // Remove any spaces, dashes, or other formatting
      const cleaned = phone.replace(/[\s\-\(\)]/g, '')
      // Check if it's a valid phone number (at least 10 digits)
      if (cleaned.length >= 10) {
        return phone // Return original format as Notion will handle it
      }
      console.warn(`Invalid phone number provided: ${phone}`)
      return null
    }

    // Create comprehensive Notion properties mapping
    const notionProperties: any = {
      // Use the dynamically found title property
      [titlePropertyName]: {
        title: [
          {
            text: {
              content: data.teamName || "",
            },
          },
        ],
      },
      
      // University Name
      "University Name": {
        rich_text: [
          {
            text: {
              content: data.universityName || "",
            },
          },
        ],
      },
    }

    // Add Team Logo as url (not files)
    const teamLogoUrl = formatUrl(data.teamLogoLink)
    if (teamLogoUrl) {
      notionProperties["Team Logo"] = { url: teamLogoUrl }
    }

    // Team Leader Details
    notionProperties["Team Leader's Name"] = {
      rich_text: [{ text: { content: data.teamLeaderName || "" } }],
    }

    const teamLeaderPhone = formatPhone(data.teamLeaderPhone)
    if (teamLeaderPhone) {
      notionProperties["Team Leaders' Phone No."] = { phone_number: teamLeaderPhone }
    }

    if (data.teamLeaderEmail && data.teamLeaderEmail.trim() !== "") {
      notionProperties["Team Leader's email"] = { email: data.teamLeaderEmail }
    }

    addCollegeIdProperty(data.teamLeaderCollegeIdLink, [
      "Team Leader's College ID",
      "Team Leader College ID",
      "College ID",
      "Team Leader ID"
    ], 'Team Leader')

    // Convert UID to number
    if (data.teamLeaderUID && data.teamLeaderUID.trim() !== "") {
      const uid = parseFloat(data.teamLeaderUID)
      if (!isNaN(uid)) {
        notionProperties["Team Leader's UID"] = { number: uid }
      }
    }

    notionProperties["Team Leader's In-Game Name"] = {
      rich_text: [{ text: { content: data.teamLeaderInGameName || "" } }],
    }

    // Add Aadhar for team leader
    addAadharProperty(data.teamLeaderAadhar, [
      'Aadhar number',
      'Aadhaar number',
      'Aadhar',
      'Aadhaar',
      'Team Leader Aadhar',
      'Team Leader Aadhaar'
    ], 'Team Leader')

    // Player 2
    notionProperties["Player 2 Name"] = {
      rich_text: [{ text: { content: data.player2Name || "" } }],
    }

    if (data.player2UID && data.player2UID.trim() !== "") {
      const uid = parseFloat(data.player2UID)
      if (!isNaN(uid)) {
        notionProperties["Player 2 UID"] = { number: uid }
      }
    }

    notionProperties["Player 2 In-Game Name"] = {
      rich_text: [{ text: { content: data.player2InGameName || "" } }],
    }

    addAadharProperty(data.player2Aadhar, [
      'Aadhar number (Player 2)',
      'Aadhaar number (Player 2)',
      'Player 2 Aadhar',
      'Player 2 Aadhaar'
    ], 'Player 2')

    addCollegeIdProperty(data.player2CollegeIdLink, [
      'College ID (Player 2)',
      'Player 2 College ID',
      'Player 2 ID'
    ], 'Player 2')

    const player2Phone = formatPhone(data.player2Phone)
    if (player2Phone) {
      notionProperties["Player 2 Phone Number"] = { phone_number: player2Phone }
    }

    // Player 3
    notionProperties["Player 3 Name"] = {
      rich_text: [{ text: { content: data.player3Name || "" } }],
    }

    if (data.player3UID && data.player3UID.trim() !== "") {
      const uid = parseFloat(data.player3UID)
      if (!isNaN(uid)) {
        notionProperties["Player 3 UID"] = { number: uid }
      }
    }

    notionProperties["Player 3 In-Game Name"] = {
      rich_text: [{ text: { content: data.player3InGameName || "" } }],
    }

    addAadharProperty(data.player3Aadhar, [
      'Aadhar Number (Player 3)',
      'Aadhaar Number (Player 3)',
      'Player 3 Aadhar',
      'Player 3 Aadhaar'
    ], 'Player 3')

    addCollegeIdProperty(data.player3CollegeIdLink, [
      'College ID (Player 3)',
      'Player 3 College ID',
      'Player 3 ID'
    ], 'Player 3')

    const player3Phone = formatPhone(data.player3Phone)
    if (player3Phone) {
      notionProperties["Player 3 Phone Number"] = { phone_number: player3Phone }
    }

    // Player 4
    notionProperties["Player 4 Name"] = {
      rich_text: [{ text: { content: data.player4Name || "" } }],
    }

    if (data.player4UID && data.player4UID.trim() !== "") {
      const uid = parseFloat(data.player4UID)
      if (!isNaN(uid)) {
        notionProperties["Player 4 UID"] = { number: uid }
      }
    }

    notionProperties["Player 4 In-Game Name"] = {
      rich_text: [{ text: { content: data.player4InGameName || "" } }],
    }

    addAadharProperty(data.player4Aadhar, [
      'Aadhar Number (Player 4)',
      'Aadhaar Number (Player 4)',
      'Player 4 Aadhar',
      'Player 4 Aadhaar'
    ], 'Player 4')

    addCollegeIdProperty(data.player4CollegeIdLink, [
      'College ID (Player 4)',
      'Player 4 College ID',
      'Player 4 ID'
    ], 'Player 4')

    const player4Phone = formatPhone(data.player4Phone)
    if (player4Phone) {
      notionProperties["Player 4 Phone Number"] = { phone_number: player4Phone }
    }

    // Player 5
    notionProperties["Player 5 Name"] = {
      rich_text: [{ text: { content: data.player5Name || "" } }],
    }

    if (data.player5UID && data.player5UID.trim() !== "") {
      const uid = parseFloat(data.player5UID)
      if (!isNaN(uid)) {
        notionProperties["Player 5 UID"] = { number: uid }
      }
    }

    notionProperties["Player 5 In-Game Name"] = {
      rich_text: [{ text: { content: data.player5InGameName || "" } }],
    }

    addAadharProperty(data.player5Aadhar, [
      'Aadhar Number (Player 5)',
      'Aadhaar Number (Player 5)',
      'Player 5 Aadhar',
      'Player 5 Aadhaar'
    ], 'Player 5')

    addCollegeIdProperty(data.player5CollegeIdLink, [
      'College ID (Player 5)',
      'Player 5 College ID',
      'Player 5 ID'
    ], 'Player 5')

    const player5Phone = formatPhone(data.player5Phone)
    if (player5Phone) {
      notionProperties["Player 5 Phone Number"] = { phone_number: player5Phone }
    }

    // Remove empty rich_text and title properties
    Object.keys(notionProperties).forEach(key => {
      const prop = notionProperties[key]
      if (prop.rich_text && prop.rich_text[0]?.text?.content === "") {
        delete notionProperties[key]
      } else if (prop.title && prop.title[0]?.text?.content === "") {
        delete notionProperties[key]
      }
    })

    console.log("Creating Notion page with properties:", Object.keys(notionProperties))
    console.log("Full properties object:", JSON.stringify(notionProperties, null, 2))
    
    // Validate property types against database schema
    console.log("\nValidating property types...")
    Object.entries(notionProperties).forEach(([propName, propValue]: [string, any]) => {
      const dbProp = dbProps[propName]
      if (dbProp) {
        const expectedType = dbProp.type
        const actualType = Object.keys(propValue)[0]
        console.log(`  "${propName}": expected=${expectedType}, actual=${actualType}, match=${expectedType === actualType}`)
        if (expectedType !== actualType) {
          console.error(`  ❌ TYPE MISMATCH: "${propName}" expects ${expectedType} but got ${actualType}`)
        }
      } else {
        console.warn(`  ⚠️  Property "${propName}" not found in database schema`)
      }
    })

    // Create the page in Notion database
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: notionProperties,
    })

    console.log("Successfully created BGMI registration in Notion:", response.id)
    
    return NextResponse.json(
      { 
        success: true, 
        message: "BGMI registration submitted successfully! Your team has been registered for the Qualifiers.",
        pageId: response.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("Error submitting BGMI registration to Notion:", error)
    
    // Log full error for debugging
    if (error && typeof error === 'object') {
      console.error("Error details:", JSON.stringify(error, null, 2))
    }
    
    // Return appropriate error message
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to submit BGMI registration", details: error.message },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { error: "Failed to submit BGMI registration" },
      { status: 500 }
    )
  }
}