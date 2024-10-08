import BtnType from "../interface/BtnType"


const BtnStyle = ({children, className = ""}: BtnType) => {
  return (
    <div className={`bg-black dark:bg-white dark:text-black text-white px-3 py-1 rounded-lg hover:bg-slate-900 ${className}`}>
        {children}
    </div>
  )
}

export default BtnStyle