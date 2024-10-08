import LogoSMK from "../assets/images/smkn1bantul.png"

const Educations = () => {
  return (
    <div className="dark:text-white">
        <h1 className="font-bold text-xl">Educations - <span className="text-slate-600 font-thin dark:text-gray-300">Be Smart</span></h1>
        <div className="flex flex-col py-2">
            <div className="w-full flex justify-between shadow-lg rounded-lg py-2 px-4 border">
                <div className="flex items-center gap-2">
                    <img src={LogoSMK} alt="logo" className="w-10" />
                    <div className="">
                        <h1 className="font-bold text-lg">SMKN 1 Bantul</h1>
                        <p>Software Engineering</p>
                    </div>
                </div>
                <div className="">
                    2022 - 2025
                </div>
            </div>
        </div>
    </div>
  )
}

export default Educations