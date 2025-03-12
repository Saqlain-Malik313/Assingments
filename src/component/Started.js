import axios from "axios";


function Started() {
  const handler = (event) => {
    event.preventDefault();
    const formdata=new FormData(event.target);
    const obj =Object.fromEntries(formdata.entries())
    axios.post('https://jsonplaceholder.typicode.com/todos',obj)
    .then((res)=>{
        alert("form submit ")
    }).catch((err)=>{
        console.log(err)
    })
    document.getElementById('username').value=('')
    document.getElementById('email').value= ('')
    document.getElementById('phone').value= ('')
    document.getElementById('password').value= ('')
}

  return (
    <div className='login' style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"80px"}}>
            <div class="contain">
                <div class="bggg"></div>
                <form  onSubmit={handler}>
                    <h2 class="heading">Register-Here</h2>

                    <label >Username: </label>
                    <input type="text" id="username" name="username"  />

                    <label >Email: </label>
                    <input type="email" id="email" name="email"  />

                    <label >phone: </label>
                    <input type="text" id="phone" name="phone"  />

                    <label >Password: </label>
                    <input type="password" id="password" name="password"  />

                    <button class="login-btn" type="submit">Create account</button>
                </form>
            </div>
        </div>
  );
}

export default Started;