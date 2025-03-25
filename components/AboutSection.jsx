import { Award, BookOpen, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Our School</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Founded in 1995, Horizon Academy has been dedicated to providing exceptional education for over 25
            years. Our mission is to inspire a lifelong love of learning and foster academic excellence.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <Image
          src="/school.jpg"
          width={600}
          height={400}
          alt="School campus"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
        <div className="flex flex-col justify-center space-y-4">
          <ul className="grid gap-6">
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Academic Excellence</h3>
                <p className="text-muted-foreground">
                  Our rigorous curriculum challenges students to reach their full potential.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Supportive Community</h3>
                <p className="text-muted-foreground">
                  Small class sizes ensure personalized attention and a strong sense of belonging.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Innovative Learning</h3>
                <p className="text-muted-foreground">
                  We integrate technology and hands-on experiences to make learning engaging.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
