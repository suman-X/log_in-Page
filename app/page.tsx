"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Lock, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background/20 via-muted/5 to-background/20 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        {/* Hero Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm font-medium"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span>Premium Authentication Experience</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Your App
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12 text-lg text-muted-foreground sm:text-xl"
        >
          Experience seamless authentication with beautiful design and smooth animations.
          <br />
          Built with Next.js, Tailwind CSS, and Framer Motion.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/signup">
            <Button size="lg" className="group w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Sign In
            </Button>
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 grid gap-8 sm:grid-cols-3"
        >
          <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Optimized performance with Next.js and Turbopack
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Secure</h3>
            <p className="text-sm text-muted-foreground">
              Built with security best practices in mind
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Beautiful</h3>
            <p className="text-sm text-muted-foreground">
              Premium design with smooth animations
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
