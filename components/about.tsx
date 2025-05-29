import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Target, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <span>Passionate developer crafting digital experiences</span>
              <Sparkles className="h-5 w-5 text-yellow-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Who I Am
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a passionate Front-End Developer with a strong foundation in modern web technologies. Currently
                pursuing my Bachelor's in Computer Science at the University of Lahore, I combine academic knowledge
                with practical experience to create engaging web applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With 6 months of hands-on experience, I specialize in
                <span className="font-semibold text-blue-600"> React.js</span> and
                <span className="font-semibold text-purple-600"> Next.js</span>, focusing on building responsive,
                user-friendly interfaces that deliver exceptional user experiences.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  What I Do
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I translate design concepts into interactive UI components with a focus on
                <span className="font-semibold text-emerald-600"> performance</span> and
                <span className="font-semibold text-cyan-600"> maintainability</span>. My approach emphasizes clean
                code, attention to detail, and collaboration within cross-functional teams.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm eager to contribute to impactful projects and continuously learn new technologies to stay at the
                forefront of web development.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Education</h3>
                <p className="text-gray-600 font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-sm text-gray-500">University of Lahore (2021-2025)</p>
                <div className="mt-2 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  CGPA: 3.01/4.00
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-cyan-50">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Experience</h3>
                <p className="text-gray-600 font-medium">6 months of hands-on development</p>
                <p className="text-sm text-gray-500">React.js & Next.js specialist</p>
                <div className="mt-2 inline-block bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Currently at Digital Dost
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Focus</h3>
                <p className="text-gray-600 font-medium">Performance & Accessibility</p>
                <p className="text-sm text-gray-500">Responsive Design</p>
                <div className="mt-2 inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Modern Web Technologies
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
