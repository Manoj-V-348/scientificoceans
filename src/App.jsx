import headerImg from "./assets/mainLogo.png";

import "./index.css"
import './App.css'

import whatsapp from "./assets/icons/whatsapp.png";
import topLeft from "./assets/topleft.png";
import topMiddle from "./assets/topmiddle.png";
import topRight from "./assets/topright.png";
import middleLeftBottom from "./assets/middleleftbottom.png";
import rightTopLeft from "./assets/righttopleft.png";
import rightTopRight from "./assets/righttopright.png";
import rightBottomLeft from "./assets/rightbottomleft.png";
import rightBottomRight from "./assets/rightbottomright.png";
import product1 from "./assets/prod1.png";
import product2 from "./assets/prod2.png";
import product3 from "./assets/prod3.png";
import product4 from "./assets/prod4.png";
import thumbsup from "./assets/thumbsup.png";
import mail from "./assets/icons/mail.png";

function App() {

  var timenow = new Date();

  var currentYear = timenow.getFullYear();

  return (
    <>
      <header className='horizontal--flex'>
        <img src={headerImg} alt="logo" />
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact Us</a>
        <a href="https://wa.me/919677240160" target="_blank" className='mobile horizontal--flex center'>
          <img src={whatsapp} alt="whatsapp" />
          <p>9677240160</p>
        </a>
      </header> 

      <section id="home">
        <div className="carousel--container">
          <div className="carousel--left vertical--flex">
            <img src={headerImg} alt="sologo" />
            <p className="subheading">
            Your One stop solution 
            for School Supplies
            </p>
            <p>We are supplying premium Lab equipment, 
              <span className="bold"> Biology, Physical and Chemistry apparatus</span>, 
              Multicolor <span className="bold">Maps/ Charts/ Models</span>, Working Models, <span className="bold">Instruments</span>, and <span className="bold">Sports gear</span> with Quality and care.
            </p>
            <div className="horizontal--flex center">
              <a href="https://wa.me/919677240160" target="_blank" className="mobile">Get the Price and Quotation today</a>
            </div>
          </div>
          <div className="carousel--right">
            <img src={topLeft} alt="delivery" className="topleft"/>
            <img src={topMiddle} alt="chemicals" className="topmiddle"/>
            <img src={topRight} alt="apparatus" className="topright"/>
            <img src={middleLeftBottom} alt="physics" className="middleleftbottom" />
            <img src={rightTopLeft} alt="biology" className="righttopleft" />
            <img src={rightTopRight} alt="" className="righttopright"/>
            <img src={rightBottomLeft} alt="" className="rightbottomleft" />
            <img src={rightBottomRight} alt="" className="rightbottomright" />
          </div>
        </div>
      </section>

      <section id="products" className="vertical--flex center">
        <p className="section--heading">Dear Valued customers</p>
        <p className="about--description"><span className="logocolor bold">Scientific Oceans</span> is a well-established company since 1990, striving to be among the market leaders 
          in providing high-quality laboratory apparatus and equipment for schools. We prioritize <span className="bold">quality, 
          customer support, and exceptional service</span>, ensuring that all your requirements are delivered 
          conveniently to your <span className="bold">doorstep</span>.
        </p>
        <div className="products--images horizontal--flex">
          <img src={product1} alt="product" />
          <img src={product2} alt="product" />
          <img src={product3} alt="product" />
          <img src={product4} alt="product" />
        </div>
      </section>  

      <section id="faq" className="vertical--flex center">
        <p className="section--heading">
          Science. <span className="logocolor">Supplies.</span> Solutions.
        </p>
        <div className="faq--container horizontal--flex">
          <div className="image--container">
            <img src={thumbsup} alt="thumbsup" />
          </div>
          <div className="faq--wrapper">
            <p className="faq--question">Budget constraints?</p>
            <p className="faq--answer">Many online marketplace can cost too much with no support. Our pricing is designed with schools in mind. We got you.</p>

            <p className="faq--question">Late deliveries issues?</p>
            <p className="faq--answer">We provide Bulk orders at the earliest with buyers in our mind. Complete Lab items at one place at your doorstep directly.</p>

            <p className="faq--question">Struggling with bad quality?</p>
            <p className="faq--answer">Upgrade to modern, curriculum-compliant tools with us. Superior Quality items, with after - care service available.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="vertical--flex center">
        <p>Having a Bulk order? Contact us at</p>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHwrzjnCCpnSGVGPVXFDLRKrLKLCSJwzTnbWSctkjZSbNDMqZZzlqTDzLBmmxvcqgCnvjvg" 
        className="horizontal--flex center mail">
          <p>scientificoceanic@gmail.com</p>
          <img src={mail} alt="mail" />
        </a>

        <a href="https://wa.me/918122013097" target="_blank" className='mobile horizontal--flex center'>
          <img src={whatsapp} alt="whatsapp" />
          <p>Contact us at +91 81220 13097</p>
        </a>
      </section>
      <footer className="horizontal--flex">
        <div className="company--container vertical--flex">
          <p className="company">Company</p>
          <p>Scientific Oceans <br />
            GST : 33DBYPS0032Q1ZY <br />
            No:20, Pillaiyar Koil St, <br />
            Old Perungalathur, <br />
            Chennai - 600063
          </p>
        </div>

        <div className="contactus--container vertical--flex">
          <p className="contactus">Contact Us</p>
          <p>Phone: 8122013097, 9677240160 <br />
          Email : scientificoceanic@gmail.com <br />
          </p>
        </div>
      </footer>

      <p className="copyright">© Copyright@ {currentYear}. <span className="logocolor bold">Scientific Oceans</span>, All rights reserved.</p>
    </>
  )
}

export default App
