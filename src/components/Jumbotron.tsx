import Profile from "../assets/images/profile.jpeg"


const Jumbotron = () => {
  return (
    <div className="w-full flex gap-4 flex-wrap dark:text-white">
      <img className="w-[130px] rounded-full" src={Profile} alt="profile" />
      <div className="">
        <h1 className="font-bold text-3xl">Hi, my name is Muhammad Eksa Arifa</h1>
        <p>
          I am a student who really likes technological developments
        </p>
      </div>
    </div>
  )
}

export default Jumbotron