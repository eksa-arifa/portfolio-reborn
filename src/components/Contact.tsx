import BtnStyle from "./BtnStyle"


const Contact = () => {
  return (
    <div className="dark:text-white">
        <h1 className="font-bold text-xl">Contact - <span className="text-slate-600 font-thin dark:text-gray-300">Get In Touch</span></h1>
        <div className="text-center py-2">
            <BtnStyle><span className="font-bold">eksaarifa@gmail.com</span>. Contact me here, I will answer as soon as I can.</BtnStyle>
        </div>
    </div>
  )
}

export default Contact