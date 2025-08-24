import { NextRequest, NextResponse } from "next/server"
import { Client } from "@notionhq/client"

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required environment variables
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      console.error("Missing Notion environment variables")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    // Validate form data
    const requiredFields = [
      'name', 'email', 'enrollmentId', 'year', 'whatsappNumber',
      'preFestDepartments', 'festDayDepartment', 'motivation', 'workSample'
    ]
    
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Create the page in Notion database
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        // Name field (Title)
        "Name": {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        // Email field (Email)
        "Email": {
          email: data.email,
        },
        // Enrollment ID field (Rich Text)
        "Enrollment ID": {
          rich_text: [
            {
              text: {
                content: data.enrollmentId,
              },
            },
          ],
        },
        // Year field (Select)
        "Year": {
          select: {
            name: data.year,
          },
        },
        // WhatsApp Number field (Phone)
        "WhatsApp Number": {
          phone_number: data.whatsappNumber,
        },
        // Pre-fest Departments field (Multi-select)
        "Pre-fest Departments": {
          multi_select: data.preFestDepartments.map((dept: string) => ({
            name: dept,
          })),
        },
        // Fest Day Department field (Select)
        "Fest Day Department": {
          select: {
            name: data.festDayDepartment,
          },
        },
        // Motivation field (Rich Text)
        "Motivation": {
          rich_text: [
            {
              text: {
                content: data.motivation,
              },
            },
          ],
        },
        // Work Sample field (Rich Text)
        "Work Sample": {
          rich_text: [
            {
              text: {
                content: data.workSample,
              },
            },
          ],
        },
        // Submission Date field (Date)
        "Submission Date": {
          date: {
            start: new Date().toISOString().split('T')[0],
          },
        },
        // Status field (Select) - Default to "New"
        "Status": {
          select: {
            name: "New",
          },
        },
      },
    })

    console.log("Successfully created Notion page:", response.id)
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Registration submitted successfully!",
        pageId: response.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("Error submitting to Notion:", error)
    
    // Return appropriate error message
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to submit registration", details: error.message },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { error: "Failed to submit registration" },
      { status: 500 }
    )
  }
}
