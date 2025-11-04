"use client";

import { useState } from "react";
import IntroSection from "@/components/intro-section";
import BGMISection1 from "@/components/bgmi-section-1";
import BGMIPlayerSection from "@/components/bgmi-player-section";
import ThankYouSection from "@/components/thank-you-section";
import { BGMIFormData, initialBGMIFormData } from "@/types/bgmi-form";
import { submitFormToNotion } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

type Step =
  | "intro"
  | "section-1"
  | "section-2"
  | "section-3"
  | "section-4"
  | "section-5"
  | "thank-you";

export default function DamruLanding() {
  const [currentStep, setCurrentStep] = useState<Step>("intro");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BGMIFormData>(initialBGMIFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateSection1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.teamName.trim()) newErrors.teamName = "Team name is required";
    if (!formData.teamLogoLink.trim()) newErrors.teamLogoLink = "Team logo is required";
    if (!formData.universityName.trim()) newErrors.universityName = "University name is required";
    if (!formData.teamLeaderName.trim()) newErrors.teamLeaderName = "Team leader's name is required";
    if (!formData.teamLeaderPhone.trim()) {
      newErrors.teamLeaderPhone = "Team leader's phone number is required";
    } else if (!/^\d{10}$/.test(formData.teamLeaderPhone.replace(/\D/g, ""))) {
      newErrors.teamLeaderPhone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.teamLeaderCollegeIdLink.trim()) newErrors.teamLeaderCollegeIdLink = "Team leader's college ID is required";
    if (!formData.teamLeaderUID.trim()) newErrors.teamLeaderUID = "Team leader's UID is required";
    if (!formData.teamLeaderInGameName.trim()) newErrors.teamLeaderInGameName = "Team leader's in-game name is required";
    if (!formData.teamLeaderEmail.trim()) {
      newErrors.teamLeaderEmail = "Team leader's email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.teamLeaderEmail)) {
      newErrors.teamLeaderEmail = "Please enter a valid email address";
    }
    if (!formData.teamLeaderAadhar.trim()) {
      newErrors.teamLeaderAadhar = "Team leader's Aadhar card link is required";
    } else {
      try {
        new URL(formData.teamLeaderAadhar);
      } catch {
        newErrors.teamLeaderAadhar = "Please enter a valid URL (e.g., Google Drive link)";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePlayerSection = (playerNumber: 2 | 3 | 4 | 5) => {
    const newErrors: Record<string, string> = {};
    const playerPrefix = `player${playerNumber}` as const;
    const isRequired = playerNumber <= 4; // Players 2, 3, 4 are required, Player 5 is optional

    // If it's player 5 and no data is provided, it's valid (optional)
    if (playerNumber === 5) {
      const hasAnyData = formData[`${playerPrefix}Name`] || 
                        formData[`${playerPrefix}UID`] || 
                        formData[`${playerPrefix}InGameName`] || 
                        formData[`${playerPrefix}Aadhar`] || 
                        formData[`${playerPrefix}CollegeIdLink`] || 
                        formData[`${playerPrefix}Phone`];
      
      if (!hasAnyData) {
        setErrors(newErrors);
        return true; // Valid if no data for optional player
      }
    }

    if (isRequired || (playerNumber === 5 && formData[`${playerPrefix}Name`])) {
      if (!formData[`${playerPrefix}Name`].trim()) newErrors[`${playerPrefix}Name`] = `Player ${playerNumber} name is required`;
      if (!formData[`${playerPrefix}UID`].trim()) newErrors[`${playerPrefix}UID`] = `Player ${playerNumber} UID is required`;
      if (!formData[`${playerPrefix}InGameName`].trim()) newErrors[`${playerPrefix}InGameName`] = `Player ${playerNumber} in-game name is required`;
      if (!formData[`${playerPrefix}Aadhar`].trim()) {
        newErrors[`${playerPrefix}Aadhar`] = `Player ${playerNumber} Aadhar card link is required`;
      } else {
        try {
          new URL(formData[`${playerPrefix}Aadhar`]);
        } catch {
          newErrors[`${playerPrefix}Aadhar`] = "Please enter a valid URL (e.g., Google Drive link)";
        }
      }
      if (!formData[`${playerPrefix}CollegeIdLink`].trim()) newErrors[`${playerPrefix}CollegeIdLink`] = `Player ${playerNumber} college ID is required`;
      if (!formData[`${playerPrefix}Phone`].trim()) {
        newErrors[`${playerPrefix}Phone`] = `Player ${playerNumber} phone number is required`;
      } else if (!/^\d{10}$/.test(formData[`${playerPrefix}Phone`].replace(/\D/g, ""))) {
        newErrors[`${playerPrefix}Phone`] = "Please enter a valid 10-digit phone number";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSectionNext = (section: number) => {
    let isValid = false;
    
    switch (section) {
      case 1:
        isValid = validateSection1();
        break;
      case 2:
        isValid = validatePlayerSection(2);
        break;
      case 3:
        isValid = validatePlayerSection(3);
        break;
      case 4:
        isValid = validatePlayerSection(4);
        break;
      case 5:
        isValid = validatePlayerSection(5);
        break;
    }

    if (isValid) {
      if (section === 5) {
        handleSubmit();
      } else {
        const nextStep = `section-${section + 1}` as Step;
        setCurrentStep(nextStep);
      }
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const result = await submitFormToNotion(formData);
      if (result.success) {
        toast({
          title: "Registration submitted successfully!",
          description: "Thank you for registering for the BGMI Qualifiers.",
        });
        setCurrentStep("thank-you");
      } else {
        toast({
          title: "Submission failed",
          description: result.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegisterAnother = () => {
    setCurrentStep("intro");
    setIsSubmitting(false);
    setFormData(initialBGMIFormData);
    setErrors({});
  };

  const handleBack = (currentSection: number) => {
    if (currentSection === 1) {
      setCurrentStep("intro");
    } else {
      const prevStep = `section-${currentSection - 1}` as Step;
      setCurrentStep(prevStep);
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {currentStep === "intro" && (
        <IntroSection onNext={() => setCurrentStep("section-1")} />
      )}
      {currentStep === "section-1" && (
        <BGMISection1
          formData={formData}
          errors={errors}
          onFormDataChange={setFormData}
          onNext={() => handleSectionNext(1)}
          onBack={() => handleBack(1)}
        />
      )}
      {currentStep === "section-2" && (
        <BGMIPlayerSection
          formData={formData}
          errors={errors}
          onFormDataChange={setFormData}
          onNext={() => handleSectionNext(2)}
          onBack={() => handleBack(2)}
          playerNumber={2}
          currentSection={2}
        />
      )}
      {currentStep === "section-3" && (
        <BGMIPlayerSection
          formData={formData}
          errors={errors}
          onFormDataChange={setFormData}
          onNext={() => handleSectionNext(3)}
          onBack={() => handleBack(3)}
          playerNumber={3}
          currentSection={3}
        />
      )}
      {currentStep === "section-4" && (
        <BGMIPlayerSection
          formData={formData}
          errors={errors}
          onFormDataChange={setFormData}
          onNext={() => handleSectionNext(4)}
          onBack={() => handleBack(4)}
          playerNumber={4}
          currentSection={4}
        />
      )}
      {currentStep === "section-5" && (
        <BGMIPlayerSection
          formData={formData}
          errors={errors}
          onFormDataChange={setFormData}
          onNext={() => handleSectionNext(5)}
          onBack={() => handleBack(5)}
          playerNumber={5}
          currentSection={5}
        />
      )}
      {currentStep === "thank-you" && (
        <ThankYouSection onRegisterAnother={handleRegisterAnother} />
      )}
    </div>
  );
}