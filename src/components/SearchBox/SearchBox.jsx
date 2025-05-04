import React from 'react'
const SearchBox = ({value, onChange}) => {
  
    const hanseleChande = e => {
        onChange(e.target.value)
    }
  
    return (
      <div>
        <p  >Find contacts by name</p>
          <label>
              <input type="text" value={value} onChange={hanseleChande}  />
              </label>
    </div>
  )
}

export default SearchBox