"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Heart,
  Sparkles,
  Target,
  Users,
  Trophy,
  Truck,
  Workflow,
  Bus,
  Megaphone,
  AlertTriangle,
  ClipboardCheck,
  Store,
  Handshake,
  Palette,
  Code,
  Brush,
  Music,
  Lightbulb,
} from "lucide-react";
import { FormData } from "./form-page-1";

const preFestDepartments = [
  {
    id: "sponsorship-partnerships",
    name: "Sponsorship ",
    description:
      "Love talking to people and sealing the deal? Bring in exciting brands, secure sponsorships, and manage lasting partnerships for Damru.",
    shortDesc: "Secure sponsors and manage partnerships",
    icon: Handshake,
    color: "text-orange-600",
  },
  {
    id: "outreach-community",
    name: "Outreach ",
    description:
      "Take Damru beyond campus! Connect with colleges, student communities, and networks to spread the buzz far and wide.",
    shortDesc: "Connect with colleges and student networks",
    icon: Users,
    color: "text-green-600",
  },
  {
    id: "design-creative",
    name: "Design ",
    description:
      "If you’ve got an eye for aesthetics, this is your space. Work on everything from posters and digital creatives to on-ground branding.",
    shortDesc: "Design posters, creatives, and branding",
    icon: Palette,
    color: "text-pink-600",
  },
  {
    id: "tech-digital",
    name: "Tech ",
    description:
      "Build and manage everything digital. From the fest website and registration systems to online platforms and experiences.",
    shortDesc: "Manage website, registrations, and tech",
    icon: Code,
    color: "text-blue-600",
  },
  {
    id: "decor-experience",
    name: "Decor ",
    description:
      "Bring the vibe! Transform the campus with themed décor, art installations, and creative setups that leave a mark.",
    shortDesc: "Transform campus with themed décor",
    icon: Brush,
    color: "text-purple-600",
  },
  {
    id: "competitions-management",
    name: "Competitions",
    description:
      "Plan and manage a wide range of competitions, from talent showcases to quirky fun events and everything in between.",
    shortDesc: "Plan and manage competitions",
    icon: Trophy,
    color: "text-yellow-600",
  },
  {
    id: "events-programming",
    name: "Events",
    description:
      "From stage shows to campus-wide activities, be the team that brings big moments to life and keeps the energy high.",
    shortDesc: "Plan stage shows and campus activities",
    icon: Music,
    color: "text-indigo-600",
  },
  {
    id: "marketing-promotion",
    name: "Marketing ",
    description:
      "Spread the word! Create campaigns, strategies, and social media buzz to make sure everyone knows about Damru.",
    shortDesc: "Run campaigns and spread the buzz",
    icon: Megaphone,
    color: "text-red-600",
  },
  {
    id: "exhibition-showcase",
    name: "Exhibition",
    description:
      "Curate and manage stalls, showcases, and interactive exhibits that add flavor and creativity to the fest.",
    shortDesc: "Curate stalls and exhibits",
    icon: Store,
    color: "text-teal-600",
  },
  {
    id: "workshop-sessions",
    name: "Workshops",
    description:
      "Organize interactive, creative, and impactful sessions that engage participants and provide learning opportunities.",
    shortDesc: "Organize creative and interactive workshops",
    icon: Lightbulb,
    color: "text-amber-600",
  },
  {
    id: "vendor-management",
    name: "Vendor Management",
    description:
      "Work closely with external partners and vendors to ensure smooth coordination and successful execution.",
    shortDesc: "Coordinate with external vendors",
    icon: Truck,
    color: "text-cyan-600",
  },
  {
    id: "logistics-planning",
    name: "Logistics ",
    description:
      "The backbone of the fest! Manage resources, permissions, setups, and ensure everything runs like clockwork.",
    shortDesc: "Manage resources, permissions, and setups",
    icon: Calendar,
    color: "text-gray-600",
  },
];

const festDayDepartments = [
  {
    id: "competitions",
    name: "Competitions",
    description:
      "Plan, organize, and execute competitions smoothly during fest days.",
    icon: Trophy,
    color: "text-yellow-600",
  },
  {
    id: "logistics",
    name: "Logistics",
    description:
      "Ensure all resources, equipment, and setups are in place during the fest.",
    icon: Truck,
    color: "text-red-600",
  },
  {
    id: "operations",
    name: "Operations",
    description:
      "Oversee overall fest operations and coordination between different teams.",
    icon: Workflow,
    color: "text-blue-600",
  },
  {
    id: "events",
    name: "Events",
    description:
      "Manage performances, activities, and ensure events run as scheduled.",
    icon: Calendar,
    color: "text-indigo-600",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    description:
      "Take care of guests, judges, and performers. Ensure everyone feels welcome.",
    icon: Heart,
    color: "text-pink-600",
  },
  {
    id: "transportation",
    name: "Transportation",
    description:
      "Manage transport for guests, judges, and essential fest logistics.",
    icon: Bus,
    color: "text-green-600",
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "Promote events during fest days and keep the buzz alive with campaigns.",
    icon: Megaphone,
    color: "text-red-600",
  },
  {
    id: "qrt",
    name: "QRT",
    description:
      " (Quick Response Team) Be the first responders to any issues. Ensure quick solutions for fest-day problems.",
    icon: AlertTriangle,
    color: "text-orange-600",
  },
  {
    id: "regdesk",
    name: "Registration Desk",
    description:
      "Handle participant registrations, queries, and provide information on fest days.",
    icon: ClipboardCheck,
    color: "text-cyan-600",
  },
  {
    id: "vendor-management",
    name: "Vendor Management",
    description:
      "Coordinate with vendors to ensure smooth services and stall setups during fest.",
    icon: Store,
    color: "text-teal-600",
  },
];

interface FormPage2Props {
  formData: FormData;
  errors: Record<string, string>;
  onFormDataChange: (formData: FormData) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

export default function FormPage2({
  formData,
  errors,
  onFormDataChange,
  onSubmit,
  onBack,
  isSubmitting = false,
}: FormPage2Props) {
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
              <div className="progress-step completed">
                <span className="text-xs sm:text-sm font-bold">3</span>
              </div>
              <div className="w-8 sm:w-16 h-0.5 bg-red-600"></div>
              <div className="progress-step active">
                <span className="text-xs sm:text-sm font-bold">4</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-500 px-4 py-2 rounded-full text-sm font-medium mb-6 slide-in-animation">
              <CheckCircle className="w-4 h-4" />
              Step 4 of 4
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 gradient-text slide-in-animation">
              Preferences & About You
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 slide-in-animation px-4 sm:px-0">
              Share your department preferences and tell us about yourself
            </p>
          </div>
        </div>

        <Card className="shadow-2xl border-2 bg-transparent md:bg-white backdrop-blur-sm slide-in-animation py-0 md:rounded-xl rounded-[0]">
          <CardHeader className="text-center pb-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-t-lg py-4">
            <CardTitle className="text-3xl font-bold gradient-text">
              Registration Form
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Select your preferred departments and tell us about yourself
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-10 p-0 md:p-4 ">
            <div className="form-section md:rounded-[0.75rem] rounded-0">
              <h3 className="text-lg sm:text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900">
                <Target className="w-5 h-5 text-red-600" />
                Department Preferences
              </h3>

              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-8 rounded-2xl border-2 border-red-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                    <Label className="text-lg font-semibold flex items-center gap-2 text-gray-900">
                      <Calendar className="w-5 h-5 text-red-500" />
                      Pre-Fest Departments{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex items-center gap-2">
                      <div
                        className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 selection-badge ${
                          formData.preFestDepartments.length === 0
                            ? "bg-gray-100 text-gray-500"
                            : formData.preFestDepartments.length === 2
                            ? "bg-red-500 text-white shadow-lg animate-pulse"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        Selected: {formData.preFestDepartments.length}/2
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                    Choose up to 2 departments you'd like to work with during
                    the pre-fest preparation phase. Select departments that
                    align with your skills and interests.
                  </p>

                  <div className="grid gap-4 sm:gap-6">
                    <div className="space-y-3">
                      <Label className="text-sm sm:text-base font-medium text-gray-900 flex items-center gap-2">
                        First Preference
                      </Label>
                      <Select
                        value={formData.preFestDepartments[0] || ""}
                        onValueChange={(value) => {
                          const newDepartments = [
                            ...formData.preFestDepartments,
                          ];
                          if (value === "__clear__") {
                            newDepartments.splice(0, 1);
                          } else {
                            newDepartments[0] = value;
                            if (newDepartments[1] === value) {
                              newDepartments.splice(1, 1);
                            }
                          }
                          onFormDataChange({
                            ...formData,
                            preFestDepartments: newDepartments,
                          });
                        }}
                      >
                        <SelectTrigger className="form-input-enhanced h-12 sm:h-16 text-sm sm:text-base border-2 border-gray-200 hover:border-red-300 transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:ring-2 focus:ring-red-200">
                          <SelectValue placeholder="Select your preference">
                            {formData.preFestDepartments[0] && (
                              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                                {(() => {
                                  const selectedDept = preFestDepartments.find(
                                    (d) =>
                                      d.id === formData.preFestDepartments[0]
                                  );
                                  if (selectedDept) {
                                    const Icon = selectedDept.icon;
                                    return (
                                      <>
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                                          <Icon
                                            className={`w-3 h-3 sm:w-5 sm:h-5 ${selectedDept.color}`}
                                          />
                                        </div>
                                        <span className="font-medium text-gray-900 truncate text-sm sm:text-base">
                                          {selectedDept.name}
                                        </span>
                                      </>
                                    );
                                  }
                                  return null;
                                })()}
                              </div>
                            )}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="max-h-80 border-2 bg-white shadow-xl rounded-xl border-gray-200 max-w-[calc(100vw-1rem)]">
                          <SelectItem
                            value="__clear__"
                            className="py-3 px-3 sm:px-4 cursor-pointer rounded-lg mx-1 sm:mx-2 mb-2"
                          >
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                              </div>
                              <span className="text-gray-500 font-medium text-sm sm:text-base">
                                Clear selection
                              </span>
                            </div>
                          </SelectItem>
                          {preFestDepartments
                            .filter(
                              (dept) =>
                                dept.id !== formData.preFestDepartments[1]
                            )
                            .map((dept) => (
                              <SelectItem
                                key={dept.id}
                                value={dept.id}
                                className="py-3 sm:py-4 px-3 sm:px-4 cursor-pointer rounded-lg mx-1 sm:mx-2 mb-1 border border-transparent"
                              >
                                <div className="flex items-start gap-3 sm:gap-4 w-full min-w-0">
                                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                                    <dept.icon
                                      className={`w-4 h-4 sm:w-5 sm:h-5 ${dept.color}`}
                                    />
                                  </div>
                                  <div className="flex-1 text-left min-w-0">
                                    <div className="font-medium text-sm sm:text-base text-gray-900 leading-tight">
                                      {dept.name}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-500 mt-1 leading-tight line-clamp-2 sm:line-clamp-3">
                                      {dept.description}
                                    </div>
                                  </div>
                                </div>
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm sm:text-base font-medium text-gray-900 flex items-center gap-2">
                        <Target className="w-4 h-4 text-orange-500" />
                        Second Preference (Optional)
                      </Label>
                      <Select
                        value={formData.preFestDepartments[1] || ""}
                        onValueChange={(value) => {
                          const newDepartments = [
                            ...formData.preFestDepartments,
                          ];
                          if (value === "__clear__") {
                            newDepartments.splice(1, 1);
                          } else {
                            newDepartments[1] = value;
                          }
                          onFormDataChange({
                            ...formData,
                            preFestDepartments: newDepartments,
                          });
                        }}
                      >
                        <SelectTrigger className="form-input-enhanced h-12 sm:h-16 text-sm sm:text-base border-2 border-gray-200 hover:border-red-300 transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:ring-2 focus:ring-red-200">
                          <SelectValue placeholder="Select your preference">
                            {formData.preFestDepartments[1] && (
                              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                                {(() => {
                                  const selectedDept = preFestDepartments.find(
                                    (d) =>
                                      d.id === formData.preFestDepartments[1]
                                  );
                                  if (selectedDept) {
                                    const Icon = selectedDept.icon;
                                    return (
                                      <>
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                                          <Icon
                                            className={`w-3 h-3 sm:w-5 sm:h-5 ${selectedDept.color}`}
                                          />
                                        </div>
                                        <span className="font-medium text-gray-900 truncate text-sm sm:text-base">
                                          {selectedDept.name}
                                        </span>
                                      </>
                                    );
                                  }
                                  return null;
                                })()}
                              </div>
                            )}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="max-h-80 border-2 bg-white shadow-xl rounded-xl border-gray-200 max-w-[calc(100vw-2rem)]">
                          <SelectItem
                            value="__clear__"
                            className="py-3 px-3 sm:px-4 hover:bg-red-50 cursor-pointer rounded-lg mx-1 sm:mx-2 mb-2 transition-all duration-200"
                          >
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                              </div>
                              <span className="text-gray-500 font-medium text-sm sm:text-base">
                                Clear selection
                              </span>
                            </div>
                          </SelectItem>
                          {preFestDepartments
                            .filter(
                              (dept) =>
                                dept.id !== formData.preFestDepartments[0]
                            )
                            .map((dept) => (
                              <SelectItem
                                key={dept.id}
                                value={dept.id}
                                className="py-3 sm:py-4 px-3 sm:px-4 hover:bg-red-50 cursor-pointer rounded-lg mx-1 sm:mx-2 mb-1 transition-all duration-200 border border-transparent hover:border-red-200"
                              >
                                <div className="flex items-start gap-3 sm:gap-4 w-full min-w-0">
                                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                                    <dept.icon
                                      className={`w-4 h-4 sm:w-5 sm:h-5 ${dept.color}`}
                                    />
                                  </div>
                                  <div className="flex-1 text-left min-w-0">
                                    <div className="font-medium text-sm sm:text-base text-gray-900 leading-tight">
                                      {dept.name}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-500 mt-1 leading-tight line-clamp-2 sm:line-clamp-3">
                                      {dept.description}
                                    </div>
                                  </div>
                                </div>
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {errors.preFestDepartments && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-500 text-sm flex items-center gap-2 slide-in-animation">
                        <CheckCircle className="w-4 h-4" />
                        {errors.preFestDepartments}
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-8 rounded-2xl border-2 border-orange-200">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
                    <Label
                      htmlFor="festDayDepartment"
                      className="text-lg font-semibold flex items-center gap-2 text-gray-900"
                    >
                      <Sparkles className="w-5 h-5 text-red-600" />
                      Fest Day Department{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    {formData.festDayDepartment && (
                      <div className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-medium selection-badge">
                        ✓ Selected
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                    Choose the department you'd like to actively work with
                    during the fest days. This will be your primary
                    responsibility during the event.
                  </p>

                  <Select
                    value={formData.festDayDepartment}
                    onValueChange={(value) =>
                      onFormDataChange({
                        ...formData,
                        festDayDepartment: value,
                      })
                    }
                  >
                    <SelectTrigger
                      className={`form-input-enhanced h-12 sm:h-16 text-sm sm:text-base border-2 shadow-sm hover:shadow-md focus:ring-2 focus:ring-orange-200 transition-all duration-300 ${
                        errors.festDayDepartment
                          ? "border-red-500 bg-red-50"
                          : formData.festDayDepartment
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-orange-300 bg-white"
                      }`}
                    >
                      <SelectValue placeholder="Choose your department">
                        {formData.festDayDepartment && (
                          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                            {(() => {
                              const selectedDept = festDayDepartments.find(
                                (d) => d.id === formData.festDayDepartment
                              );
                              if (selectedDept) {
                                const Icon = selectedDept.icon;
                                return (
                                  <>
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                                      <Icon
                                        className={`w-3 h-3 sm:w-5 sm:h-5 ${selectedDept.color}`}
                                      />
                                    </div>
                                    <span className="font-medium text-gray-900 truncate text-sm sm:text-base">
                                      {selectedDept.name}
                                    </span>
                                  </>
                                );
                              }
                              return null;
                            })()}
                          </div>
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="max-h-80 border-2 bg-white shadow-xl rounded-xl border-gray-200 max-w-[calc(100vw-2rem)]">
                      {festDayDepartments.map((dept) => (
                        <SelectItem
                          key={dept.id}
                          value={dept.id}
                          className="py-3 sm:py-4 px-3 sm:px-4 hover:bg-orange-50 cursor-pointer rounded-lg mx-1 sm:mx-2 mb-1 transition-all duration-200 border border-transparent hover:border-orange-200"
                        >
                          <div className="flex items-start gap-3 sm:gap-4 w-full min-w-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                              <dept.icon
                                className={`w-4 h-4 sm:w-5 sm:h-5 ${dept.color}`}
                              />
                            </div>
                            <div className="flex-1 text-left min-w-0">
                              <div className="font-medium text-sm sm:text-base text-gray-900 leading-tight">
                                {dept.name}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-500 mt-1 leading-tight line-clamp-2 sm:line-clamp-3">
                                {dept.description}
                              </div>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {errors.festDayDepartment && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-500 text-sm flex items-center gap-2 slide-in-animation">
                        <CheckCircle className="w-4 h-4" />
                        {errors.festDayDepartment}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="form-section md:rounded-[0.75rem] rounded-0">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900">
                <Heart className="w-5 h-5 text-red-600" />
                Tell Us About Yourself
              </h3>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="motivation"
                    className="text-base font-medium flex items-center gap-1 text-gray-900"
                  >
                    Why do you want to join Damru?{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="motivation"
                    placeholder="Share your passion, motivation, and what you hope to contribute to Damru 2025..."
                    value={formData.motivation}
                    onChange={(e) =>
                      onFormDataChange({
                        ...formData,
                        motivation: e.target.value,
                      })
                    }
                    className={`form-input-enhanced min-h-32 text-base resize-none ${
                      errors.motivation ? "form-input-error" : ""
                    }`}
                  />
                  {errors.motivation && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-2 slide-in-animation">
                      <CheckCircle className="w-4 h-4" />
                      {errors.motivation}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="workSample"
                    className="text-base font-medium flex items-center gap-1 text-gray-900"
                  >
                    Show us your work <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="workSample"
                    placeholder="Share portfolio links, previous projects, relevant experience, or describe your skills and achievements..."
                    value={formData.workSample}
                    onChange={(e) =>
                      onFormDataChange({
                        ...formData,
                        workSample: e.target.value,
                      })
                    }
                    className={`form-input-enhanced min-h-28 text-base resize-none ${
                      errors.workSample ? "form-input-error" : ""
                    }`}
                  />
                  {errors.workSample && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-2 slide-in-animation">
                      <CheckCircle className="w-4 h-4" />
                      {errors.workSample}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 px-4">
              <Button
                variant="outline"
                onClick={onBack}
                disabled={isSubmitting}
                className="flex-1 h-14 text-base border-2 hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                Back to Personal Info
              </Button>
              <Button
                onClick={onSubmit}
                disabled={isSubmitting}
                className="flex-1 h-14 text-base bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-xl hover:shadow-red-300 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 w-5 h-5" />
                    Submit Registration
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
