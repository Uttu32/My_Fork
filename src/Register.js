import React,{useState} from 'react'
import Navbar from './Navbar'

export default function Register(){

  const[isLogin,setIsLogin]=useState(true)

  return(
    <div>
      <Navbar/>
      <div className="Register">
        
        {isLogin ?
        <div className="Login">
          <form>
            <input type="text" placeholder="UserName"/>
            <br />
            <br />
            <input type="password" placeholder="PassWord" required/>
          </form>
          <div className="register-flex">
            <div>
              <span>Don't have an account?</span>
              <br />
              <span className="Switch" onClick={()=> setIsLogin(!isLogin)}>Register</span>
            </div>
            <button>Login</button>
          </div>
        </div> : 
        <div>
          <div className="Login">
            <form>
              <input type="email" placeholder="Email" />
              <br/>
              <br/>
              <input type="text" placeholder="UserName"/>
              <br />
              <br />
              <input type="password" placeholder="PassWord" required/>
            </form>
            <div className="register-flex">
            <div>
              <span>Already have account?</span>
              <br />
              <span className="Switch" onClick={()=> setIsLogin(!isLogin)}>Login</span>
            </div>
            <button>Register</button>
          </div>
          </div>
        </div>}
      </div>
    </div>
  )
}