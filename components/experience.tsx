import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, ChevronRight } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Digital Dost",
      location: "Lahore, Pakistan",
      period: "December 2024 - Present",
      techStack: ["Next.js", "React.js", "Tailwind CSS", "WordPress", "Elementor"],
      description: "Key contributor to DigitalDost, a responsive portfolio website for a digital solutions company. Built the website from scratch with focus on performance, accessibility and responsive design. Enhanced UI across multiple sections for improved consistency and usability.",
      achievements: [
        "Key contributor to DigitalDost, a responsive portfolio website for a digital solutions company using Next.js, HTML, CSS, and JavaScript",
        "Built the website from scratch with a focus on performance, accessibility and responsive design",
        "Independently handled development under senior developer guidance, from planning to deployment",
        "Contributed to UpInvest stock market portfolio tracking platform, building responsive UI with Next.js and Tailwind CSS",
        "Enhanced the UI across multiple sections of the platform for improved consistency and usability",
        "Built reusable front-end components aligned with design system guidelines",
        "Built and maintained a WordPress-based marketing website of UpInvest stock market portfolio tracking platform",
      ],
    },
    {
      title: "Rider Support Representative",
      company: "Mindbridge",
      location: "Lahore, Pakistan",
      period: "April 2023 - December 2023",
      techStack: [],
      description: "Provided real-time chat support to assist delivery riders with order-related issues. Handled cases such as spilled orders, undelivered items, and delivery concerns while ensuring smooth coordination between riders and customers.",
      achievements: [
        "Provided real-time chat support to assist delivery riders with order-related issues",
        "Made outbound calls when necessary to guide riders in resolving delivery challenges",
        "Handled cases such as spilled orders, undelivered items, and other delivery concerns",
        "Communicated with customers to inform them about order delays or issues",
        "Ensured smooth coordination between riders and customers for a seamless delivery experience",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 tracking-wide">
            MY EXPERIENCE
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 hidden lg:block"></div>

            <div className="space-y-12 lg:space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-gray-800 rounded-full hidden lg:flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                    {/* Period Badge - Desktop */}
                    <div className={`hidden lg:block absolute top-4  ${index % 2 === 0 ? 'right-0 transform translate-x-20' : 'left-0 transform -translate-x-20'}`}>
                      <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                        {exp.period}
                      </div>
                    </div>

                    <Card className="bg-gray-50 border-l-4 border-l-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                                {exp.company}
                              </CardTitle>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <p className="text-gray-600 font-medium mb-1">{exp.location}</p>
                            <p className="text-gray-800 font-semibold text-lg">{exp.title}</p>
                          </div>
                        </div>

                        {/* Period Badge - Mobile */}
                        <div className="lg:hidden bg-gray-800 text-white px-3 py-1 rounded text-sm font-medium inline-block mt-2">
                          {exp.period}
                        </div>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {exp.techStack.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.techStack.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-100">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}