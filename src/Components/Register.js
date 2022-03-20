import React, { useState } from 'react'
import {Form,Button, Container } from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import  axios from "axios"
import {useNavigate } from "react-router-dom";



function Register() {
  let history =useNavigate();

    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")

    const OnRegister=()=>{
      const obj={userName:name,userEmail:email,
  userPassword:password}
   axios.post("http://localhost:5000/RegisterHandle",obj)
   .then((data)=>{
  console.log(data.data.statuscode)
  if (data.data.statuscode===200){
    alert("User Registration Successfull Go to Login Page")
  history("/Login");

  }
  else{
    alert("User Registration Failed fill again")

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
       <center> <h1>Registration</h1></center>
          <Form>

          <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" onChange={(e)=>{
        setname(e.target.value)
    }} /> 
     </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"
    onChange={(e)=>{
        setemail(e.target.value)
    }} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>{
        setpassword(e.target.value)
    }}  />
  </Form.Group>
  
  
  <Button variant="primary" onClick={()=>{
  OnRegister()
  }}>
    Register
  </Button>
</Form>

</Container>
</div>
  )}

export default Register