import React,{useState,useEffect}from 'react'
import Product from '../components/Product'
import Paginate from '../components/Paginate'
import axios from 'axios'

function HomeScreen({match}) {

    const [products,setProducts]= useState([])
    //const [loading, setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]=useState(3);
    
    useEffect(()=>{
     const fetchProducts = async()=>{
        // setLoading(true)
         const {data} = await axios.get('/api/products')
         setProducts(data)
        // setLoading(false)
         console.log(data.id);
     }
     fetchProducts()
    },[])
  const indexOfLastPost=currentPage*postsPerPage;
  const indexofFirstPost=indexOfLastPost-postsPerPage;
  const currentPosts=products.slice(indexofFirstPost,indexOfLastPost);
  const paginate = pageNumber =>setCurrentPage(pageNumber);
    return (
        <>{/*loading&&<h1>Loading...</h1>*/}
        <Paginate postsPerPage={postsPerPage} 
        totalPages={products.length} 
            paginate={paginate}
        />
        
             { currentPosts.map(product => (
                <Product product={product}/> ))
            }
            
           
        </>
    )
}

export default HomeScreen
