import React, {useState} from 'react';
import '../Main.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [name , setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const navigate = useNavigate();


    const submitRegister = (e) =>{
        e.preventDefault()
        axios.post('http://52.201.159.177/api/pirates/register', {
            name, 
            lastName, 
            email, 
            password, 
            confirmPassword
        }, {withCredentials:true})
        .then((response)=>{
            console.log(response)
            navigate('/pirates')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const clickLogin = (e) =>{
        e.preventDefault()
        axios.post('http://52.201.159.177/api/pirates/login', {
            email : loginEmail, 
            password : loginPass
        }, {withCredentials:true })
        .then((response)=>{
            navigate('/pirates')
        })
        .catch((error)=>{
            alert('Invalid credentials', error)
        })
        
    }
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col" id="colheader">
                    <nav className="navbar navbar-light navbarDefault">
                        <div className="container-fluid">
                            <h1>Welcome to Pirate Crew</h1>
                        </div>
                    </nav>
                </div>
            </div>
    <div className="formsContainer row">
            <div id='register-form-container' className="col" >
                <div id="whitebox-container">
                    <h3> Register  </h3>
                    <form onSubmit={submitRegister}>
                        <div className="form">
                            <h5>First Name: </h5>
                            <input type="text" className="form" aria-describedby="emailHelp" placeholder="Enter First Name" onChange={ e=>setName(e.target.value)  }/>
                        </div>
                        <div className="form">
                            <h5>Last Name: </h5>
                            <input type="text" className="form" aria-describedby="emailHelp" placeholder="Enter Last Name" onChange={ e=>setLastName(e.target.value)}/>
                        </div>
                        <div className="form">
                            <h5> Email: </h5>
                            <input type="email" className="form" aria-describedby="emailHelp" placeholder="Enter Email" onChange={ e=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form">
                            <h5>Password:</h5>
                            <input type="password" className="form" placeholder="Password" onChange={ e=>setPassword(e.target.value)}/>
                        </div>
                        <div className="form">
                            <h5>Confirm Password:</h5>
                            <input type="password" className="form" placeholder="Confirm Password" onChange={ e=>setConfirmPassword(e.target.value)}/>
                        </div>
                        <div className='register-btn-container'>
                            <button type="submit" className="btn-register">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id='register-form-container' className="col">
                <div id="whitebox-container">
                    <h3> Login  </h3>
                    <form>
                        <div className="form">
                            <h5> Email: </h5>
                            <input type="email" className="form" aria-describedby="emailHelp" placeholder="Enter Email" onChange={ e=> setLoginEmail(e.target.value)} />
                        </div>
                        <div className="form">
                            <h5>Confirm Password:</h5>
                            <input type="password" className="form" placeholder="Confirm Password" onChange={ e=> setLoginPass(e.target.value)}/>
                        </div>
                        <div className='register-btn-container'>
                            <button type="button" className="btn-register" onClick={clickLogin}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
</div>
    )
}

export default Login