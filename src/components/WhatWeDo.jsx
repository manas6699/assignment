import Image22 from '../assets/image 22.png'

const WhatWeDo = () => {
  return (
    <div className="p-12">
         <section className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img src={Image22} alt="Your Image" className="w-full h-auto" />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 md:ml-8 items-center">
        <h2 className="text-3xl font-bold mb-4 mt-14">What We Do</h2>
        <p className="text-lg text-gray-700">
          Kismet is not your typical floral design company. We were founded in 2008 due to a gap in the design industry lacking to provide a modern twist on cultural traditions. We focus on interweaving our appreciation for cultural traditions
           with a modern and clean aesthetic. Our team of talented individuals
            includes floral and event designers, event coordinators, graphic designers, and a production
             team that all respect the creative process and work tirelessly to ensure delivery of impressionable
              events for unforgettable memories.


              With over 11 years of experience in Southern California, we work with the best service providers in the event industry, pairing them with our in-house floral designs. For weddings, we want your event to be a reflection of your love for one another. No matter the occasion, we excel at personalizing your event so that it reflects your personality and/or brand identity.
        </p>
      </div>
    </section>
     </div>
  )
}

export default WhatWeDo