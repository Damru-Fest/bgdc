import { BGMIFormData } from "@/types/bgmi-form"

export async function submitFormToNotion(formData: BGMIFormData): Promise<{ success: boolean; message: string; error?: string }> {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('Server error response:', result)
      throw new Error(result.details || result.error || 'Failed to submit form')
    }

    return {
      success: true,
      message: result.message || 'BGMI registration submitted successfully!',
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    return {
      success: false,
      message: 'Failed to submit registration',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
