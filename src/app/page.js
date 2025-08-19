"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Lightbulb,
  Palette,
  Code,
  Zap,
  Star,
  ChevronDown,
  Send,
  Mail,
  User,
  MessageSquare,
} from "lucide-react"

export default function InblajCreativePage() {
  const [dawnPhase, setDawnPhase] = useState("darkness") // darkness, firstLight, emergence, illuminated
  const [showContent, setShowContent] = useState(false)
  const [showElements, setShowElements] = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const phase1 = setTimeout(() => setDawnPhase("firstLight"), 3000)
    const phase2 = setTimeout(() => setDawnPhase("emergence"), 6000)
    const phase3 = setTimeout(() => setDawnPhase("illuminated"), 15000)
    const particles = setTimeout(() => setShowParticles(true), 8000)
    const content1 = setTimeout(() => setShowContent(true), 12000)
    const content2 = setTimeout(() => setShowElements(true), 13000)

    return () => {
      clearTimeout(phase1)
      clearTimeout(phase2)
      clearTimeout(phase3)
      clearTimeout(particles)
      clearTimeout(content1)
      clearTimeout(content2)
    }
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    // Here you would typically send the form data to your backend
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className={`fixed inset-0 z-0 ${
          dawnPhase === "darkness"
            ? "complete-darkness"
            : dawnPhase === "firstLight"
              ? "first-light"
              : dawnPhase === "emergence"
                ? "cinematic-dawn"
                : "bg-gradient-to-br from-facc15 via-f9fafb to-ffffff"
        }`}
      />

      {(dawnPhase === "emergence" || dawnPhase === "illuminated") && (
        <div className="fixed inset-0 z-10 horizon-glow pointer-events-none" />
      )}

      {(dawnPhase === "emergence" || dawnPhase === "illuminated") && (
        <div className="fixed inset-0 z-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-48 h-full aurora-rays" style={{ animationDelay: "6s" }} />
          <div className="absolute top-0 left-1/4 w-40 h-full aurora-rays" style={{ animationDelay: "6.8s" }} />
          <div className="absolute top-0 left-2/4 w-44 h-full aurora-rays" style={{ animationDelay: "7.6s" }} />
          <div className="absolute top-0 right-1/4 w-36 h-full aurora-rays" style={{ animationDelay: "8.4s" }} />
          <div className="absolute top-0 right-0 w-32 h-full aurora-rays" style={{ animationDelay: "9.2s" }} />
        </div>
      )}

      {showParticles && (
        <div className="fixed inset-0 z-15 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-facc15/30 rounded-full particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      )}

      <nav className={`relative z-50 p-6 transition-all duration-1500 ${showElements ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-heading font-bold text-white hover:scale-105 transition-transform duration-300 content-emerge">
            Inblaj <span className="text-shimmer">Creative</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {["Services", "Work", "About", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-white/80 hover:text-white transition-all duration-300 hover:scale-110 bounce-gentle content-emerge reveal-delay-${index + 1}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="relative z-40 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-2000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} content-emerge`}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight float text-illuminate">
              Where Light Emerges
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-facc15 to-f9fafb text-shimmer">
                From Darkness
              </span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 content-emerge reveal-delay-2 ${showElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              We illuminate your brand's potential with creative digital solutions that transform ideas into
              extraordinary experiences.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 content-emerge reveal-delay-3 ${showElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-pulse hover-glow font-medium px-8 py-4 text-lg transition-all duration-300"
              >
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-4 text-lg bg-transparent hover-lift transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 content-emerge reveal-delay-4 ${showElements ? "opacity-100" : "opacity-0"}`}
        >
          <ChevronDown className="h-6 w-6 text-white/60 bounce-gentle" />
        </div>
      </section>

      <section id="services" className="relative z-40 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 content-emerge reveal-delay-4 ${showElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 float">
              Our Creative <span className="text-shimmer">Services</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From concept to creation, we bring your digital vision to life with expertise and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Brand Design",
                description:
                  "Crafting unique visual identities that capture your brand's essence and resonate with your audience.",
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description:
                  "Building responsive, fast, and user-friendly websites that deliver exceptional digital experiences.",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Creative Strategy",
                description:
                  "Developing comprehensive strategies that align your creative vision with business objectives.",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Digital Marketing",
                description:
                  "Amplifying your reach through targeted campaigns that engage and convert your ideal customers.",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "UI/UX Design",
                description:
                  "Designing intuitive interfaces that prioritize user experience and drive meaningful interactions.",
              },
              {
                icon: <ArrowRight className="h-8 w-8" />,
                title: "Consulting",
                description:
                  "Providing expert guidance to help you navigate the digital landscape and achieve your goals.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`bg-card/10 backdrop-blur-sm border-white/20 hover:bg-card/20 transition-all duration-500 hover-lift scale-in content-emerge reveal-delay-${index + 5} ${showElements ? "opacity-100" : "opacity-0"}`}
              >
                <CardContent className="p-6">
                  <div className="text-cyan-400 mb-4 float animate-delay-1">{service.icon}</div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-40 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 float">
              Let's Create Something <span className="text-shimmer">Amazing</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's start the conversation.
            </p>
          </div>

          <Card
            className={`bg-card/10 backdrop-blur-sm border-white/20 hover:bg-card/15 transition-all duration-500 hover-lift scale-in ${showContent ? "opacity-100" : "opacity-0"}`}
          >
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-cyan-400" />
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 hover:bg-white/10"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4 text-cyan-400" />
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 hover:bg-white/10"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-cyan-400" />
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 hover:bg-white/10 resize-none"
                    placeholder="Tell us about your project and how we can help bring your vision to life..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-pulse hover-glow font-medium px-8 py-4 text-lg transition-all duration-300"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative z-40 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight float">
              Ready to Illuminate Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-facc15 to-f9fafb text-shimmer">
                Digital Presence?
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Every great project begins with a conversation.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-pulse hover-glow font-medium px-8 py-4 text-lg transition-all duration-300"
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-40 py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="md:col-span-2">
              <div className="text-2xl font-heading font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
                Inblaj <span className="text-shimmer">Creative</span>
              </div>
              <p className="text-white/60 mb-4 max-w-md">
                Where light emerges from darkness. We're a digital agency passionate about creating extraordinary
                experiences.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-white/60">
                {["Brand Design", "Web Development", "UI/UX Design", "Digital Marketing"].map((service, index) => (
                  <li
                    key={service}
                    className={`hover:text-white transition-colors duration-300 hover:translate-x-2 animate-delay-${index + 1}`}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-white/60">
                {["hello@inblajcreative.com", "+1 (555) 123-4567", "Follow us on social"].map((contact, index) => (
                  <li
                    key={contact}
                    className={`hover:text-white transition-colors duration-300 hover:translate-x-2 animate-delay-${index + 1}`}
                  >
                    {contact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40">
            <p>&copy; 2024 Inblaj Creative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
