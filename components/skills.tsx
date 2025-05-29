import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Wrench, BookOpen } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "HTML5", "CSS3"],
      icon: Code,
      gradient: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Tailwind CSS"],
      icon: Globe,
      gradient: "from-blue-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "Vercel", "WordPress", "Elementor", "Go High Level"],
      icon: Wrench,
      gradient: "from-purple-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    },
    {
      title: "Databases & Backend",
      skills: ["MongoDB", "Node.js", "Express.js"],
      icon: Database,
      gradient: "from-emerald-400 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "OOP", "Database Systems", "Computer Networks"],
      icon: BookOpen,
      gradient: "from-red-400 to-rose-500",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
    },
  ]

  const skillColors = [
    "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
    "bg-gradient-to-r from-purple-500 to-purple-600 text-white",
    "bg-gradient-to-r from-pink-500 to-pink-600 text-white",
    "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white",
    "bg-gradient-to-r from-orange-500 to-orange-600 text-white",
    "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white",
    "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white",
    "bg-gradient-to-r from-red-500 to-red-600 text-white",
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-600 text-lg">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${category.bgColor}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className={`text-sm font-medium ${skillColors[skillIndex % skillColors.length]} border-0 hover:scale-105 transition-transform duration-200`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
