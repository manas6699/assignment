import TouchImage from '../assets/touch.png'
const Touch = () => {
  return (
    <div>
         <div className="flex items-center justify-start px-16 py-4">
        <h1 className="text-xl md:text-4xl px-8">Get In Touch</h1>
        <div className="hidden md:block bg-pink-300 h-1 w-56 ml-4 mt-2"></div>
      </div>
      <div className='justify-center flex mt-8 p-4 md:p-0'>
        <img src={TouchImage} alt="touch" />
      </div>
    </div>
  )
}

export default Touch