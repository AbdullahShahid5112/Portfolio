import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Digital Dost",
      location: "Lahore, Pakistan",
      period: "December 2024 - Present",
      techStack: ["Next.js", "React.js", "Tailwind CSS", "WordPress", "Elementor"],
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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">{exp.title}</CardTitle>
                      <p className="text-xl text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  {exp.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-2">•</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
