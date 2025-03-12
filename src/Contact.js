import React from 'react'

const Contact = () => {
    return (
        <div className='login' style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"80px"}}>
                <div class="contain">
                    <div class="bgg"></div>
                    <form action="https://formspree.io/f/xvggzvdy" method="post" >
                    <h2 class="heading">Contact-Here</h2>
    
                        <label >Username: </label>
                        <input type="text"   name="Username" required autoComplete="off" />
    
                        <label >Email: </label>
                        <input type="email"  name="Email" required autoComplete="off"/>
    
                        <label >phone: </label>
                        <input type=""   name="Mobile" required autoComplete="off"/>
    
                        <label >Message: </label>
                        <input type=""  name="Message" required autoComplete="off"/>
    
                        <button class="login-btn" type="submit" style={{backgroundColor:"green", borderRadius:"10px"}}>Send-Message</button>
                    </form>
                </div>
            </div>
      );}

export default Contact