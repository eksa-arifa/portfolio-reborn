import ChildrenType from "../interface/ChildrenType"


const BtnStyle = ({children}: ChildrenType) => {
  return (
    <div className="bg-black dark:bg-white dark:text-black text-white px-3 py-1 rounded-lg hover:bg-slate-900">
        {children}
    </div>
  )
}

export default BtnStyle