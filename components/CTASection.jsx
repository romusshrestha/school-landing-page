const CTASection = () => {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 text-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Join Our Community?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step towards providing your child with an exceptional education experience.
              </p>
            </div>
            
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="inline-flex items-center justify-center rounded-md bg-black  px-6 py-3 text-base font-medium text-white hover:bg-black/70 cursor-pointer ">
                Apply Now
              </button>
              
              <button className="inline-flex items-center justify-center rounded-md border border-gray-700 px-6 py-3 text-base font-medium text-black bg-white hover:bg-white/50 cursor-pointer ">
                Schedule a Tour
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default CTASection
  