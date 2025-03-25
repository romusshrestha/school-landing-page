'use client'
import { motion,useInView } from 'framer-motion';
import { BookOpen, Users, GraduationCap, ChevronRight } from 'lucide-react'
import { useRef } from 'react';

// Reusable Program Card Component
const ProgramCard = ({ icon: Icon, title, description, features }) => {
 
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm hover:shadow-lg hover:scale-105 transition duration-200">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
        <Icon className="h-5 w-5 " />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-blue-600" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="w-full inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Learn More
      </button>
    </div>
  )
}

const ProgramsSection = () => {

  const cardRef= useRef(null)
  const cardInView=useInView(cardRef, { once: true, amount: 0.5 });
  const cardVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };
  // Program data
  const programs = [
    {
      icon: BookOpen,
      title: "Elementary Program",
      description: "Grades PG-5 focus on building strong foundations and critical thinking.",
      features: [
        "Phonics-based reading",
        "Hands-on mathematics",
        "Science exploration"
      ]
    },
    {
      icon: Users,
      title: "Middle School Program",
      description: "Grades 6-8 develop independent learning skills and deeper subject knowledge.",
      features: [
        "Advanced literature studies",
        "Pre-algebra and algebra",
        "Laboratory sciences"
      ]
    },
    {
      icon: GraduationCap,
      title: "High School Program",
      description: "Grades 9-10 prepare students for college and careers with rigorous academics.",
      features: [
        "Advanced Placement courses",
        "College counseling",
        "Career exploration"
      ]
    }
  ];

  return (
    <section  ref={cardRef} id="programs" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Programs</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our comprehensive educational programs designed to nurture well-rounded individuals.
            </p>
          </div>
        </div>
        
        <motion.div  
        variants={cardVariants}
        initial="hidden"
        animate={cardInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              features={program.features}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramsSection
