import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MessageCircle className="h-5 w-5 text-blue-500" />
              <span>Let's create something amazing together</span>
              <MessageCircle className="h-5 w-5 text-purple-500" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Let's Work Together
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or
                just want to chat about web development, feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a
                      href="mailto:abdullahshahid5112@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      abdullahshahid5112@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-600 p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <a
                      href="tel:+923268831637"
                      className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
                    >
                      +923268831637
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600 font-medium">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <a href="https://github.com/abdullahshahid" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <a href="https://linkedin.com/in/abdullahshahid" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                    />
                    <Input
                      placeholder="Last Name"
                      className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                  />
                  <Input
                    placeholder="Subject"
                    className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
