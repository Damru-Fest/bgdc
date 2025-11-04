"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, CheckCircle, Trophy, Sparkles, Target, Users, Zap, Instagram, Shield } from "lucide-react"

interface ThankYouSectionProps {
  onRegisterAnother: () => void
}

export default function ThankYouSection({ onRegisterAnother }: ThankYouSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Gaming background effects */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff4500' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-600/20 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 bg-orange-600/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-500/15 rounded-full blur-xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-orange-500/15 rounded-full blur-xl float-animation"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-8 sm:mb-12">
            <div className="absolute inset-0 bg-red-600/30 blur-3xl animate-pulse"></div>
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-red-500/50 relative border-4 border-red-400/30">
              <Trophy className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white animate-bounce" />
            </div>
          </div>

          <div className="mb-8 sm:mb-12 px-4 sm:px-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fadeIn">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">Squad Registered!</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 leading-relaxed font-medium animate-fadeIn px-2 sm:px-0" style={{ animationDelay: "0.2s" }}>
              Your team has been successfully registered for the BGMI Qualifiers.
            </p>
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600/30 to-orange-600/30 backdrop-blur-sm border-2 border-red-500/40 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full animate-fadeIn max-w-full" style={{ animationDelay: "0.4s" }}>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-400 animate-pulse flex-shrink-0" />
              <span className="text-sm sm:text-lg lg:text-xl font-semibold text-white text-center">Ready for battle!</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-400 animate-pulse flex-shrink-0" style={{ animationDelay: "0.3s" }} />
            </div>
          </div>

          <Card className="mb-8 sm:mb-12 shadow-2xl border-2 border-red-500/30 bg-slate-800/70 backdrop-blur-xl animate-fadeIn mx-2 sm:mx-0" style={{ animationDelay: "0.6s" }}>
            <CardContent className="pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-500 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-400 text-center">What happens next?</h3>
                <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-500 flex-shrink-0" />
              </div>
              
              <div className="grid gap-4 sm:gap-6">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-red-900/30 to-orange-900/30 border-2 border-red-500/30 backdrop-blur-sm">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Registration Confirmed</h4>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Your squad registration has been confirmed. You'll receive an email confirmation with your team details and Qualifiers information.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-orange-900/30 to-red-900/30 border-2 border-orange-500/30 backdrop-blur-sm">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                    <Calendar className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Qualifiers Schedule</h4>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Qualifiers dates, match schedules, and venue details will be shared with all registered teams within 48 hours.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-red-900/30 to-orange-900/30 border-2 border-red-500/30 backdrop-blur-sm">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Team Verification</h4>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Our team will verify all submitted documents and player details. Ensure all team members have their UIDs ready for verification.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-100">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                    <Trophy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Prize Distribution</h4>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Winners will receive exciting cash prizes and certificates. All participants get e-certificates and exclusive Qualifiers badges.
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          <div className="mb-8 sm:mb-12">
            <Button
              onClick={onRegisterAnother}
              size="lg"
              className="group relative text-lg px-12 py-7 rounded-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-2xl transition-all duration-500 hover:scale-105 font-medium tracking-wide animate-fadeIn overflow-hidden"
              style={{ animationDelay: "0.8s" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative">Register Another Squad</span>
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 animate-fadeIn px-4 sm:px-0" style={{ animationDelay: "1s" }}>
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 text-gray-400">
              <span className="text-base sm:text-lg font-medium text-center">Follow us for Qualifiers updates</span>
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <a
                  href="https://instagram.com/damrufest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-pink-500/50"
                >
                  <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://x.com/damrufest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-gray-500/50 border border-gray-600"
                >
                  <svg 
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
