"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ShimmerButton } from "@/components/magicui/shimmer-button"

export function CTA() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Ready to Grow Smarter?{" "}
          <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">Join AgroLens Today</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:mt-8">
          Join a community of forward-thinking farmers using AI to boost yields, save resources, and build a more sustainable future.
        </p>
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link href="/login">
            <ShimmerButton 
              className="flex items-center gap-2 px-6 py-3 text-base sm:text-lg"
              background="linear-gradient(to right, #10B981, #34D399)"
            >
              <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white">
                Go to Dashboard
              </span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </ShimmerButton>
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mt-20 sm:mt-24 lg:mt-32"
      >
        <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-b from-muted/50 to-muted p-6 ring-1 ring-foreground/10 backdrop-blur-xl sm:p-8 lg:p-12 dark:from-muted/30 dark:to-background/80">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Stay Ahead of the Curve
              </h3>
              <p className="text-lg text-muted-foreground">
                Subscribe to our newsletter for the latest in ag-tech, farming tips, and AgroLens updates.
              </p>
            </div>
            <div className="w-full lg:w-auto max-w-md">
              <form className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Input
                  required
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    "h-12 bg-background/50 dark:bg-muted/30",
                    "border-foreground/10 focus-visible:border-foreground/20",
                    "focus-visible:ring-0 focus-visible:ring-offset-0",
                    "placeholder:text-muted-foreground/70"
                  )}
                />
                <ShimmerButton 
                  className="w-full sm:w-auto px-6 py-3 text-base"
                  background="linear-gradient(to right, #10B981, #34D399)"
                >
                  <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white">
                    Subscribe Now
                  </span>
                </ShimmerButton>
              </form>
              <p className="mt-3 text-sm text-muted-foreground/80">
                By subscribing you agree with our{" "}
                <Link href="/privacy" className="text-primary hover:text-primary/90 transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 