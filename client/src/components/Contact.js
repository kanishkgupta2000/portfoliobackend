import React,{Fragment,useState} from 'react'
import axios from "axios";

const Contact = () => {
    const [contactUs, setContactUs] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: ""
      });
      const {
        name,
        email,
        phone,
        message,
        subject
      } = contactUs;
    
      const onChange = e =>
        setContactUs({ ...contactUs, [e.target.name]: e.target.value });
    
      const onClick = async e => {
        e.preventDefault();
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };
    
        const res = await axios.post("/api/contact_us", contactUs, config);
        console.log(res);
        setContactUs({
          name: "",
          email: "",
          phone: "",
          message: "",
          subject: ""
        });
      };

    return (
        <Fragment>
            <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: "url('images/bg_3.jpg')"}} data-stellar-background-ratio="0.5">
<div className="overlay"></div>
<div className="container">
<div className="row no-gutters slider-text js-fullheight align-items-end">
<div className="col-md-9 ftco-animate pb-5">
<h2 className="mb-3 bread">Contact Me</h2>
<p className="breadcrumbs"><span className="mr-2"><a href="/home">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>About me <i className="ion-ios-arrow-forward"></i></span></p>
</div>
</div>
</div>
</section>
<section className="contact-section bg-primary">
<div className="container">
<div className="row no-gutters d-flex contact-info">
<div className="col-md-3 d-flex">
<div className="align-self-stretch box p-4 py-md-5 text-center">
<div className="icon d-flex align-items-center justify-content-center">
<span className="icon-map-signs"></span>
</div>
<h3 className="mb-4">Address</h3>
<p>Rajouri Garden,<br/>New Delhi-110027,<br/>India</p>
</div>
</div>
<div className="col-md-3 d-flex">
<div className="align-self-stretch box p-4 py-md-5 text-center">
<div className="icon d-flex align-items-center justify-content-center">
<span className="icon-phone2"></span>
</div>
<h3 className="mb-4">Contact Number</h3>
<p><a href="tel://1234567920">+91 9818533500</a></p>
</div>
</div>
<div className="col-md-3 d-flex">
<div className="align-self-stretch box p-4 py-md-5 text-center">
<div className="icon d-flex align-items-center justify-content-center">
<span className="icon-paper-plane"></span>
</div>
<h3 className="mb-4">Email Address</h3>
<p><a href="https://colorlib.com/cdn-cgi/l/email-protection#b9d0d7dfd6f9c0d6cccbcad0cddc97dad6d4"><span className="__cf_email__" data-cfemail="761f181019360f190304051f02135815191b">kanishkgupta2000@gmail.com</span></a></p>
</div>
</div>
<div className="col-md-3 d-flex">
<div className="align-self-stretch box p-4 py-md-5 text-center">
<div className="icon d-flex align-items-center justify-content-center">
<span className="icon-globe"></span>
</div>
<h3 className="mb-4">Website</h3>
<p><a href=" https://kanishk-gupta.herokuapp.com/">Kanishk Gupta</a></p>
</div>
</div>
</div>
</div>
</section>
<section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
<div className="container-fluid px-0">
<div className="row no-gutters block-9">
<div className="col-md-6 order-md-last d-flex" style={{margin:"auto auto"}}>
<form className="bg-light p-5 contact-form">
<div className="form-group">
<input type="text" name="name" value={name} onChange={onChange} className="form-control" placeholder="Your Name"/>
</div>
<div className="form-group">
<input type="text" name="email" value={email} onChange={onChange} className="form-control" placeholder="Your Email"/>
</div>
<div className="form-group">
<input type="text" name="phone" value={phone} onChange={onChange} className="form-control" placeholder="Your Phone Number"/>
</div>
<div className="form-group">
<input type="text" name="subject" value={subject} onChange={onChange} className="form-control" placeholder="Subject"/>
</div>
<div className="form-group">
<textarea name="" id="" cols="30" rows="7"   name="message" value={message} onChange={onChange} className="form-control" placeholder="Message"></textarea>
</div>
<div className="form-group">
<input type="submit" onClick={onClick} value="Send Message" className="btn btn-primary py-3 px-5"/>
</div>
</form>
</div>
{/* <div className="col-md-6 d-flex">
 <div id="map" className="bg-white"></div> 
</div> */}
</div>
</div>
</section>
        </Fragment>
    )
}

export default Contact
