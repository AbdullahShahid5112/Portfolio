"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, MapPin, Phone, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Video Background */}
      <video
        width="480"
        height="720"
        preload="none"
        autoPlay
        crossOrigin="anonymous"
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/layout.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse-slow">
            <Sparkles className="h-4 w-4" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Abdullah Shahid
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-8 font-semibold drop-shadow-lg">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Front-End Developer
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Enthusiastic Front-End Developer with 6 months of hands-on experience in building
            <span className="font-semibold text-blue-300"> responsive</span> and
            <span className="font-semibold text-purple-300"> user-friendly</span> web applications using
            <span className="font-semibold text-cyan-300"> React.js</span> and
            <span className="font-semibold text-emerald-300"> Next.js</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
              <MapPin className="h-4 w-4 text-red-300" />
              <span className="text-white font-medium">Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
              <Phone className="h-4 w-4 text-green-300" />
              <span className="text-white font-medium">+923268831637</span>
            </div>
            <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
              <Mail className="h-4 w-4 text-blue-300" />
              <span className="text-white font-medium">abdullahshahid5112@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="min-w-[150px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="min-w-[150px] border-2 border-white/50 text-black hover:bg-white/20 hover:text-white backdrop-blur-sm transition-all duration-300"
            >
              Get In Touch
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
            >
              <a
                href="https://github.com/abdullahshahid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}