'use client'

import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Reusable Event Card Component
const EventCard = ({ image, date, time, title, description, buttonText }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm hover:scale-105 transition duration-200 hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={image}
          width={500}
          height={300}
          alt={title}
          className="object-cover w-full h-full transition-all group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4 text-gray-600">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{date}</span>
          <Clock className="h-4 w-4 ml-2" />
          <span className="text-sm">{time}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <button className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/70 cursor-pointer">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

const EventsSection = () => {
  const eventRef=useRef(null);
  const eventInView = useInView(eventRef, { once: true, amount: 0.5 });
  const eventVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };
  // Events data
  const events = [
    {
      image: "/graduation.jpg",
      date: "April 15, 2025",
      time: "6:00 PM",
      title: "Spring Open House",
      description: "Tour our school and learn about our programs for the upcoming school year.",
      buttonText: "Register"
    },
    {
      image: "/graduation.jpg",
      date: "May 10, 2025",
      time: "9:00 AM",
      title: "Annual Science Fair",
      description: "Students showcase their innovative science projects and compete for awards.",
      buttonText: "Learn More"
    },
    {
      image: "/graduation.jpg",
      date: "June 5, 2025",
      time: "4:00 PM",
      title: "Graduation Ceremony",
      description: "Celebrate our seniors as they receive their diplomas and embark on their next journey.",
      buttonText: "View Details"
    }
  ];

  return (
    <section  ref={eventRef} id="events" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay connected with our school community through these exciting events.
            </p>
          </div>
        </div>
        
        <motion.div 
        variants={eventVariants}
        initial="hidden"
        animate={eventInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {events.map((event, index) => (
            <EventCard 
              key={index}
              image={event.image}
              date={event.date}
              time={event.time}
              title={event.title}
              description={event.description}
              buttonText={event.buttonText}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default EventsSection
