import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Empowering Minds, Shaping Futures
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              At Horizon Academy, we provide a nurturing environment where students discover their potential and
              develop the skills to succeed in an ever-changing world.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-medium text-white hover:bg-black/70 cursor-pointer">
                Schedule a Tour
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/student.avif"
              alt="Students in classroom"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
