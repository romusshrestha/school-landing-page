import { MapPin, Phone, Mail } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
              <p className="text-gray-600">
                Have questions? We're here to help. Reach out to us using the information below.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-600" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-600">123 Education Lane, Learning City, LC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 mt-0.5 text-blue-600" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-0.5 text-blue-600" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">admissions@xyz.edu</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Academic Year Hours</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Monday - Friday: 7:30 AM - 4:30 PM</li>
                  <li>Saturday: 9:00 AM - 12:00 PM (Admissions Office)</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
