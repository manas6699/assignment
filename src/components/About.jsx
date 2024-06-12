
import Image15 from '../assets/image 15.png';
import Image12 from '../assets/image12.png';

const About = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 p-8 md:p-12 bg-[#ecd9e3]">
      <div className="md:col-span-1 mt-8 md:mt-14">
        <div className="flex items-center px-4 md:px-8 py-4">
          <h1 className="text-3xl md:text-4xl">About Company</h1>
          <div className="bg-pink-300 h-1 w-32 md:w-56 ml-4 mt-4"></div>
        </div>

        <p className="px-4 md:px-8 leading-7 md:leading-8 text-base md:text-lg">
          We are a premier luxury event and floral design studio providing a myriad of design services. Partnering with you in engineering special event atmospheres with our highly skilled designers, we assist with everything from the largest gatherings to the smallest details.
        </p>
        <div className="px-4 md:px-8 py-4">
          <button className="px-8 md:px-10 py-2 bg-gray-300 hover:bg-gray-400 transition duration-300 ease-in-out">
            Read More
          </button>
        </div>
      </div>
      <div className="mt-8 md:mt-14 relative">
        <div className="relative">
          <img src={Image15} alt="About us" className="md:w-1/2 h-auto" />
          <img 
            src={Image12}
            alt="About us" 
            className="mt-4 md:mt-0 md:absolute 
           md:top-10 md:left-96 transform md:-translate-x-1/2
             md:w-1/2 w-full h-auto max-w-xs md:max-w-md lg:max-w-lg" 
          />
        </div>
      </div>
    </div>
  );
}

export default About;
