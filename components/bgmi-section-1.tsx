"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Users, Trophy } from "lucide-react";
import { BGMIFormData } from "@/types/bgmi-form";

interface BGMISection1Props {
  formData: BGMIFormData;
  errors: Record<string, string>;
  onFormDataChange: (formData: BGMIFormData) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function BGMISection1({
  formData,
  errors,
  onFormDataChange,
  onNext,
  onBack,
}: BGMISection1Props) {

  const handleInputChange = (field: keyof BGMIFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormDataChange({ ...formData, [field]: e.target.value });
  };

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
                    step === 1 
                      ? 'bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/50 border-2 border-red-400' 
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
              Section 1 of 5
            </h2>
            <p className="text-lg text-gray-400">
              Team Details & Team Leader Information
            </p>
          </div>
        </div>

        <Card className="shadow-2xl border border-red-500/20 bg-slate-800/70 backdrop-blur-xl overflow-hidden">
          <CardContent className="p-8 space-y-7">
            {/* Team Name */}
            <div className="space-y-3">
              <Label htmlFor="teamName" className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                Team Name <span className="text-red-400">*</span>
              </Label>
              <Input
                id="teamName"
                type="text"
                placeholder="Enter an appropriate team name"
                value={formData.teamName}
                onChange={handleInputChange('teamName')}
                className={`h-12 bg-slate-900/80 border-2 border-slate-600/50 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-slate-500 ${errors.teamName ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
              />
              {errors.teamName && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <span className="text-red-500">⚠</span> {errors.teamName}
                </p>
              )}
            </div>

            {/* Team Logo Link */}
            <div className="space-y-3">
              <Label htmlFor="teamLogoLink" className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                Team Logo (Google Drive Link or Image Link) <span className="text-red-400">*</span>
              </Label>
              <Input
                id="teamLogoLink"
                type="url"
                placeholder="Enter Google Drive link or image URL"
                value={formData.teamLogoLink}
                onChange={handleInputChange('teamLogoLink')}
                className={`h-12 bg-slate-900/80 border-2 border-slate-600/50 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-slate-500 ${errors.teamLogoLink ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
              />
              <p className="text-xs text-gray-400 flex items-center gap-1.5 pl-1">
                <span className="text-gray-500">💡</span> Upload your team logo to Google Drive and share the link, or provide a direct image URL
              </p>
              {errors.teamLogoLink && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <span className="text-red-500">⚠</span> {errors.teamLogoLink}
                </p>
              )}
            </div>

            {/* University Name */}
            <div className="space-y-3">
              <Label htmlFor="universityName" className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                University Name <span className="text-red-400">*</span>
              </Label>
              <Input
                id="universityName"
                type="text"
                placeholder="Enter your university name"
                value={formData.universityName}
                onChange={handleInputChange('universityName')}
                className={`h-12 bg-slate-900/80 border-2 border-slate-600/50 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-slate-500 ${errors.universityName ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
              />
              {errors.universityName && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <span className="text-red-500">⚠</span> {errors.universityName}
                </p>
              )}
            </div>

            {/* Team Leader's Name */}
            <div className="space-y-3">
              <Label htmlFor="teamLeaderName" className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                Team Leader's Name <span className="text-red-400">*</span>
              </Label>
              <Input
                id="teamLeaderName"
                type="text"
                placeholder="Enter team leader's full name"
                value={formData.teamLeaderName}
                onChange={handleInputChange('teamLeaderName')}
                className={`h-12 bg-slate-900/80 border-2 border-slate-600/50 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-slate-500 ${errors.teamLeaderName ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
              />
              {errors.teamLeaderName && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <span className="text-red-500">⚠</span> {errors.teamLeaderName}
                </p>
              )}
            </div>

            {/* Team Leader's Phone */}
            <div className="space-y-3">
              <Label htmlFor="teamLeaderPhone" className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                Team Leader's Phone Number <span className="text-red-400">*</span>
              </Label>
              <Input
                id="teamLeaderPhone"
                type="tel"
                placeholder="Enter 10-digit phone number"
                value={formData.teamLeaderPhone}
                onChange={handleInputChange('teamLeaderPhone')}
                className={`h-12 bg-slate-900/80 border-2 border-slate-600/50 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-slate-500 ${errors.teamLeaderPhone ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
              />
              {errors.teamLeaderPhone && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <span className="text-red-500">⚠</span> {errors.teamLeaderPhone}
                </p>
              )}
            </div>

            {/* Team Leader's College ID Link */}
            <div className="space-y-3">
              <Label htmlFor="teamLeaderCollegeIdLink" className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                College ID (Google Drive Link or Image Link) <span className="text-red-400">*</span>
              </Label>
              <Input
                id="teamLeaderCollegeIdLink"
                type="url"
                placeholder="Enter Google Drive link or image URL of college ID"
                value={formData.teamLeaderCollegeIdLink}
                onChange={handleInputChange('teamLeaderCollegeIdLink')}
                className={`h-12 bg-slate-900/80 border-2 border-slate-600/50 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-slate-500 ${errors.teamLeaderCollegeIdLink ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
              />
              <p className="text-xs text-gray-400 flex items-center gap-1.5 pl-1">
                <span className="text-gray-500">💡</span> Upload your college ID to Google Drive and share the link, or provide a direct image URL
              </p>
              {errors.teamLeaderCollegeIdLink && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <span className="text-red-500">⚠</span> {errors.teamLeaderCollegeIdLink}
                </p>
              )}
            </div>

            {/* Team Leader's UID */}
            <div className="space-y-3">
              <Label htmlFor="teamLeaderUID" className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                Team Leader's UID <span className="text-red-400">*</span>
              </Label>
              <Input
                id="teamLeaderUID"
                type="text"
                placeholder="Enter BGMI UID"
                value={formData.teamLeaderUID}
                onChange={handleInputChange('teamLeaderUID')}
                className={`h-12 bg-slate-900/80 border-2 border-slate-600/50 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-slate-500 ${errors.teamLeaderUID ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
              />
              {errors.teamLeaderUID && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <span className="text-red-500">⚠</span> {errors.teamLeaderUID}
                </p>
              )}
            </div>

            {/* Team Leader's In-Game Name */}
            <div className="space-y-3">
              <Label htmlFor="teamLeaderInGameName" className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                Team Leader's In-Game Name <span className="text-red-400">*</span>
              </Label>
              <Input
                id="teamLeaderInGameName"
                type="text"
                placeholder="Enter in-game name"
                value={formData.teamLeaderInGameName}
                onChange={handleInputChange('teamLeaderInGameName')}
                className={`h-12 bg-slate-900/80 border-2 border-slate-600/50 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-slate-500 ${errors.teamLeaderInGameName ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
              />
              {errors.teamLeaderInGameName && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <span className="text-red-500">⚠</span> {errors.teamLeaderInGameName}
                </p>
              )}
            </div>

            {/* Team Leader's Email */}
            <div className="space-y-3">
              <Label htmlFor="teamLeaderEmail" className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                Team Leader's Email <span className="text-red-400">*</span>
              </Label>
              <Input
                id="teamLeaderEmail"
                type="email"
                placeholder="Enter email address"
                value={formData.teamLeaderEmail}
                onChange={handleInputChange('teamLeaderEmail')}
                className={`h-12 bg-slate-900/80 border-2 border-slate-600/50 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-slate-500 ${errors.teamLeaderEmail ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
              />
              {errors.teamLeaderEmail && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <span className="text-red-500">⚠</span> {errors.teamLeaderEmail}
                </p>
              )}
            </div>

            {/* Team Leader's Aadhar Card Link */}
            <div className="space-y-3">
              <Label htmlFor="teamLeaderAadhar" className="text-sm font-semibold text-gray-200 tracking-wide flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                Aadhar Card Drive Link <span className="text-red-400">*</span>
              </Label>
              <Input
                id="teamLeaderAadhar"
                type="url"
                placeholder="Enter Google Drive link to Aadhar card"
                value={formData.teamLeaderAadhar}
                onChange={handleInputChange('teamLeaderAadhar')}
                className={`h-12 bg-slate-900/80 border-2 border-slate-600/50 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 hover:border-slate-500 ${errors.teamLeaderAadhar ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
              />
              {errors.teamLeaderAadhar && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <span className="text-red-500">⚠</span> {errors.teamLeaderAadhar}</p>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between pt-6">
              <Button
                onClick={onBack}
                variant="outline"
                className="px-8 py-3 border-slate-600 bg-slate-900/50 text-gray-300 hover:bg-slate-700 hover:text-white hover:border-slate-500 transition-all"
              >
                Back
              </Button>
              <Button
                onClick={onNext}
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-lg hover:shadow-red-500/50 transition-all"
              >
                Next Section
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}