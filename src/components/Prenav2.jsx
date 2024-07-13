import React from 'react'
import { GrYoutube } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { Link } from 'react-router-dom';

const Prenav2 = () => {
  return (
    <div>
      <div className="logo"><img src='https://stylo.pk/cdn/shop/files/110x60-Logo_45_140x.png?v=1705411679'/></div>
      <div className="icons">
        <div className="youtube">
      <GrYoutube />
      </div>
      <div className="facebook">
      <ImFacebook2 />
      </div>
      </div>
      <Link to="/signup"><button className='btn btn-primary'>Signup</button></Link>
    </div>
  )
}

export default Prenav2
