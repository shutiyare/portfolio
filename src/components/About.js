import React from 'react'
import pic2 from '../images/10 bg.png'
import {HashLink} from 'react-router-hash-link';
import pic3 from '../images/2.jpeg'
// import {FcAbout,IoCloudDoneSharp} from "react-icons/fa";
import {FaAvianex} from "react-icons/fa";
import {Link} from 'react-router-dom'

 function About() {
  return (
    <div className="bg-danger mt-4">
        <h1 className="abt text-center text-danger shadow-lg"> <a href="#ABOUT" style={{
            textDecoration:"none",color:"red",backgroundColor:"white"
        }}>About</a></h1>
        <div className="row">

            <div className="col-3 m- d-block p-5">
                <img className="rounded-circle float-start" src={pic3} style={{width:"300px"}}/>
                
            </div>
            <div className="col-9">
                <h1 className="p-5 text-center text-info text-underline">ABOUT ME </h1>
                <div className="px-5 m-5 fs-4 text-light bg-dark rounded">
                    <br/>
                <p>I'm Abdullahi Ali TAhliil, Student At JUST university , Full Stack </p>
                <p>Developer , freelancer based in Mogadisho City. </p>
                <p>I learn Web Development and Mobile Development in Dugsiiye 
                    Online Courses , Kaafiye Technology Center and Another Online Resources.</p>
                
                <p> I am proffisional web developer</p>
                <br/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About