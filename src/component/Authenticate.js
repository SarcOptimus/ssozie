import React , { useState, useEffect } from 'react'
import bg from '../img/bg.png'
import axios from 'axios';
import Content from './Content';

export default function Authenticate() {
    var base_url= "ec2-13-233-245-44.ap-south-1.compute.amazonaws.com";
    const [id, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()

    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min;
      }


    const authorizeUser = async e => {
        e.preventDefault();
        let user = { id, password };
        const auth = await axios.get(`http://${base_url}:7020/authDb/${user.id}`);
        console.log(`Initiating Auth for ${id}`)
        if(auth.data.pwd == user.password){
        const response = await axios.post(
            `http://${base_url}:3115/session_db`,
            user);
        if(response.status == "200" || response.status == 200){
            setUser(user);
            user.password = getRndInteger(1111111111,9999999999)
            localStorage.setItem('user', JSON.stringify(user))
        }
        else{
            alert("User is Already login");
        }
        //console.log(response.data)
        }
        else{
            alert("Authentication Failed");
        }
      }

      useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);

      const handleLogout = async e =>{
            console.log(id , user.id);
            const clearSession = await axios.delete(`http://${base_url}:3115/session_db/${user.id}`);
            console.log(clearSession);
            if(clearSession.status=="200" || clearSession.status== 200)
                {
                    localStorage.clear();
                    setUser({});
                    setUsername("")
                    setPassword("")
                    window.location.reload();
                }
            
      }

let carStyle = {
    backgroundImage: `url(${bg})`,
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow : "hidden"
    };
let inputStyle = {
    width : "95%",
    marginLeft : "10px"
}
return (
    <div style={carStyle}>
     {user ? <Content logout={handleLogout}/> :
     <div>
     <h1 className='text-light py-5 display-1'> S~S~O~Z~I~E</h1>
        <div className='row py-3 fw-lighter'>
            <div className='col-sm-1'>

            </div>
            <div className='col-sm-4 d-grid gap-2 '>
                <p className="fst-italic text-light fs-4">
                   Please login to access the Application.
                </p>
            </div>
        </div>
        <div className='row py-3 fw-lighter'>
            <div className='col-sm-1'>

            </div>
            <div className='col-sm-4'>
                <div className="form-floating mb-3 " style={inputStyle}>
                    <input type="email" value={id} className="form-control" id="floatingInput" placeholder="name@example.com" onChange={({ target }) => setUsername(target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3" style={inputStyle}>
                    <input type="password" value={password} className="form-control" id="floatingPassword" placeholder="Password" onChange={({ target }) => setPassword(target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
            </div>
        </div>
        <div className='row py-3 fw-lighter'>
            <div className='col-sm-1'>

            </div>
            <div className='col-sm-4'>
                <div className="d-grid gap-2" style={inputStyle}>
                    <button type="button"  className="btn btn-secondary btn-lg" onClick={authorizeUser}>Sign In</button>
                </div>
            </div>
        </div>
        </div>}
    </div>
)
}
