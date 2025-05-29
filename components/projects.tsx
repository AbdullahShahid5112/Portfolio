import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Zap } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Fundrise",
      description:
        "A web-based investment platform designed to connect entrepreneurs and established businesses with potential investors.",
      techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "WebSockets"],
      date: "January 2024",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      features: [
        "Led front-end development with responsive UI components using Next.js and React.js",
        "Implemented real-time chat functionality using WebSockets for instant communication",
        "Developed Book Meeting feature integrated with third-party video calling service",
        "Created intuitive dashboards for startups and investors with personalized profiles",
        "Integrated secure transaction system with payment gateway support",
        "Documented platform functionality and architecture for stakeholders",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Trentex Furniture",
      description:
        "Official website for Trentex Furniture, a leading furniture brand in Pakistan, built with WordPress.",
      techStack: ["WordPress", "Elementor", "WooCommerce"],
      date: "2024",
      gradient: "from-emerald-500 to-cyan-600",
      bgGradient: "from-emerald-50 to-cyan-50",
      features: [
        "Designed and developed responsive website using WordPress",
        "Built visually appealing user interface using Elementor",
        "Customized WooCommerce functionalities for e-commerce features",
        "Integrated product catalog and inquiry forms",
        "Enhanced customer experience and lead generation",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const techColors = [
    "bg-gradient-to-r from-blue-500 to-blue-600",
    "bg-gradient-to-r from-purple-500 to-purple-600",
    "bg-gradient-to-r from-emerald-500 to-emerald-600",
    "bg-gradient-to-r from-orange-500 to-orange-600",
    "bg-gradient-to-r from-pink-500 to-pink-600",
    "bg-gradient-to-r from-cyan-500 to-cyan-600",
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span>Building innovative solutions with modern technologies</span>
              <Zap className="h-5 w-5 text-yellow-500" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`h-full flex flex-col border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${project.bgGradient} overflow-hidden group`}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <CardHeader className="bg-white/80 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 text-gray-800">{project.title}</CardTitle>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/90 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600 whitespace-nowrap">{project.date}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className={`text-white border-0 font-medium ${techColors[techIndex % techColors.length]} hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col bg-white/80 backdrop-blur-sm">
                  <ul className="space-y-3 mb-6 flex-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}
                        ></div>
                        <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Button
                      asChild
                      className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="flex-1 border-2 border-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
