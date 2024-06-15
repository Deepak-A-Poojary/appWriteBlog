import React, { useID} from 'react'

const Select = ({
  options=[],
  label,
  className = "",
  ...props
  
}, ref) => {
  
  const id = useID()
  
  return (
    <div className='w-full'>
      {label && <lable htmlFor={id} className=''></lable>}
      <select
      {...props}
      id={id}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option)=>{
          <option key={option} value={option}>
            {option}
          </option>
        })}
      </select>
    </div>
  )
};

export default React.forwardRef(Select)