import LKS from "../assets/images/lks.png"
import LKSN from "../assets/images/lksn.png"

const Achievments = () => {
    return (
        <div className="dark:text-white">
            <h1 className="font-bold text-xl">Achievments</h1>
            <div className="flex flex-col gap-2 py-2">
                <div className="w-full flex justify-between shadow-lg rounded-lg py-2 px-4 border">
                    <div className="flex items-center gap-2">
                        <img src={LKS} alt="logo" className="w-10" />
                        <div>
                            <span className="block md:hidden">March 2024</span>
                            <h1 className="font-bold text-lg">LKS SMK Provinsi DIY Web Tech (1st place)</h1>
                            <p>Yogyakarta, Indonesia</p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        March 2024
                    </div>
                </div>
                <div className="w-full flex justify-between shadow-lg rounded-lg py-2 px-4 border">
                    <div className="flex items-center gap-2">
                        <img src={LKSN} alt="logo" className="w-10" />
                        <div className="">
                            <span className="block md:hidden">August 19 - 24</span>
                            <h1 className="font-bold text-lg">LKSN SMK 2024 Web Tech (MOE)</h1>
                            <p>Lampung, Indonesia</p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        August 19 - 24
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Achievments