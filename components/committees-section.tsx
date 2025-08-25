"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FAQSection from "@/components/faq-section";
import {
  ArrowRight,
  Target,
  Megaphone,
  Palette,
  Handshake,
  Calendar,
  Music,
  Code,
  Users,
  Calculator,
  Brush,
  Trophy,
  Store,
  Lightbulb,
  Truck,
  Workflow,
  Heart,
  Bus,
  ClipboardCheck,
  AlertTriangle,
} from "lucide-react";

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
    shortDesc: "Plan and execute competitions",
    icon: Trophy,
    color: "text-yellow-600",
  },
  {
    id: "events-programming",
    name: "Events",
    description:
      "From stage shows to campus-wide activities, be the team that brings big moments to life and keeps the energy high.",
    shortDesc: "Manage performances and activities",
    icon: Calendar,
    color: "text-indigo-600",
  },
  {
    id: "marketing-promotion",
    name: "Marketing ",
    description:
      "Spread the word! Create campaigns, strategies, and social media buzz to make sure everyone knows about Damru.",
    shortDesc: "Promote events and maintain buzz",
    icon: Megaphone,
    color: "text-red-600",
  },
  {
  id: "exhibition-workshops",
  name: "Exhibitions & Workshops",
  description:
    "Plan, design, and execute engaging exhibitions, stalls, and creative showcases while also organizing impactful workshops and sessions that inspire learning, interaction, and innovation at the fest.",
  shortDesc: "Host exhibitions and interactive workshops",
  icon: Lightbulb,
  color: "text-teal-600",
},
  {
    id: "vendor-management",
    name: "Vendor Management",
    description:
      "Work closely with external partners and vendors to ensure smooth coordination and successful execution.",
    shortDesc: "Coordinate vendors and stalls",
    icon: Store,
    color: "text-cyan-600",
  },
  {
    id: "logistics-planning",
    name: "Logistics & Planning",
    description:
      "The backbone of the fest! Manage resources, permissions, setups, and ensure everything runs like clockwork.",
    shortDesc: "Manage resources, permissions, and setups",
    icon: Truck,
    color: "text-gray-600",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    description:
      "Take care of guests, judges, and performers. Ensure everyone feels welcome.",
    shortDesc: "Manage guests, judges, and performers",
    icon: Heart,
    color: "text-pink-600",
  },
  {
    id: "transportation",
    name: "Transportation",
    description:
      "Manage transport for guests, judges, and essential fest logistics.",
    shortDesc: "Arrange transport for guests and logistics",
    icon: Bus,
    color: "text-green-600",
  },
  {
    id: "qrt",
    name: "QRT ",
    description:
      "(Quick Response Team) Be the first responders to any issues. Ensure quick solutions for fest-day problems.",
    shortDesc: "Respond quickly to fest-day issues",
    icon: AlertTriangle,
    color: "text-orange-600",
  },
  {
    id: "regdesk",
    name: "Registration Desk",
    description:
      "Handle participant registrations, queries, and provide information on fest days.",
    shortDesc: "Handle registrations and queries",
    icon: ClipboardCheck,
    color: "text-cyan-600",
  },

];

interface CommitteesSectionProps {
  onNext: () => void;
}

export default function CommitteesSection({ onNext }: CommitteesSectionProps) {
  // Add a CSS class to hide global FAQ on mobile for this page
  React.useEffect(() => {
    document.body.classList.add('committees-page');
    return () => {
      document.body.classList.remove('committees-page');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-4">
        {/* Pre-Fest Departments Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 gradient-text">
              Fest Departments
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our committees and departments. Each offers unique
              opportunities to contribute your skills and grow as a leader.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preFestDepartments.map((dept, index) => (
              <Card
                key={dept.id}
                className="bg-white border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-start items-start gap-[0.8rem] h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl flex items-center justify-center">
                      <dept.icon className={`w-8 h-8 ${dept.color}`} />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                      <CardTitle
                        className="text-xl text-start text-gray-900"
                        style={{ fontFamily: "inter" }}
                      >
                        {dept.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500 mt-1">
                        {dept.shortDesc}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {dept.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fest Day Departments Section */}
        {/* <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 gradient-text">Fest Day Departments</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These departments are responsible for execution and ensuring everything runs smoothly during the fest.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festDayDepartments.map((dept, index) => (
              <Card
                key={dept.id}
                className="bg-white border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-start items-start gap-[0.8rem] h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl flex items-center justify-center">
                      <dept.icon className={`w-8 h-8 ${dept.color}`} />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                      <CardTitle
                        className="text-xl text-start text-gray-900"
                        style={{ fontFamily: "inter" }}
                      >
                        {dept.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500 mt-1">
                        {dept.shortDesc}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {dept.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        <div
          className="text-center md:relative fixed"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "1.5rem",
            // position: "fixed",
          }}
        >
          {/* Desktop: Only Continue button, FAQ is globally positioned */}
          <div className="hidden md:block">
            <Button
              size="lg"
              onClick={onNext}
              className="px-12 py-8 cursor-pointer text-xl rounded-2xl shadow-xl hover:shadow-red-300 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-red-600 to-red-700"
            >
              <Target className="mr-3 w-6 h-6" />
              Continue 
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>

          {/* Mobile: Both buttons side by side */}
          <div className="md:hidden flex items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={onNext}
              className="px-8 py-6 cursor-pointer text-lg rounded-2xl shadow-xl hover:shadow-red-300 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-red-600 to-red-700 flex-1 max-w-xs"
            >
              <Target className="mr-2 w-5 h-5" />
              Continue 
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <FAQSection isMobileInline={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
