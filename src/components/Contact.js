import React from "react";
import {
  FcCallback,
  HiOutlineMail,
  MdOutlineMail,
  FiMail,
} from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
function Contact() {
  return (
    <div className="container">
      <h1 className="text-center text-decoration-underline">Contact me</h1>
      <div className="row">
        <div className="col-4 bg-dark rounded text-light p-5">
          <h1 className="text-white">Get in touch</h1>
          <p>
            I am available to work on your projects and bring your ideas to
            life. I am just a click away.
          </p>
          <p className="fs-4">
            {" "}
            <FcCallback fontSize={34} /> +252615507298
          </p>
          <p className="fs-4">
            {" "}
            <FaMailBulk fontSize={26} /> Shutiyare143@gmail.com
          </p>
          <div className="mx-5 p-3">
            <p>
              <SiFacebook fontSize={34} /> <BsInstagram fontSize={34} />{" "}
              <BsWhatsapp fontSize={34} />
            </p>
          </div>
        </div>
        <div className="col-8 bg-info rounded">
          <h1 className="text-dark">Send message to me</h1>
          <label for="inputEmail4" class="form-label">
            First Name*
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
          <label for="inputPassword4" class="form-label">
            Last Name*
          </label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
          ></input>
          <label for="inputEmail4" class="form-label">
            Email Address*
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
          <label for="inputPassword4" class="form-label">
            Phone Number*
          </label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
          ></input>
          <label for="inputPassword4" class="form-label">
             Message*
          </label>
          
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
  
  <button type="submit" class="btn btn-dark m-5">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
