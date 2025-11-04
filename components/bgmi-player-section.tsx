"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, User, Trophy } from "lucide-react";
import { BGMIFormData } from "@/types/bgmi-form";

interface BGMIPlayerSectionProps {
  formData: BGMIFormData;
  errors: Record<string, string>;
  onFormDataChange: (formData: BGMIFormData) => void;
  onNext: () => void;
  onBack: () => void;
  playerNumber: 2 | 3 | 4 | 5;
  currentSection: number;
}

export default function BGMIPlayerSection({
  formData,
  errors,
  onFormDataChange,
  onNext,
  onBack,
  playerNumber,
  currentSection,
}: BGMIPlayerSectionProps) {

  const playerPrefix = `player${playerNumber}` as const;
  
  const handleInputChange = (field: keyof BGMIFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormDataChange({ ...formData, [field]: e.target.value });
  };

  const isRequired = playerNumber <= 4; // Players 2, 3, 4 are required, Player 5 is optional

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-16 px-0 md:px-4 relative overflow-hidden">
      {/* Gaming background effects */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff4500' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-red-600/20 to-orange-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-orange-600/15 to-red-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Trophy className="w-8 h-8 text-red-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
              BGMI Registration
            </h1>
          </div>
          
          {/* Gaming-style progress indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    step === currentSection 
                      ? 'bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/50 border-2 border-red-400' 
                      : step < currentSection 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white border-2 border-green-400' 
                        : 'bg-slate-800 text-gray-500 border-2 border-slate-700'
                  }`}>
                    {step}
                  </div>
                  {step < 5 && <div className="w-8 h-1 bg-slate-700 mx-2 rounded-full" />}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Section {currentSection} of 5
            </h2>
            <p className="text-lg text-gray-400">
              Player {playerNumber} Details {!isRequired && "(Optional)"}
            </p>
          </div>
        </div>

        <Card className="shadow-2xl border border-red-500/20 bg-slate-800/70 backdrop-blur-xl overflow-hidden">
          <CardContent className="p-8 space-y-6">
            {/* Player Name */}
            <div className="space-y-2">
              <Label htmlFor={`${playerPrefix}Name`} className="text-sm font-medium text-gray-200">
                Player {playerNumber} Name {isRequired && <span className="text-red-400">*</span>}
              </Label>
              <Input
                id={`${playerPrefix}Name`}
                type="text"
                placeholder={`Enter player ${playerNumber}'s full name`}
                value={formData[`${playerPrefix}Name`]}
                onChange={handleInputChange(`${playerPrefix}Name`)}
                className={`h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500/20 ${errors[`${playerPrefix}Name`] ? 'border-red-500' : ''}`}
              />
              {errors[`${playerPrefix}Name`] && (
                <p className="text-sm text-red-400">{errors[`${playerPrefix}Name`]}</p>
              )}
            </div>

            {/* Player UID */}
            <div className="space-y-2">
              <Label htmlFor={`${playerPrefix}UID`} className="text-sm font-medium text-gray-200">
                Player {playerNumber} UID {isRequired && <span className="text-red-400">*</span>}
              </Label>
              <Input
                id={`${playerPrefix}UID`}
                type="text"
                placeholder="Enter BGMI UID"
                value={formData[`${playerPrefix}UID`]}
                onChange={handleInputChange(`${playerPrefix}UID`)}
                className={`h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500/20 ${errors[`${playerPrefix}UID`] ? 'border-red-500' : ''}`}
              />
              {errors[`${playerPrefix}UID`] && (
                <p className="text-sm text-red-400">{errors[`${playerPrefix}UID`]}</p>
              )}
            </div>

            {/* Player In-Game Name */}
            <div className="space-y-2">
              <Label htmlFor={`${playerPrefix}InGameName`} className="text-sm font-medium text-gray-200">
                Player {playerNumber} In-Game Name {isRequired && <span className="text-red-400">*</span>}
              </Label>
              <Input
                id={`${playerPrefix}InGameName`}
                type="text"
                placeholder="Enter in-game name"
                value={formData[`${playerPrefix}InGameName`]}
                onChange={handleInputChange(`${playerPrefix}InGameName`)}
                className={`h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500/20 ${errors[`${playerPrefix}InGameName`] ? 'border-red-500' : ''}`}
              />
              {errors[`${playerPrefix}InGameName`] && (
                <p className="text-sm text-red-400">{errors[`${playerPrefix}InGameName`]}</p>
              )}
            </div>

            {/* Player Aadhar Card Link */}
            <div className="space-y-2">
              <Label htmlFor={`${playerPrefix}Aadhar`} className="text-sm font-medium text-gray-200">
                Aadhar Card Drive Link (Player {playerNumber}) {isRequired && <span className="text-red-400">*</span>}
              </Label>
              <Input
                id={`${playerPrefix}Aadhar`}
                type="url"
                placeholder="Enter Google Drive link to Aadhar card"
                value={formData[`${playerPrefix}Aadhar`]}
                onChange={handleInputChange(`${playerPrefix}Aadhar`)}
                className={`h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500/20 ${errors[`${playerPrefix}Aadhar`] ? 'border-red-500' : ''}`}
              />
              {errors[`${playerPrefix}Aadhar`] && (
                <p className="text-sm text-red-400">{errors[`${playerPrefix}Aadhar`]}</p>
              )}
            </div>

            {/* Player College ID Link */}
            <div className="space-y-2">
              <Label htmlFor={`${playerPrefix}CollegeIdLink`} className="text-sm font-medium text-gray-200">
                College ID (Player {playerNumber}) {isRequired && <span className="text-red-400">*</span>}
              </Label>
              <Input
                id={`${playerPrefix}CollegeIdLink`}
                type="url"
                placeholder="Enter Google Drive link or image URL of college ID"
                value={formData[`${playerPrefix}CollegeIdLink`]}
                onChange={handleInputChange(`${playerPrefix}CollegeIdLink`)}
                className={`h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500/20 ${errors[`${playerPrefix}CollegeIdLink`] ? 'border-red-500' : ''}`}
              />
              <p className="text-xs text-gray-400">
                Upload college ID to Google Drive and share the link, or provide a direct image URL
              </p>
              {errors[`${playerPrefix}CollegeIdLink`] && (
                <p className="text-sm text-red-400">{errors[`${playerPrefix}CollegeIdLink`]}</p>
              )}
            </div>

            {/* Player Phone */}
            <div className="space-y-2">
              <Label htmlFor={`${playerPrefix}Phone`} className="text-sm font-medium text-gray-200">
                Player {playerNumber} Phone Number {isRequired && <span className="text-red-400">*</span>}
              </Label>
              <Input
                id={`${playerPrefix}Phone`}
                type="tel"
                placeholder="Enter 10-digit phone number"
                value={formData[`${playerPrefix}Phone`]}
                onChange={handleInputChange(`${playerPrefix}Phone`)}
                className={`h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500/20 ${errors[`${playerPrefix}Phone`] ? 'border-red-500' : ''}`}
              />
              {errors[`${playerPrefix}Phone`] && (
                <p className="text-sm text-red-400">{errors[`${playerPrefix}Phone`]}</p>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between pt-6">
              <Button
                onClick={onBack}
                variant="outline"
                className="px-8 py-3 border-slate-600 bg-slate-900/50 text-gray-300 hover:bg-slate-700 hover:text-white hover:border-slate-500 transition-all"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Previous Section
              </Button>
              <Button
                onClick={onNext}
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-lg hover:shadow-red-500/50 transition-all"
              >
                {currentSection === 5 ? 'Submit Registration' : 'Next Section'}
                {currentSection !== 5 && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}