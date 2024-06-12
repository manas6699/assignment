import Navbar from "../components/Navbar"
import Image24 from "../assets/image 24.png"
import Image19 from "../assets/image 19.png"
import Image20 from "../assets/image 20.png"
import Image21 from "../assets/image 21.png"


import WhatWeDo from "../components/WhatWeDo"


const Service = () => {
  return (
    <div>
        <Navbar/>
        <img src={Image24} alt="service" className="w-full h-auto"/>
        <p className="px-8 py-2 relative md:bottom-40 text-center">
            EVENT was created in 2008 out of the necessity of understanding & combining the appreciation for
cultural traditions while fusing modern and clean design. Our tribe of talented team members includes: floral and
event designers, coordination and admin staff, graphic designers and a production team that all respect the creative
process and work tirelessly to ensure delivery of impressionable events and unforgettable memories.
        </p>

         <div className="container mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="bg-pink-300 h-1 w-56 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Wedding Service */}
        <div className="text-center">
          <img src={Image19} alt="Weddings" className="mx-auto rounded-lg" />
          <h2 className="text-xl font-semibold mt-4 mb-2">Weddings</h2>
          <p className="text-gray-600">
            Destiny brought you two together. Your love is as unique as the fate that brought you here. Our job is to read your love and transcribe it into a physical dream. Our designs transcend Pinterest,and we are able to come up with everything you need for a picture-perfect event. After sitting down with one of our designers,we’ll comprise a mood board or sketch out a unique design. We handle everything from A to Z, curating the linens, chairs, dancefloor,lighting, florals, a gorgeous stage and topping it off with printed goods and materials.
          </p>
        </div>

        {/* Social Events Service */}
        <div className="text-center">
          <img src={Image20} alt="Social Events" className="mx-auto rounded-lg" />
          <h2 className="text-xl font-semibold mt-4 mb-2">Social Events</h2>
          <p className="text-gray-600">
            Destiny brought you two together. Your love is as unique as the fate that brought you here. Our job is to read your love and transcribe it into a physical dream. Our designs transcend Pinterest,and we are able to come up with everything you need for a picture-perfect event. After sitting down with one of our designers
          </p>
        </div>

        {/* Corporate Service */}
        <div className="text-center">
          <img src={Image21} alt="Corporate" className="mx-auto rounded-lg" />
          <h2 className="text-xl font-semibold mt-4 mb-2">Corporate</h2>
          <p className="text-gray-600">
            Destiny brought you two together. Your love is as unique as the fate that brought you here. Our job is to read your love and transcribe it into a physical dream. Our designs transcend Pinterest,and we are able to come up with everything you need for a picture-perfect event. After sitting down with one of our designers
          </p>
        </div>
      </div>
     
<WhatWeDo/>
    <div>
        <h1 className="text-3xl font-bold mb-4 mt-4 text-center">
            The Process
        </h1>
        <div className="bg-pink-300 h-1 w-56 mx-auto mb-4"></div>
        <p className="p-8 text-center leading-10 w-2/3 mx-auto">
            Kismet brings visions to reality with custom made backdrops, seamless draping and bountiful florals. When we meet, here’s what you can expect during the process of planning your event:
        </p>
        <p className="text-center w-1/2 mx-auto leading-9">
             <span className="font-bold">
              1.  Consultation Form
                </span>
                {/* 
                space html */}
                &nbsp;
Complementary Design Meeting- Let’s meet and make magic happen.


&nbsp;
<br />
<span className="font-bold">
    
    2. Connecting </span>
Design Analysis –We are a think tank of creative energy, peculating your event from an idea
into an actual event. It takes work!
Custom Proposal -Made with an itemized list of all the moving parts we are providing. We
also use outside sources and will talk to them directly so less stress for you.
(Please expect an estimated time of 1-2 weeks after meeting depending on scale of event)
Contract Signing - Let’s lock you in and get your event booked!
Design Board -We develop floor plans, design boards and free hand on the spot sketches to
help you visualize and bring your ideas and inspiration to life.
Creative Partnership -Ensuring open communication, we are your partners in executing an
event and will work with you on whatever ideas you may have.
Details Meeting – One month prior to your event, a full table mock up is made; including
linens chairs and florals. This is the meeting that you decide if you want to add in that color
you were hesitant on or take it away. We go over layouts to ensure that everything is exactly
how you expect it to be
Event Day Execution- You’ve done your work, now let us do the rest. We will set up and take down everything after!
        </p>
    </div>
    </div>
    </div>
  )
}

export default Service