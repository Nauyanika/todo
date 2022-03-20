import React from 'react'
import { Card ,Button} from 'react-bootstrap'

function TodoCard(props) {
  const title=props.data.title
  return (
    <div>

<Card style={{ width: '15rem',margin:'11px'  }}>
  <Card.Body>
    <Card.Title>{props.data.title}</Card.Title>
    <Card.Text>
      {props.data.description}
    </Card.Text>
    <Button variant="success" className='m-2'>Update</Button>
    <Button variant="danger" className='m-2' onClick={(title)=>{
      console.log("buttonclick")
      props.Delete(title)
      
    }}>Delete</Button>

  </Card.Body>
</Card>



    </div>
  )
}

export default TodoCard