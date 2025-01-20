import React from 'react'
import logo from "./logo/zysk-logo.png"


const Last = () => {
  return (
    <div className='container'>
        <div>
        <img src={logo} alt={logo} id='imge'/>
        </div>
        <div style={{ display:"flex",justifyContent:"right"}}>
            <h6>© 2077 zysktechnologies. All right Reserved</h6>
        </div>
    </div>
  )
}

export default Last