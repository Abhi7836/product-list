import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup} from 'react-bootstrap'
import Rating from'../components/Rating'
import Hovercard from '../components/Hovercard'

function Product({product}) {
    const [isMousedOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setMouseOver(true);
      }
      function handleMouseOut() {
        setMouseOver(false);
      }
    return (
        <>
        {isMousedOver &&  <Hovercard />}
       <ListGroup style={{ borderStyle : isMousedOver ? "solid": "none" }} >
        <ListGroup.Item className='my-1' >
        <Row className='py-4 '
            onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut} >
            <Col className='py-2' md={2} lg={2}sm={3}>
            <Link to={`/product/${product._id}`}>
            <Image className="image"src={product.image} fluid/>
            </Link>
            </Col>
            <Col className='py-2' md={7} lg={8} sm={7} >
                  <Link to={`/product/${product._id}`}>
                    <h4 className='title'>{product.name}</h4>
                    <p className='cardtext'>{product.description}</p>
                    <div className='text-secondary'>{product.creater}</div>
                    <Rating value={product.rating} text={` (${product.numReviews})`}/>
                    <div className='text-secondary'>{product.duration}</div>
                    </Link>
            </Col>
            
            <Col className='py-2 title'  md={3} lg={2} sm={2} >
            <strong>₹{product.price}</strong>
             </Col>
            
        </Row>
        </ListGroup.Item>
        </ListGroup>
       
       </>
    )
}

export default Product
