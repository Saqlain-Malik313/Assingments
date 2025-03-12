import axios from "axios";


function Signn() {
  const handler = (event) => {
    event.preventDefault();
    const formdata=new FormData(event.target);
    const obj =Object.fromEntries(formdata.entries())
    axios.post('https://jsonplaceholder.typicode.com/todos',obj)
    .then((res)=>{
        alert("Account Login ")
    }).catch((err)=>{
        console.log(err)
    })
    document.getElementById('username').value=('')
    document.getElementById('password').value= ('')
}

  return (
    <div className='login' style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"80px"}}>
            <div class="contain">
                <div class="bg"></div>
                <form  onSubmit={handler}>
                    <h2 class="heading">Login-Here</h2>

                    <label >Username: </label>
                    <input type="text" id="username" name="username"  />


                    <label >Password: </label>
                    <input type="password" id="password" name="password"  />

                    <button class="login-btn" type="submit" style={{backgroundColor:"Red", borderRadius:"10px"}}>Login-account</button>
                </form>
            </div>
        </div>
  );
}

export default Signn;
