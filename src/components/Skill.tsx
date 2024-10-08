import BtnStyle from "./BtnStyle"

const Skill = () => {
  return (
    <div className="dark:text-white">
        <h1 className="font-bold text-xl">Skills & Tools - <span className="text-slate-600 font-thin dark:text-gray-300">This Is The Source Of My Strength</span></h1>
        <div className="flex flex-wrap gap-2 py-2">
            <BtnStyle>HTML</BtnStyle>
            <BtnStyle>FontAwesome</BtnStyle>
            <BtnStyle>CSS</BtnStyle>
            <BtnStyle>TailwindCSS</BtnStyle>
            <BtnStyle>ShadcnUI</BtnStyle>
            <BtnStyle>JS</BtnStyle>
            <BtnStyle>NodeJS</BtnStyle>
            <BtnStyle>ExpressJS</BtnStyle>
            <BtnStyle>ReactJS</BtnStyle>
            <BtnStyle>NextJS</BtnStyle>
            <BtnStyle>VueJS</BtnStyle>
            <BtnStyle>NuxtJS</BtnStyle>
            <BtnStyle>PHP</BtnStyle>
            <BtnStyle>Laravel</BtnStyle>
            <BtnStyle>Mysql</BtnStyle>
            <BtnStyle>Postgres</BtnStyle>
            <BtnStyle>Supabase</BtnStyle>
            <BtnStyle>Docker</BtnStyle>
            <BtnStyle>Linux</BtnStyle>
        </div>
    </div>
  )
}

export default Skill