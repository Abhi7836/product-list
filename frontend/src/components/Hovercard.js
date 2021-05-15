import React from 'react'
import { Card } from 'react-bootstrap'



function Productside({product}) {
    return (
        <Card className='rounded hcard' style={{ maxWidth: '28rem' }}>
        <Card.Body>
         <Card.Title >
             <strong>what you will learn</strong>
         </Card.Title>    
        <Card.Text>
        <ul>
            <li>Become an advanced, confident</li>
            <li>Write solid, good Javascript code</li>
            <li>JavaScript from scratch - beginner to advanced</li>
        </ul>
        </Card.Text>
        </Card.Body>
      </Card>
       
    )
}

export default Productside
