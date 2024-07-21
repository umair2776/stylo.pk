import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const EidCollection = () => {
  const [products,setProducts]=useState([])
  const [loader,setLoader]=useState(false);
  const fetchData=async ()=>{
    setLoader(true)
    const response =await axios.get("http://localhost:8082/api/admin/product?category=eidcollection")
    setProducts(response.data.products)
    console.log(response)
    setLoader(false)
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
    {
      loader ? <Loader/>:(<div className='d-flex flex-wrap justify-content-evenly gap-4'>
        {
          products.map((product)=>{
            return(
              <Link to={`/product/${product._id}`}>
              <div class="card" style={{width: "35rem"}}>
      <img src={product.thumbnail} class="card-img-top" style={{height:"100px", width:"100px"}} alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <button className="btn btn-danger">{product.price}</button>
      </div>
    </div>
    </Link>
            )
          })
        }
        </div>)
    }
    </>

    
  )
}

export default EidCollection
