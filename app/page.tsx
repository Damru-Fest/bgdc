"use client"

import { useState } from "react"
import IntroSection from "@/components/intro-section"
import CommitteesSection from "@/components/committees-section"
import FormPage1, { FormData } from "@/components/form-page-1"
import FormPage2 from "@/components/form-page-2"
import ThankYouSection from "@/components/thank-you-section"
import { submitFormToNotion } from "@/lib/api"
import { toast } from "@/hooks/use-toast"

type Step = "intro" | "committees" | "form-page-1" | "form-page-2" | "thank-you"

export default function DamruLanding() {
  const [currentStep, setCurrentStep] = useState<Step>("intro")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    enrollmentId: "",
    year: "",
    whatsappNumber: "",
    preFestDepartments: [],
    festDayDepartment: "",
    motivation: "",
    workSample: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateFormPage1 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "University email is required"
    } else if (!formData.email.includes("rishihood.edu.in")) {
      newErrors.email = "Please use your Rishihood University email"
    }
    if (!formData.enrollmentId.trim()) newErrors.enrollmentId = "Enrollment ID is required"
    if (!formData.year.trim()) newErrors.year = "Please select your year"
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required"
    } else if (!/^\d{10}$/.test(formData.whatsappNumber.replace(/\D/g, ""))) {
      newErrors.whatsappNumber = "Please enter a valid 10-digit phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateFormPage2 = () => {
    const newErrors: Record<string, string> = {}

    if (formData.preFestDepartments.length === 0)
      newErrors.preFestDepartments = "Please select at least one pre-fest department (max 2)"
    if (formData.preFestDepartments.length > 2)
      newErrors.preFestDepartments = "You can select maximum 2 pre-fest departments"
    if (!formData.festDayDepartment) newErrors.festDayDepartment = "Please select a fest day department"
    if (!formData.motivation.trim()) newErrors.motivation = "Please share why you want to work in Damru Fest"
    if (!formData.workSample.trim()) newErrors.workSample = "Please show us your work - this field is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleFormPage1Next = () => {
    if (validateFormPage1()) {
      setCurrentStep("form-page-2")
    }
  }

  const handleSubmit = async () => {
    if (validateFormPage2()) {
      setIsSubmitting(true)
      try {
        // Show loading toast
        toast({
          title: "Submitting registration...",
          description: "Please wait while we process your application.",
        })

        const result = await submitFormToNotion(formData)
        
        if (result.success) {
          toast({
            title: "Registration successful! 🎉",
            description: result.message,
          })
          setCurrentStep("thank-you")
        } else {
          toast({
            title: "Submission failed",
            description: result.error || "Please try again later.",
            variant: "destructive",
          })
        }
      } catch (error) {
        console.error("Submission error:", error)
        toast({
          title: "Submission failed",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleRegisterAnother = () => {
    setCurrentStep("intro")
    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      enrollmentId: "",
      year: "",
      whatsappNumber: "",
      preFestDepartments: [],
      festDayDepartment: "",
      motivation: "",
      workSample: "",
    })
    setErrors({})
  }

  return (
    <div className="min-h-screen font-sans">
      {currentStep === "intro" && (
        <IntroSection onNext={() => setCurrentStep("committees")} />
      )}
      {currentStep === "committees" && (
        <CommitteesSection onNext={() => setCurrentStep("form-page-1")} />
      )}
      {currentStep === "form-page-1" && (
        <FormPage1
          formData={formData}
          errors={errors}
          onFormDataChange={setFormData}
          onNext={handleFormPage1Next}
          onBack={() => setCurrentStep("committees")}
        />
      )}
      {currentStep === "form-page-2" && (
        <FormPage2
          formData={formData}
          errors={errors}
          onFormDataChange={setFormData}
          onSubmit={handleSubmit}
          onBack={() => setCurrentStep("form-page-1")}
          isSubmitting={isSubmitting}
        />
      )}
      {currentStep === "thank-you" && (
        <ThankYouSection onRegisterAnother={handleRegisterAnother} />
      )}
    </div>
  )
}
