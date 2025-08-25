"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, CheckCircle, Heart, Sparkles, Target, Users, Zap } from "lucide-react"
import { FormData } from "./form-page-1"

interface ThankYouSectionProps {
  onRegisterAnother: () => void
}

export default function ThankYouSection({ onRegisterAnother }: ThankYouSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 bg-orange-100 rounded-full blur-xl float-animation"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-amber-100 rounded-full blur-xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-pink-100 rounded-full blur-xl float-animation"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-12 h-12 bg-red-200 rounded-full blur-xl float-animation"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-orange-200 rounded-full blur-xl float-animation"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-8 sm:mb-12">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto pulse-glow shadow-2xl">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white animate-bounce" />
            </div>
          </div>

          <div className="mb-8 sm:mb-12 px-4 sm:px-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 gradient-text animate-fadeIn">
              Thank You!
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 sm:mb-8 leading-relaxed font-medium animate-fadeIn px-2 sm:px-0" style={{ animationDelay: "0.2s" }}>
              Your registration has been submitted successfully.
            </p>
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-100 to-orange-100 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full border-2 border-red-200 animate-fadeIn max-w-full" style={{ animationDelay: "0.4s" }}>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-500 animate-pulse flex-shrink-0" />
              <span className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 text-center">Welcome to the Damru family!</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-500 animate-pulse flex-shrink-0" style={{ animationDelay: "0.3s" }} />
            </div>
          </div>

          <Card className="mb-8 sm:mb-12 shadow-2xl border-2 border-red-200 bg-white backdrop-blur-sm animate-fadeIn mx-2 sm:mx-0" style={{ animationDelay: "0.6s" }}>
            <CardContent className="pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-500 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 text-center">What happens next?</h3>
                <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-500 flex-shrink-0" />
              </div>
              
              <div className="grid gap-4 sm:gap-6">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-100">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Email Confirmation</h4>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Check your email for a confirmation message with detailed next steps and important information about your registration.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-100">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Committee Contact</h4>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Committee coordinators will contact you within 2-3 days to welcome you and share department-specific details.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-red-50 border-2 border-amber-100">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                    <Calendar className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Orientation Session</h4>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Attend the orientation session where you'll meet your team and learn about your exciting journey ahead. Details will be shared soon!
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          <div className="mt-8 sm:mt-12 animate-fadeIn px-4 sm:px-0" style={{ animationDelay: "1s" }}>
            <div className="flex items-center justify-center gap-2 sm:gap-4 text-gray-600">
              <span className="text-base sm:text-lg font-medium text-center">Follow us on social media for updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
