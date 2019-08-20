import React,{Fragment} from 'react'

const Index = () => {
    return (
      <Fragment>
<section id="home-section" className="hero">
<h1 className="vr text-center">Kanishk</h1>
<div className="js-fullheight home-wrap d-flex">
<div className="half order-md-last"></div>
<div className="half">
<div className="home-slider owl-carousel">
<div className="slider-item js-fullheight">
<div className="overlay"></div>
<div className="container-fluid p-0">
<div className="row d-md-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
<div className="one-third img js-fullheight" style={{backgroundImage:"url(images/bg_1.jpg)"}}>
</div>
</div>
</div>
</div>
<div className="slider-item js-fullheight">
<div className="overlay"></div>
<div className="container-fluid p-0">
<div className="row d-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
<div className="one-third img js-fullheight" style={{backgroundImage:"url(images/bg_2.jpg)"}}>
<div className="overlay"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="ftco-section ftco-intro">
<div className="container">
<div className="row justify-content-end">
<div className="col-md-8">
<h2>Web <span>Developer</span>, hobbyist, Competitive Coder, and computer science undergrad of  <span>Netaji Subhas University Of Technology</span></h2>
<p>Involved in Web Development projects created via MERN stack,helping create multi page Web applications for budding organizations.</p>
</div>
</div>
</div>
</section>


<section className="services-section py-5 py-md-0">
<div className="container">
<div className="row no-gutters d-flex">
{/* <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
<div className="media block-6 services d-block">
<div className="icon"><span className="flaticon-layers"></span></div>
<div className="media-body">
<h3 className="heading mb-3">MERN stack</h3>
<p> 203 Fake St. Mountain View, San Francisco, California, USA</p>
</div>
</div>
</div> */}
<div className="col-md-6 col-lg-4 d-flex align-self-stretch ftco-animate">
<div className="media block-6 services active d-block">
<div className="icon"><span className="flaticon-web-programming"></span></div>
<div className="media-body">
<h3 className="heading mb-3">Web Development</h3>
<p>Interested in making Full Stack web applications</p>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4 d-flex align-self-stretch ftco-animate">
<div className="media block-6 services d-block">
<div className="icon"><span className="flaticon-idea"></span></div>
<div className="media-body">
<h3 className="heading mb-3">Competitive Coding</h3>
<p>Decent Command over Data Structures and Algorithms and actively keep myself busy with tough questions</p>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4 d-flex align-self-stretch ftco-animate">
<div className="media block-6 services active-2 d-block">
<div className="icon"><span className="flaticon-contract"></span></div>
<div className="media-body">
<h3 className="heading mb-3">Debating</h3>
<p>Member of the India's delegation representing the Republic of the Philippines to the <strong>65th Harvard National Model United Nations,</strong>in the Economic and Financial Committee Boston,USA</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="ftco-section ftco-portfolio">
<div className="container-fluid">
<div className="row justify-content-center pb-3">
<div className="col-md-12 mb-5 heading-section text-center ftco-animate">
<h2 className="mb-5">Latest <span>Projects</span></h2>
</div>
</div>
</div>
<div className="container">
<div className="row no-gutters">
<div className="col-md-12 portfolio-wrap">
<div className="row no-gutters align-items-center">
<div className="col-md-5 col-xs-12" style={{backgroundImage: "url(images/yelp.png)",height:"300px"}}>
</div>
<div className="col-md-7">
<div className="text pt-5 pl-0 pl-lg-5 pl-md-4 ftco-animate">
<div className="px-4 px-lg-4">
<div className="desc">
<div className="top">
{/* <span className="subheading">Web Design {12/06/2019}</span> */}
<h2 className="mb-4"><a href="https://stormy-mountain-60303.herokuapp.com/">YelpCamp</a></h2>
</div>
<div className="absolute">
<p>Earliest Full Stack Web Application created using MongoDb,Nodejs and Express.The project was feature loaded with user authentications and rich with other
  convenient functionalities
</p>
<p><a href="https://stormy-mountain-60303.herokuapp.com/" className="custom-btn">View Portfolio</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="container-fluid px-0 portfolio-entry">
<div className="row no-gutters d-xl-flex justify-content-end text-wrapper">
<div className="one-half col-xs-12" style={{backgroundImage: "url('images/phone.png')",height:"280px",width:"600px",marginRight:"50px"}}></div>
<div className="one-half half-text d-flex justify-content-end align-items-center ftco-animate">
<div className="text align-items-center d-flex">
<div className="desc pt-5 pl-4 pr-4 pt-lg-0 pl-lg-5 pl-xl-0 pr-xl-0">
<div className="top">
{/* <span className="subheading">Writing {12/06/2019}</span> */}
<h2 className="mb-4"><a href="https://quiet-peak-65636.herokuapp.com/">My<br/>PhoneBook</a></h2>
</div>
<div className="absolute">
<p>MERN stack application with user personalized phonebook directory with CRUD functionality. User Authentication
  done using jason-web-token
</p>
<p><a href="https://quiet-peak-65636.herokuapp.com/" className="custom-btn">View Portfolio</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="container-fluid px-0 portfolio-entry">
<div className="row no-gutters d-md-flex justify-content-start text-wrapper">
<div className="one-half col-xs-12" style={{backgroundImage: "url('images/my-work3.png')",marginLeft:"5px",height:"240px",width:"400px"}}></div>
<div className="one-half half-text d-flex justify-content-end align-items-center ftco-animate">
<div className="text-2 align-items-start d-flex">
<div className="desc pt-5 pr-4 pl-4 pt-lg-0 pr-lg-5 pr-xl-0 pl-xl-0">
<div className="top">
{/* <span className="subheading">Illustration {12/06/2019}</span> */}
<h2 className="mb-4"><a href="work.html">Exynos Data Labs</a></h2>
</div>
<div className="absolute">
<p>An ongoing student based intiative,I am incharge of developing their website which is right now under development going live soon</p>
<p><a href="#" className="custom-btn">View Portfolio</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="container">
<div className="row no-gutters">
<div className="col-md-12 portfolio-wrap">
<div className="row no-gutters align-items-center">
<div className="col-md-5 col-xs-12 order-md-last " style={{backgroundImage: "url(images/video.jpg)",height:"280px"}}>
</div>
<div className="col-md-7">
<div className="text pt-5 pr-md-5 ftco-animate">
<div className="px-4 px-lg-4">
<div className="desc">
<div className="top">
{/* <span className="subheading">Application {12/06/2019}</span> */}
<h2 className="mb-4"><a href="https://morning-basin-26469.herokuapp.com/">VideoFind</a></h2>
</div>
<div className="absolute">
<p>React Application using Youtube api to make a customized video finding application in accordance to our
  preference
</p>
<p><a href="https://morning-basin-26469.herokuapp.com/" className="custom-btn">View Portfolio</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* <div className="container-fluid px-0 portfolio-entry">
<div className="row no-gutters d-md-flex justify-content-end text-wrapper">
<div className="one-half img js-fullheight" style={{backgroundImage: "url('images/work-5.jpg')"}}></div>
<div className="one-half half-text d-flex justify-content-end align-items-center ftco-animate">
<div className="text align-items-center d-flex">
<div className="desc pt-5 pl-5 pr-5 pt-lg-0 pl-lg-5 pl-xl-0 pr-xl-0">
<div className="top">
<span className="subheading">Writing {12/06/2019}</span> 
<h2 className="mb-4"><a href="work.html">Fashion Style</a></h2>
</div>
<div className="absolute">
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
<p><a href="#" className="custom-btn">View Portfolio</a></p>
</div>
</div>
</div>
</div>
</div>
</div> */}
{/* <div className="container">
<div className="row no-gutters">
<div className="col-md-12 portfolio-wrap">
<div className="row no-gutters align-items-center">
<div className="col-md-5 img js-fullheight" style={{backgroundImage: "url(images/work-6.jpg)"}}>
</div>
<div className="col-md-7">
<div className="text pt-5 pl-md-5 pl-md-4 ftco-animate">
<div className="px-4 px-lg-4">
<div className="desc">
<div className="top">
<span className="subheading">Illustration {12/06/2019}</span>
<h2 className="mb-4"><a href="work.html">Prickly</a></h2>
</div>
<div className="absolute">
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
 <p><a href="#" className="custom-btn">View Portfolio</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div> */}
</section>

{/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" /><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00" /></svg></div> */}
      </Fragment>  
    );
}

export default Index
