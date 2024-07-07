import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loader from '../components/Loader'

const EidCollection = () => {
  const [products,setProducts]=useState([])
  const [loader,setLoader]=useState(false);
  const fetchData=async ()=>{
    setLoader(true)
    const response =await axios.get("https://fakestoreapi.com/products")
    setProducts(response.data)
    setLoader(false)
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(loader)
  console.log(products);
  return (
    <>
    {
      loader ? <Loader/>:(<div className='d-flex flex-wrap justify-content-evenly gap-4'>
        {
          products.map((product)=>{
            return(
              <div class="card" style={{width: "35rem"}}>
      <img src={product.image} class="card-img-top" style={{height:"100px", width:"100px"}} alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p>{product.rating.rate}</p>
        <button className="btn btn-danger">{product.price}</button>
        <p>Item Sold:{product.rating.count}</p>
      </div>
    </div>
            )
          })
        }
        </div>)
    }
    </>

    
  )
}

export default EidCollection
