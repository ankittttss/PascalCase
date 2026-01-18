"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock,
  Linkedin,
  Github,
  Twitter,
  CheckCircle2
} from "lucide-react"

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Chat on Teams",
    description: "Quick conversations for urgent questions",
    action: "Open Teams",
    href: "https://teams.microsoft.com",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "For detailed inquiries and proposals",
    action: "info@pascalcase.com",
    href: "mailto:info@pascalcase.com",
  },
]

const info = [
  {
    icon: MapPin,
    label: "Location",
    value: "Remote-first, Global Team",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
]

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 py-16 text-center">
          <Badge variant="secondary" className="mb-6">
            Contact
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {"Let's Talk"} <span className="text-primary">D365</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Questions about our products? 
            {"We'd love to hear from you."}
          </p>
        </section>

        {/* Contact Methods */}
        <section className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
            {contactMethods.map((method) => (
              <Link key={method.title} href={method.href} target="_blank" rel="noopener noreferrer">
                <Card className="border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card transition-all h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <method.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                    <p className="text-sm text-primary font-medium mt-3">{method.action}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="mt-8 p-8 rounded-xl border border-border bg-card/50 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {"Thanks for reaching out. We'll be in touch soon."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        required 
                        className="bg-card border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        required 
                        className="bg-card border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      required 
                      className="bg-card border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company" 
                      className="bg-card border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help?" 
                      required 
                      className="bg-card border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project or question..."
                      rows={5}
                      required 
                      className="bg-card border-border resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:pl-12">
              <div className="sticky top-32">
                <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
                <p className="mt-2 text-muted-foreground">
                  {"We're here to help with your Dynamics 365 needs."}
                </p>

                <div className="mt-8 space-y-6">
                  {info.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-medium text-foreground">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="font-semibold text-foreground">Follow Us</h3>
                  <div className="mt-4 flex gap-4">
                    {socials.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-xl border border-border bg-card/50">
                  <h3 className="font-semibold text-foreground">Prefer a quick chat?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Reach us directly on Microsoft Teams for faster responses.
                  </p>
                  <Button variant="outline" className="mt-4 w-full bg-transparent" asChild>
                    <Link href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Chat on Teams
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
