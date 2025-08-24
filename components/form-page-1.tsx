"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, Calendar, CheckCircle, Users } from "lucide-react";

export interface FormData {
  name: string;
  email: string;
  enrollmentId: string;
  year: string;
  whatsappNumber: string;
  preFestDepartments: string[];
  festDayDepartment: string;
  motivation: string;
  workSample: string;
}

interface FormPage1Props {
  formData: FormData;
  errors: Record<string, string>;
  onFormDataChange: (formData: FormData) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function FormPage1({
  formData,
  errors,
  onFormDataChange,
  onNext,
  onBack,
}: FormPage1Props) {
  const handleYearSelect = (yearValue: string) => {
    onFormDataChange({ ...formData, year: yearValue });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 py-16 px-0 md:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8 overflow-x-auto px-4">
            <div className="flex items-center space-x-2 sm:space-x-4 min-w-max">
              <div className="progress-step completed">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="w-8 sm:w-16 h-0.5 bg-red-600"></div>
              <div className="progress-step completed">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="w-8 sm:w-16 h-0.5 bg-red-600"></div>
              <div className="progress-step active">
                <span className="text-xs sm:text-sm font-bold">3</span>
              </div>
              <div className="w-8 sm:w-16 h-0.5 bg-gray-300"></div>
              <div className="progress-step inactive">
                <span className="text-xs sm:text-sm font-bold">4</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-500 px-4 py-2 rounded-full text-sm font-medium mb-6 slide-in-animation">
              <CheckCircle className="w-4 h-4" />
              Step 3 of 4
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 gradient-text slide-in-animation">
              Personal & Academic Information
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 slide-in-animation px-4 sm:px-0">
              Tell us about yourself and your academic background
            </p>
          </div>
        </div>

        <Card className="shadow-2xl border-2 bg-transparent md:bg-white backdrop-blur-sm slide-in-animation py-0 md:rounded-xl rounded-[0]">
          <CardHeader className="text-center pb-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-t-lg py-6">
            <CardTitle className="text-3xl font-bold gradient-text">
              Registration Form{" "}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Please provide your personal and academic information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-10 md:p-8 p-0">
            <div className="form-section md:rounded-[0.75rem] rounded-0">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-red-600">
                <Users className="w-5 h-5" />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-base font-medium flex items-center gap-1 text-gray-900"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      onFormDataChange({ ...formData, name: e.target.value })
                    }
                    className={`form-input-enhanced h-14 text-base ${
                      errors.name ? "form-input-error" : ""
                    }`}
                    placeholder="Enter your complete name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-2 slide-in-animation">
                      <CheckCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="enrollmentId"
                    className="text-base font-medium flex items-center gap-1 text-gray-900"
                  >
                    Enrollment ID <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="enrollmentId"
                    value={formData.enrollmentId}
                    onChange={(e) =>
                      onFormDataChange({
                        ...formData,
                        enrollmentId: e.target.value,
                      })
                    }
                    className={`form-input-enhanced h-14 text-base ${
                      errors.enrollmentId ? "form-input-error" : ""
                    }`}
                    placeholder="Your university enrollment ID"
                  />
                  {errors.enrollmentId && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-2 slide-in-animation">
                      <CheckCircle className="w-4 h-4" />
                      {errors.enrollmentId}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <Label
                  htmlFor="email"
                  className="text-base font-medium flex items-center gap-1 text-gray-900"
                >
                  University Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.name@rishihood.edu.in"
                  value={formData.email}
                  onChange={(e) =>
                    onFormDataChange({ ...formData, email: e.target.value })
                  }
                  className={`form-input-enhanced h-14 text-base ${
                    errors.email ? "form-input-error" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2 slide-in-animation">
                    <CheckCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2 mt-6">
                <Label
                  htmlFor="whatsappNumber"
                  className="text-base font-medium flex items-center gap-1 text-gray-900"
                >
                  WhatsApp Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="whatsappNumber"
                  type="tel"
                  placeholder="Enter your number"
                  value={formData.whatsappNumber}
                  onChange={(e) =>
                    onFormDataChange({
                      ...formData,
                      whatsappNumber: e.target.value,
                    })
                  }
                  className={`form-input-enhanced h-14 text-base ${
                    errors.whatsappNumber ? "form-input-error" : ""
                  }`}
                />
                {errors.whatsappNumber && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2 slide-in-animation">
                    <CheckCircle className="w-4 h-4" />
                    {errors.whatsappNumber}
                  </p>
                )}
              </div>
            </div>

            <div className="form-section md:rounded-[0.75rem] rounded-0">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900">
                <Calendar className="w-5 h-5 text-red-600" />
                Academic Information
              </h3>
              <div className="space-y-2">
                <Label className="text-base font-medium flex items-center gap-1 text-gray-900">
                  Current Year <span className="text-red-500">*</span>
                  <span className="text-sm text-gray-500 ml-2">
                    (Select one)
                  </span>
                </Label>
                <RadioGroup
                  value={formData.year}
                  onValueChange={handleYearSelect}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
                >
                  {["1st Year", "2nd Year", "3rd Year", "4th Year"].map(
                    (year) => (
                      <div
                        key={year}
                        className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer ${
                          formData.year === year
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 bg-white"
                        }`}
                        onClick={() => handleYearSelect(year)}
                      >
                        <RadioGroupItem
                          value={year}
                          id={year}
                          className="w-5 h-5"
                        />
                        <Label
                          htmlFor={year}
                          className="text-base cursor-pointer font-medium text-gray-900"
                        >
                          {year}
                        </Label>
                      </div>
                    )
                  )}
                </RadioGroup>
                {errors.year && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2 slide-in-animation">
                    <CheckCircle className="w-4 h-4" />
                    {errors.year}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                variant="outline"
                onClick={onBack}
                className="flex-1 h-14 text-base border-2 hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
              >
                <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                Back to Departments
              </Button>
              <Button
                onClick={onNext}
                className="flex-1 h-14 text-base bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-xl hover:shadow-red-300 transition-all duration-300 hover:scale-[1.02]"
              >
                Next: Preferences
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
