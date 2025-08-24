"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Calendar, CheckCircle, Heart, Sparkles, Target, Users } from "lucide-react"
import { FormData } from "./form-page-1"

const preFestDepartments = [
  {
    id: "marketing-promotion",
    name: "Marketing & Promotion",
    description:
      "Create buzz and excitement for Damru! Design campaigns, manage social media, and spread the word across campus and beyond.",
    icon: Sparkles,
    color: "text-red-600",
  },
  {
    id: "design-creative",
    name: "Design & Creative",
    description:
      "Bring visual magic to life! Design posters, banners, stage backdrops, and all creative elements that make Damru visually stunning.",
    icon: Sparkles,
    color: "text-pink-600",
  },
  {
    id: "sponsorship-partnerships",
    name: "Sponsorship & Partnerships",
    description:
      "Build valuable connections! Reach out to sponsors, negotiate partnerships, and secure funding to make Damru bigger and better.",
    icon: Sparkles,
    color: "text-orange-600",
  },
  {
    id: "logistics-planning",
    name: "Logistics & Planning",
    description:
      "Master the details! Coordinate venues, manage equipment, plan timelines, and ensure everything runs like clockwork.",
    icon: Sparkles,
    color: "text-red-600",
  },
  {
    id: "content-programming",
    name: "Content & Programming",
    description:
      "Curate amazing experiences! Plan events, coordinate with performers, design competitions, and create the fest lineup.",
    icon: Sparkles,
    color: "text-indigo-600",
  },
  {
    id: "tech-digital",
    name: "Tech & Digital",
    description:
      "Power the digital experience! Manage websites, apps, online registrations, live streaming, and all tech infrastructure.",
    icon: Sparkles,
    color: "text-blue-600",
  },
  {
    id: "public-relations",
    name: "Public Relations",
    description:
      "Be the voice of Damru! Handle media relations, press releases, celebrity management, and external communications.",
    icon: Sparkles,
    color: "text-green-600",
  },
  {
    id: "finance-budget",
    name: "Finance & Budget",
    description:
      "Keep the numbers in check! Manage budgets, track expenses, handle financial planning, and ensure fiscal responsibility.",
    icon: Sparkles,
    color: "text-yellow-600",
  },
]

const festDayDepartments = [
  {
    id: "event-coordination",
    name: "Event Coordination",
    description:
      "Lead and coordinate events during fest days. Ensure smooth execution of all performances and activities.",
    icon: Calendar,
    color: "text-red-600",
  },
  {
    id: "stage-management",
    name: "Stage Management",
    description:
      "Manage all stage activities, sound, lighting, and performances during the fest days.",
    icon: Sparkles,
    color: "text-red-600",
  },
  {
    id: "crowd-management",
    name: "Crowd Management",
    description:
      "Ensure safety and smooth flow of crowds during events. Manage queues and crowd control.",
    icon: Users,
    color: "text-red-600",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    description:
      "Take care of guests, judges, performers, and VIPs. Ensure everyone has a great experience.",
    icon: Heart,
    color: "text-pink-600",
  },
  {
    id: "technical-support",
    name: "Technical Support",
    description:
      "Handle all technical aspects during fest days including AV, streaming, and troubleshooting.",
    icon: Sparkles,
    color: "text-orange-600",
  },
  {
    id: "registration-desk",
    name: "Registration & Help Desk",
    description:
      "Manage participant registration, help desk queries, and provide information during the fest.",
    icon: CheckCircle,
    color: "text-orange-600",
  },
  {
    id: "security-coordination",
    name: "Security Coordination",
    description:
      "Work with security teams to ensure fest safety and coordinate with authorities.",
    icon: Target,
    color: "text-gray-600",
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    description:
      "Manage food stalls, coordinate with vendors, and ensure quality food services during the fest.",
    icon: Sparkles,
    color: "text-yellow-600",
  },
  {
    id: "photography-media",
    name: "Photography & Media",
    description:
      "Capture fest moments, manage social media live updates, and coordinate with media partners.",
    icon: Sparkles,
    color: "text-indigo-600",
  },
  {
    id: "emergency-response",
    name: "Emergency Response",
    description:
      "Handle any emergencies, first aid coordination, and ensure participant safety during the fest.",
    icon: Sparkles,
    color: "text-red-500",
  },
]

interface FormPage2Props {
  formData: FormData
  errors: Record<string, string>
  onFormDataChange: (formData: FormData) => void
  onSubmit: () => void
  onBack: () => void
  isSubmitting?: boolean
}

export default function FormPage2({ formData, errors, onFormDataChange, onSubmit, onBack, isSubmitting = false }: FormPage2Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="progress-step completed">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="w-16 h-0.5 bg-red-600"></div>
              <div className="progress-step completed">
                <Users className="w-5 h-5" />
              </div>
              <div className="w-16 h-0.5 bg-red-600"></div>
              <div className="progress-step completed">
                <span className="text-sm font-bold">3</span>
              </div>
              <div className="w-16 h-0.5 bg-red-600"></div>
              <div className="progress-step active">
                <span className="text-sm font-bold">4</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-500 px-4 py-2 rounded-full text-sm font-medium mb-6 slide-in-animation">
              <CheckCircle className="w-4 h-4" />
              Step 4 of 4
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 gradient-text slide-in-animation">
              Preferences & About You
            </h2>
            <p className="text-xl text-gray-700 slide-in-animation">Share your department preferences and tell us about yourself</p>
          </div>
        </div>

        <Card className="shadow-2xl border-2 bg-white backdrop-blur-sm slide-in-animation">
          <CardHeader className="text-center pb-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-t-lg">
            <CardTitle className="text-3xl font-bold gradient-text">Registration Form</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Select your preferred departments and tell us about yourself
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-10 p-8">
            <div className="form-section">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900">
                <Target className="w-5 h-5 text-red-600" />
                Department Preferences
              </h3>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200">
                  <div className="flex items-center justify-between mb-6">
                    <Label className="text-lg font-semibold flex items-center gap-2 text-gray-900">
                      <Calendar className="w-5 h-5 text-red-500" />
                      Pre-Fest Departments <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex items-center gap-2">
                      <div
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 selection-badge ${
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

                  <p className="text-gray-600 mb-6 text-base leading-relaxed">
                    Choose up to 2 departments you'd like to work with during the pre-fest preparation phase. Select departments that align with your skills and interests.
                  </p>

                  <div className="grid gap-6">
                    <div className="space-y-3">
                      <Label className="text-base font-medium text-gray-900 flex items-center gap-2">
                        First Preference
                      </Label>
                      <Select
                        value={formData.preFestDepartments[0] || ""}
                        onValueChange={(value) => {
                          const newDepartments = [...formData.preFestDepartments];
                          if (value === "__clear__") {
                            newDepartments.splice(0, 1);
                          } else {
                            newDepartments[0] = value;
                            if (newDepartments[1] === value) {
                              newDepartments.splice(1, 1);
                            }
                          }
                          onFormDataChange({ ...formData, preFestDepartments: newDepartments });
                        }}
                      >
                        <SelectTrigger className="form-input-enhanced h-16 text-base border-2 border-gray-200 hover:border-red-300 transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:ring-2 focus:ring-red-200">
                          <SelectValue placeholder="Select your first preference">
                            {formData.preFestDepartments[0] && (
                              <div className="flex items-center gap-3 min-w-0">
                                {(() => {
                                  const selectedDept = preFestDepartments.find(d => d.id === formData.preFestDepartments[0]);
                                  if (selectedDept) {
                                    const Icon = selectedDept.icon;
                                    return (
                                      <>
                                        <div className="w-8 h-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                                          <Icon className={`w-5 h-5 ${selectedDept.color}`} />
                                        </div>
                                        <span className="font-medium text-gray-900 truncate">{selectedDept.name}</span>
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
                          <SelectItem value="__clear__" className="py-3 px-4 cursor-pointer rounded-lg mx-2 mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-4 h-4 text-gray-400" />
                              </div>
                              <span className="text-gray-500 font-medium">Clear selection</span>
                            </div>
                          </SelectItem>
                          {preFestDepartments.filter(dept => dept.id !== formData.preFestDepartments[1]).map((dept) => (
                            <SelectItem
                              key={dept.id}
                              value={dept.id}
                              className="py-4 px-4 cursor-pointer rounded-lg mx-2 mb-1 border border-transparent"
                            >
                              <div className="flex items-center gap-4 w-full min-w-0">
                                <div className="w-10 h-10 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                                  <dept.icon className={`w-5 h-5 ${dept.color}`} />
                                </div>
                                <div className="flex-1 text-left min-w-0">
                                  <div className="font-medium text-base text-gray-900 truncate sm:whitespace-normal">{dept.name}</div>
                                  <div className="text-sm text-gray-500 line-clamp-2 mt-1 hidden sm:block">{dept.description}</div>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-medium text-gray-900 flex items-center gap-2">
                        <Target className="w-4 h-4 text-orange-500" />
                        Second Preference (Optional)
                      </Label>
                      <Select
                        value={formData.preFestDepartments[1] || ""}
                        onValueChange={(value) => {
                          const newDepartments = [...formData.preFestDepartments];
                          if (value === "__clear__") {
                            newDepartments.splice(1, 1);
                          } else {
                            newDepartments[1] = value;
                          }
                          onFormDataChange({ ...formData, preFestDepartments: newDepartments });
                        }}
                      >
                        <SelectTrigger className="form-input-enhanced h-16 text-base border-2 border-gray-200 hover:border-red-300 transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:ring-2 focus:ring-red-200">
                          <SelectValue placeholder="Select your second preference">
                            {formData.preFestDepartments[1] && (
                              <div className="flex items-center gap-3 min-w-0">
                                {(() => {
                                  const selectedDept = preFestDepartments.find(d => d.id === formData.preFestDepartments[1]);
                                  if (selectedDept) {
                                    const Icon = selectedDept.icon;
                                    return (
                                      <>
                                        <div className="w-8 h-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                                          <Icon className={`w-5 h-5 ${selectedDept.color}`} />
                                        </div>
                                        <span className="font-medium text-gray-900 truncate">{selectedDept.name}</span>
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
                          <SelectItem value="__clear__" className="py-3 px-4 hover:bg-red-50 cursor-pointer rounded-lg mx-2 mb-2 transition-all duration-200">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-4 h-4 text-gray-400" />
                              </div>
                              <span className="text-gray-500 font-medium">Clear selection</span>
                            </div>
                          </SelectItem>
                          {preFestDepartments.filter(dept => dept.id !== formData.preFestDepartments[0]).map((dept) => (
                            <SelectItem
                              key={dept.id}
                              value={dept.id}
                              className="py-4 px-4 hover:bg-red-50 cursor-pointer rounded-lg mx-2 mb-1 transition-all duration-200 border border-transparent hover:border-red-200"
                            >
                              <div className="flex items-center gap-4 w-full min-w-0">
                                <div className="w-10 h-10 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                                  <dept.icon className={`w-5 h-5 ${dept.color}`} />
                                </div>
                                <div className="flex-1 text-left min-w-0">
                                  <div className="font-medium text-base text-gray-900 truncate sm:whitespace-normal">{dept.name}</div>
                                  <div className="text-sm text-gray-500 line-clamp-2 mt-1 hidden sm:block">{dept.description}</div>
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

                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-orange-200">
                  <div className="flex items-center gap-2 mb-6">
                    <Label
                      htmlFor="festDayDepartment"
                      className="text-lg font-semibold flex items-center gap-2 text-gray-900"
                    >
                      <Sparkles className="w-5 h-5 text-red-600" />
                      Fest Day Department <span className="text-red-500">*</span>
                    </Label>
                    {formData.festDayDepartment && (
                      <div className="ml-auto px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium selection-badge">
                        ✓ Selected
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6 text-base leading-relaxed">
                    Choose the department you'd like to actively work with during the fest days. This will be your primary responsibility during the event.
                  </p>

                  <Select
                    value={formData.festDayDepartment}
                    onValueChange={(value) => onFormDataChange({ ...formData, festDayDepartment: value })}
                  >
                    <SelectTrigger
                      className={`form-input-enhanced h-16 text-base border-2 shadow-sm hover:shadow-md focus:ring-2 focus:ring-orange-200 transition-all duration-300 ${
                        errors.festDayDepartment
                          ? "border-red-500 bg-red-50"
                          : formData.festDayDepartment
                            ? "border-orange-500 bg-orange-50"
                            : "border-gray-200 hover:border-orange-300 bg-white"
                      }`}
                    >
                      <SelectValue placeholder="Choose your fest day department">
                        {formData.festDayDepartment && (
                          <div className="flex items-center gap-3 min-w-0">
                            {(() => {
                              const selectedDept = festDayDepartments.find((d) => d.id === formData.festDayDepartment)
                              if (selectedDept) {
                                const Icon = selectedDept.icon
                                return (
                                  <>
                                    <div className="w-8 h-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                                      <Icon className={`w-5 h-5 ${selectedDept.color}`} />
                                    </div>
                                    <span className="font-medium text-gray-900 truncate">{selectedDept.name}</span>
                                  </>
                                )
                              }
                              return null
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
                          className="py-4 px-4 hover:bg-orange-50 cursor-pointer rounded-lg mx-2 mb-1 transition-all duration-200 border border-transparent hover:border-orange-200"
                        >
                          <div className="flex items-center gap-4 w-full min-w-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                              <dept.icon className={`w-5 h-5 ${dept.color}`} />
                            </div>
                            <div className="flex-1 text-left min-w-0">
                              <div className="font-medium text-base text-gray-900 truncate sm:whitespace-normal">{dept.name}</div>
                              <div className="text-sm text-gray-500 line-clamp-2 mt-1 hidden sm:block">{dept.description}</div>
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

            <div className="form-section">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900">
                <Heart className="w-5 h-5 text-red-600" />
                Tell Us About Yourself
              </h3>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="motivation" className="text-base font-medium flex items-center gap-1 text-gray-900">
                    Why do you want to join Damru? <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="motivation"
                    placeholder="Share your passion, motivation, and what you hope to contribute to Damru 2025..."
                    value={formData.motivation}
                    onChange={(e) => onFormDataChange({ ...formData, motivation: e.target.value })}
                    className={`form-input-enhanced min-h-32 text-base resize-none ${errors.motivation ? "form-input-error" : ""}`}
                  />
                  {errors.motivation && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-2 slide-in-animation">
                      <CheckCircle className="w-4 h-4" />
                      {errors.motivation}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workSample" className="text-base font-medium flex items-center gap-1 text-gray-900">
                    Show us your work <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="workSample"
                    placeholder="Share portfolio links, previous projects, relevant experience, or describe your skills and achievements..."
                    value={formData.workSample}
                    onChange={(e) => onFormDataChange({ ...formData, workSample: e.target.value })}
                    className={`form-input-enhanced min-h-28 text-base resize-none ${errors.workSample ? "form-input-error" : ""}`}
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

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
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
  )
}
