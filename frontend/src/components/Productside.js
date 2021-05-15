
import React from 'react'
//import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'


function Productside({product}) {
    return (
        <Card className='my-3 p-3 rounded' style={{ width: '18rem' }}>
            <Card.Img src={product.image} variant='top'/>
        <Card.Body>
         <Card.Title as='div'>
             <strong>{product.name}</strong>
         </Card.Title>    
        <Card.Text as='div'>
        {product.description}
        </Card.Text>
        <Card.Text as='div'>
        <Rating value={product.rating} text={`(${product.numReviews})`}/>
        </Card.Text>
        <Card.Text as='h3'>
        ₹{product.price}
        </Card.Text>
        </Card.Body>
      </Card>
       
    )
}

export default Productside
