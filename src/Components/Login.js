import React, { useState } from 'react'
import {Form,Button, Container } from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import  axios from "axios"
import {useNavigate } from "react-router-dom";


function Login() {
  let history =useNavigate();

const[email,setemail]=useState("")
const[password,setpassword]=useState("")
const OnLogin =()=>{
    const obj={userEmail:email,
userPassword:password}
 axios.post("http://localhost:5000/LoginHandle",obj)
 .then((data)=>{
console.log(data)
if (data.data.statuscode===200){
  alert("User Login Successfull ")
  history("/Home",{state:email});

}
else{
  alert("User Login Failed ")

}

 })
 .catch((err)=>{
console.log(err)
 })
}


  return (
    <div style={{width:"60%",marginLeft:"20%",marginRight:"20%"}}>
            <MyNavbar/>
            
        <Container >
       <center> <h1>Login</h1></center>
          <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{
        setemail(e.target.value)
    }} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>{
        setpassword(e.target.value)
    }} />
  </Form.Group>
  
  
  <Button variant="primary" onClick={()=>{
      OnLogin()
  }}>
    Submit
  </Button>
</Form>

</Container>
</div>
  )}

export default Login