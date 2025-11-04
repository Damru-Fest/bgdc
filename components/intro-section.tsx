"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Users, Zap } from "lucide-react";

interface IntroSectionProps {
  onNext: () => void;
}

export default function IntroSection({ onNext }: IntroSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Gaming-inspired animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hex grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff4500' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-red-600/20 to-orange-600/10 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-orange-600/15 to-red-600/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-red-500/10 to-orange-500/5 rounded-full blur-2xl float-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 50%, rgba(255, 69, 0, 0.03) 50%)',
        backgroundSize: '100% 4px',
      }}></div>

      {/* Floating particles with gaming aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left side - Gaming-enhanced content */}
            <div className="space-y-10 slide-in-animation text-center lg:text-left">
              <div className="space-y-8">
                {/* Logo with subtle glow */}
                <div className="mb-12 flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full"></div>
                    <img
                      src="/image.png"
                      alt="Damru Fest Logo"
                      className="w-24 h-24 object-contain relative z-10"
                    />
                  </div>
                </div>

                {/* Gaming-style typography */}
                <div className="space-y-4" style={{ fontFamily: "Kamal" }}>
                  <h1 className="text-6xl lg:text-8xl font-extralight text-white leading-[0.9] tracking-[0.07em] font-kamal">
                    BGMI Qualifiers
                  </h1>
                  <h2 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent leading-[0.9] tracking-normal font-kamal animate-pulse-slow">
                    Damru 2025
                  </h2>
                </div>

                {/* Refined subtitle with gaming accent */}
                <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
                  <div className="h-px w-12 bg-gradient-to-r from-red-500 to-transparent"></div>
                  <span className="text-sm font-medium text-gray-400 uppercase tracking-[0.2em]">
                    Battlegrounds Mobile India Championship
                  </span>
                  <div className="h-px w-12 bg-gradient-to-l from-red-500 to-transparent"></div>
                </div>
              </div>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0 font-light tracking-wide">
                Register your squad for the ultimate BGMI Qualifiers at Damru 2025. 
                Compete with the best teams and claim victory in the battlefield.
              </p>

              {/* Gaming-style CTA */}
              <div className="pt-6 flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="group relative text-lg px-12 py-7 rounded-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-2xl transition-all duration-500 hover:scale-105 font-medium tracking-wide overflow-hidden"
                  onClick={onNext}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative flex items-center gap-2">
                    Register Your Squad
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>

            {/* Right side - Gaming cards with neon accents */}
            <div className="space-y-6">
              <Card className="border border-red-500/20 bg-slate-800/50 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden slide-in-animation hover:border-red-500/40 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="pb-[0.5rem] relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Trophy className="w-7 h-7 text-red-500" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-2xl text-white font-semibold">
                        Championship Glory
                      </CardTitle>
                      <div className="text-sm text-red-400 font-medium uppercase tracking-wide">
                        Win Big Prizes
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Compete for exciting cash prizes and exclusive rewards. 
                    Show your skills and claim the championship title.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="border border-orange-500/20 bg-slate-800/50 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden slide-in-animation hover:border-orange-500/40 transition-all duration-300 group"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="pb-[0.5rem] relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Users className="w-7 h-7 text-orange-500" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-2xl text-white font-semibold">
                        Squad Registration
                      </CardTitle>
                      <div className="text-sm text-orange-400 font-medium uppercase tracking-wide">
                        Team of 4-5 Players
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Register your complete squad with 4 main players and 1 optional substitute. 
                    Build your dream team and dominate the competition.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="border border-red-500/20 bg-slate-800/50 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden slide-in-animation hover:border-red-500/40 transition-all duration-300 group"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="pb-[0.5rem] relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Target className="w-7 h-7 text-red-500" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-2xl text-white font-semibold">
                        Battle Ready
                      </CardTitle>
                      <div className="text-sm text-red-400 font-medium uppercase tracking-wide">
                        Intense Competition
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Experience high-intensity battles with top teams from universities. 
                    Prove your strategy and become the ultimate champions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
