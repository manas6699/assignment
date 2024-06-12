import Image1 from "../assets/image 18.png";
import Image2 from "../assets/image 16.png";
import Image3 from "../assets/image 17.png";

const Testimonials = () => {
  return (
    <div className="container mx-auto px-16 py-8">
      <div className="flex items-center justify-start px-8 py-4">
        <h1 className="text-xl md:text-4xl">Testimonials</h1>
        <div className="hidden md:block bg-pink-300 h-1 w-56 ml-4 mt-4"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-4">
        <div className="text-center">
          <img src={Image2} alt="Wedding" className="w-full h-auto"/>
        </div>
        <div className="text-center">
          <img src={Image1} alt="Social" className="w-full h-auto"/>
        </div>
        <div className="text-center">
          <img src={Image3} alt="Corporate" className="w-full h-auto"/>
        </div>
      </div>
      
      <p className="text-center px-4 mt-8 text-lg">
        “I have no words other than ‘thank you’ for making such a beautiful wish come to life and beyond my wildest dreams.”
      </p>
      
      <p className="text-right pr-4 mt-2 text-md">
        - Jennifer
      </p>
    </div>
  );
}

export default Testimonials;
