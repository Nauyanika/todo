import React, { useState } from 'react'
import { Form ,Container,Button} from 'react-bootstrap'
import MyNavbar from './MyNavbar'
import {useLocation} from  "react-router-dom";
import {useNavigate } from "react-router-dom";
import axios from 'axios';


function UpdateTodo() {
  let history =useNavigate();

  const data=useLocation()
  var email=data.state.e
  console.log(data.state.e)
  const[title,settitle]=useState(data.state.t)
  const[description,setdescription]=useState(data.state.d)
const Update=()=>{
  const obj={userEmail:data.state.e,
    title:title,description:description,id:data.state.id}
     axios.post("http://localhost:5000/UpdateTodo",obj)
     .then((data)=>{
    console.log(data)
    if (data.data.statuscode===200){
    alert("Update successfull")
  history("/Home",{state:email});
      
    }
    else{
      alert(" error" )
    
    }
    
     })
     .catch((err)=>{
    console.log(err)
     })
    
} 
  return (
    <div style={{width:"60%",marginLeft:"20%",marginRight:"20%"}}>
    <MyNavbar/>
<center><h1>Update Todo</h1></center>
<Container> <Form>
<Form.Group className="mb-3">
<Form.Label>Todo Title</Form.Label>
<Form.Control type="text" placeholder="title" value={title} onChange={(e)=>{
        settitle(e.target.value)
    }}
 />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
<Form.Label>Todo Description</Form.Label>
<Form.Control as="textarea" rows={3} value={description} onChange={(e)=>{
        setdescription(e.target.value)
    }}
/>
</Form.Group>
<Button variant="primary" onClick={()=>{
        Update()
    }}>
Update Todo
</Button>
</Form>
</Container>
</div>
  )
}

export default UpdateTodo