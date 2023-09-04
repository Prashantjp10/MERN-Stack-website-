import React, { useState } from "react"
import "../App.css"
import axios from  "axios";
// import { useNavigate } from "react-router-dom"

const Register = () => {

    // const navigate = useNavigate()

    const [ user, setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        repassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser((prev)=>{
            return{
                  ...prev,
            
                  [name]: value
            }
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("User", user)
        const {firstName,lastName,email,password,repassword} = user
        if(firstName && lastName && email && password){
            if(password === repassword){
                await axios.post("http://localhost:8090/register",user)
                .then((res) => {
                    alert(res.data.message)
            })
        } else {
            alert("invlid input")
        }
    }
}

    return (
        <>
        <section className="register-section">
        <div className="register">
            
            <h1>Register</h1>
            <input type="text" name="firstName" value={user.firstName} placeholder="Your FirstName" onChange={ handleChange }></input>
            <input type="text" name="lastName" value={user.lastName} placeholder="Your LastName" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="repassword" value={user.repassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={handleSubmit} >Register</div>
        </div>
        </section>
        </>
    )
}

export default Register;