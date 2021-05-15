import React,{useState,useEffect}from 'react'
import { ListGroup} from 'react-bootstrap'
import Productside from '../components/Productside'
import axios from 'axios'


function ProductScreen({match}) {
  const[product,setProduct]= useState({})
   useEffect(()=>{
     const fetchProduct = async()=>{
         const {data} = await axios.get(`/api/products/${match.params.id}`)
         setProduct(data)
     }
     fetchProduct()
    },[match])
 
    return (
        <>
         <h1>{product.name}</h1>
         <ListGroup> 
            <ListGroup.Item>
                <Productside product={product}/>
           </ListGroup.Item>
           </ListGroup>
        </>
    )
}


export default ProductScreen
