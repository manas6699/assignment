import Image1 from "../assets/Rectangle 48.png"
import Image2 from "../assets/Rectangle 49.png"
import Image3 from "../assets/Rectangle 50.png"

const Gallery = () => {
  return (
    <>
    <div className="container md:grid-cols-2 p-16">
      <div className="md:col-span-1">
      <div className="flex items-center px-8 py-4">
  <h1 className="text-4xl">Our Gallery</h1>
  <div className="bg-pink-300 h-1 w-56 ml-4 justify-center mt-4"></div>
</div>
<p className="px-8 leading-8">
    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available Lorem Ipsum
    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.
</p>
</div>
</div>
 <div className="container mx-auto p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2 text-left">Weddings</h2>
            <div className="bg-pink-300 h-1 md:w-56 mb-4 justify-start mt-4"></div>
          <img src={Image2} alt="Wedding" className="w-full h-auto"/>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2 text-left">Social</h2>
            <div className="bg-pink-300 h-1 md:w-56 mb-4 justify-start mt-4"></div>
          <img src={Image1} alt="Social" className="w-full h-auto"/>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2 text-left">Corporate</h2>
            <div className="bg-pink-300 h-1 md:w-56 mb-4 justify-start mt-4"></div>
          <img src={Image3} alt="Corporate" className="w-full h-auto"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Gallery