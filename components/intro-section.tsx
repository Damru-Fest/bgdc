"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Zap } from "lucide-react"

interface IntroSectionProps {
  onNext: () => void
}

export default function IntroSection({ onNext }: IntroSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-rose-50 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main floating elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-rose-100/40 to-pink-100/30 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-red-100/30 to-rose-100/20 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-pink-100/20 to-rose-100/15 rounded-full blur-2xl float-animation" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-gradient-to-tl from-rose-200/15 to-red-100/10 rounded-full blur-3xl float-animation" style={{ animationDelay: "1s" }}></div>
        
        {/* Additional ambient elements */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-gray-100/20 to-slate-100/15 rounded-full blur-2xl float-animation" style={{ animationDelay: "3s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-l from-rose-100/25 to-pink-100/20 rounded-full blur-2xl float-animation" style={{ animationDelay: "5s" }}></div>
      </div>

      {/* Refined floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-rose-400/40 to-pink-400/40 rounded-full animate-pulse" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-red-400/30 to-rose-400/30 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-gradient-to-r from-pink-400/35 to-rose-400/35 rounded-full animate-pulse" style={{ animationDelay: "3s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-gradient-to-r from-rose-500/40 to-red-500/40 rounded-full animate-pulse" style={{ animationDelay: "4.5s" }}></div>
        <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-gradient-to-r from-gray-400/25 to-slate-400/25 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center px-8 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left side - Enhanced content */}
            <div className="space-y-10 slide-in-animation">
              <div className="space-y-8">
                {/* Enhanced logo with glow effect - centered on left side */}
                <div className="mb-12 relative flex justify-center lg:justify-start">
                  <div className="relative inline-block">
                    <img
                      src="/image.png"
                      alt="Damru Fest Logo"
                      className="w-24 h-24 rounded-full shadow-2xl object-cover hover:scale-105 transition-all duration-500 relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-rose-400/20 rounded-full blur-lg scale-110 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Enhanced typography */}
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-8xl font-extralight text-gray-900 leading-[0.9] tracking-tight font-kamal">
                    Welcome to
                  </h1>
                  <h2 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent leading-[0.9] tracking-tight font-kamal">
                    Damru 2025
                  </h2>
                </div>

                {/* Refined subtitle */}
                <div className="flex items-center gap-3 pt-4">
                  <div className="h-px w-12 bg-gradient-to-r from-red-500 to-transparent"></div>
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-[0.2em]">
                    Rishihood University Cultural Fest
                  </span>
                </div>
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl font-light tracking-wide">
                Join the most exciting cultural fest at Rishihood University. Be part of creating unforgettable experiences that define our campus spirit.
              </p>

              {/* Enhanced CTA section */}
              <div className="pt-6">
                <Button
                  size="lg"
                  className="text-lg px-12 py-7 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 font-medium tracking-wide"
                  onClick={onNext}
                >
                  Join Damru 2025 Team
                </Button>
                
              </div>
            </div>

            {/* Right side - Clean cards without hover effects */}
            <div className="space-y-6">
              <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl overflow-hidden slide-in-animation">
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Users className="w-7 h-7 text-red-600" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-2xl text-gray-900 font-semibold">
                        Team Collaboration
                      </CardTitle>
                      <div className="text-sm text-red-600/80 font-medium uppercase tracking-wide">
                        Build Connections
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Work with passionate students across different departments and build lasting friendships that extend beyond the fest.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl overflow-hidden slide-in-animation" style={{ animationDelay: "0.2s" }}>
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Zap className="w-7 h-7 text-orange-500" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-2xl text-gray-900 font-semibold">
                        Skill Development
                      </CardTitle>
                      <div className="text-sm text-orange-600/80 font-medium uppercase tracking-wide">
                        Grow Your Abilities
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Gain hands-on experience in event management, leadership, and creative problem-solving through real challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl overflow-hidden slide-in-animation" style={{ animationDelay: "0.4s" }}>
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Heart className="w-7 h-7 text-rose-600" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-2xl text-gray-900 font-semibold">
                        Create Magic
                      </CardTitle>
                      <div className="text-sm text-rose-600/80 font-medium uppercase tracking-wide">
                        Memorable Moments
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Be part of creating memorable experiences that will be cherished by the entire campus and become university legacy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
