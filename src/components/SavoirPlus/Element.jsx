
// eslint-disable-next-line react/prop-types
const Element = ({src,text}) => {
  return (
    <div className="flex items-center gap-3">
      <img src={src} alt="image"/>
      <p className="font-sans text-[#1D253D] font-medium text-xl">{text}</p>
    </div>
  )
}

export default Element