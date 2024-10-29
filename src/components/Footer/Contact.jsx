/* eslint-disable react/prop-types */
const Contact = ({src,text}) => {
  return (
    <div className="flex items-center gap-2">
        <img src={src} alt="image" className="w-[12px]"/>
        <p className="font-sans text-base font-normal text-white">{text}</p>
    </div>
  )
}

export default Contact