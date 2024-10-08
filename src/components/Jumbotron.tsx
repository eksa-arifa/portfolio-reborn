import Profile from "../assets/images/profile.jpeg"
import BtnStyle from "./BtnStyle"


const Jumbotron = () => {
  return (
    <div className="w-full flex gap-4 flex-wrap dark:text-white">
      <img className="w-[130px] rounded-full" src={Profile} alt="profile" />
      <div className="">
        <h1 className="font-bold text-3xl">Hi, my name is Muhammad Eksa Arifa</h1>
        <p>
          I am a student who really likes technological developments
        </p>
        <a href="" className="mt-3 block">
          <BtnStyle className={'w-fit'}>Download CV</BtnStyle>
        </a>
      </div>
    </div>
  )
}

export default Jumbotron