import React from 'react'
import { FaReact } from "react-icons/fa";
import '../App.css'
import product from '../images/productDesign.png'
import WebDev from '../images/web.png'
import MobDev from '../images/mobile.png'

function Services() {
  return (
    <div >
        <div className="text-center m-3 text-decoration-underline">
            <h1>My services</h1>
        </div>
        <div className="bg-primary">
        <div className="container-fluid giriid">
            <div className="row">
            <div className="col-3 bg-dark p-4 rounded text-light mx-4 m-3">
            <div style={{with:"80px"}}> <img src={product} /> <br/> </div>
            <h3 className="m-3">Product Design</h3>
            <p>I work with certain design tools to create high-fidelity 
                designs and prototypes. I design accessible and usable
                 products which aid business growth.</p>
            </div>
            <div className="col-4 bg-dark p-4 rounded text-light mx-2 m-3">
            <div style={{with:"80px"}}> <img src={WebDev} /> <br/> </div>
            <h3 className="m-3">Web development</h3>
            <p>I work with certain design tools to create high-fidelity 
                designs and prototypes. I design accessible and usable
                 products which aid business growth.</p>
            </div>
            <div className="col-3 bg-dark p-5 rounded text-light mx-2 m-3">
            <div style={{with:"80px"}}> <img src={MobDev} /> <br/> </div>
            <h3 className="m-3">Mobile development</h3>
            <p>I work with certain design tools to create high-fidelity 
                designs and prototypes. I design accessible and usable
                 products which aid business growth.</p>
            </div>
            {/* <div className="col-4"></div>
            <div className="col-4"></div> */}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services