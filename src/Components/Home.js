import React, { useEffect, useState } from 'react'
import { Container ,Form,Button,Spinner,Card} from 'react-bootstrap'
import MyNavbar from './MyNavbar'
import TodoCard from './TodoCard'
import {useLocation} from  "react-router-dom";
import  axios from "axios"
import {useNavigate } from "react-router-dom";




function Home() {
  let history =useNavigate();

  const[title,settitle]=useState("")
  const[description,setdescription]=useState("")
  const[todolist,settodolist]=useState([])
  const[loading,setloading]=useState(true)
  const[click,setclick]=useState(true)



  const userEmail=useLocation()
  console.log(userEmail)
  const Update=(t,d,id)=>{

  history("/UpdateTodo",{state:{t:t,d:d,e:userEmail.state,id:id}});

  }
   const Delete=(t)=>{
     console.log(t)
    const obj={userEmail:userEmail.state,
      title:t}
       axios.post("http://localhost:5000/DeleteTodo",obj)
       .then((data)=>{
      console.log(data)
      if (data.data.statuscode===200){
      
        alert("todolist deleted ")
        if (click)
        setclick(false)
        else
        setclick(true)
       
      }
      else{
        alert(" error" )
      
      }
      
       })
       .catch((err)=>{
      console.log(err)
       })
   }
  const AddTodo =()=>{
    const obj={userEmail:userEmail.state,
title:title,description:description}
 axios.post("http://localhost:5000/AddTodo",obj)
 .then((data)=>{
console.log(data)
if (data.data.statuscode===200){

  alert("todolist created ")
  if (click)
  setclick(false)
  else
  setclick(true)
 
}
else{
  alert(" error" )

}

 })
 .catch((err)=>{
console.log(err)
 })
}
useEffect(()=>{
setloading(true)

  const o={userEmail:userEmail.state}
  axios.post("http://localhost:5000/GetTodoList",o)
  .then((data)=>{
 console.log(data)
 if (data.data.statuscode===200){
 settodolist(data.data.todolist)
 
 
 
 setTimeout(() => {
  setloading(false)
 }, 1000);



 }
 else{
 
 }
 
  })
  .catch((err)=>{
 console.log(err)
  })
 
},[click])


  return (
    <div style={{width:"60%",marginLeft:"20%",marginRight:"20%"}}>
            <MyNavbar/>
           

<center><h1>Add Todo</h1></center>
   <Container> <Form>
  <Form.Group className="mb-3">
    <Form.Label>Todo Title</Form.Label>
    <Form.Control type="text" placeholder="title" onChange={(e)=>{
        settitle(e.target.value)
    }}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Todo Description</Form.Label>
    <Form.Control as="textarea" rows={3} 
    onChange={(e)=>{
      setdescription(e.target.value)
  }}
    />
  </Form.Group>
  <Button variant="primary" onClick={()=>{
    AddTodo()
  }}>
    Add Todo
  </Button>
</Form>
</Container>
<br/><hr/>
<center><h1>Todo List</h1></center>


{loading && (<center><Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner></center>)}
{!loading&&(

<div className='d-flex flex-wrap'>
{todolist.map((i)=>{
return(

  <Card style={{ width: '15rem',margin:'11px'  }}>
  <Card.Body>
    <Card.Title>{i.title}</Card.Title>
    <Card.Text>
      {i.description}
    </Card.Text>
    <Button variant="success" className='m-2'  onClick={()=>{
      console.log("buttonclick")
      Update(i.title,i.description,i.id)
      
    }}>Update</Button>
    <Button variant="danger" className='m-2' onClick={()=>{
      console.log("buttonclick")
      Delete(i.title)
      
    }}>Delete</Button>

  </Card.Body>
</Card>

)
})}

</div>
)}

    </div>
  )
}

export default Home
