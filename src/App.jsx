import { useState } from "react";

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
import tick from "./assets/icons/tick.png";
import physics1 from "./assets/physics1.png";
import physics2 from "./assets/physics2.png";
import physics3 from "./assets/physics3.png";
import chemistry1 from "./assets/chemistry1.png";
import chemistry2 from "./assets/chemistry2.png";
import chemistry3 from "./assets/chemistry3.png";
import biology1 from "./assets/biology1.png";
import biology2 from "./assets/biology2.png";
import biology3 from "./assets/biology3.png";
import phone from "./assets/phone.png";

function App() {
  const [physics, setPhysics] = useState(true);
  const [chemistry, setChemistry] = useState(false);
  const [biology, setBiology] = useState(false);

  const physicsButton = physics ? 
  {
    color: "#ffffff",
    backgroundColor: "#303030"
  } :
  {
    opacity: 1
  };

  const chemistryButton = chemistry ? 
  {
    color: "#ffffff",
    backgroundColor: "#303030"
  } :
  {
    opacity: 1
  };

  const biologyButton = biology ? 
  {
    color: "#ffffff",
    backgroundColor: "#303030"
  } :
  {
    opacity: 1
  };

  const physicsDetails = physics ? { opacity: 1, display: "flex" } : { opacity: 0, display: "none" };
  const chemistryDetails = chemistry ? { opacity: 1, display: "flex" } : { opacity: 0, display: "none" };
  const biologyDetails = biology ? { opacity: 1, display: "flex" } : { opacity: 0, display: "none" };

  var timenow = new Date();

  var currentYear = timenow.getFullYear();

  function togglePhysics(){
    setPhysics(true);
    setChemistry(false);
    setBiology(false);
  }

  function toggleChemistry(){
    setPhysics(false);
    setChemistry(true);
    setBiology(false);
  }

  function toggleBiology(){
    setPhysics(false);
    setChemistry(false);
    setBiology(true);
  }

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

      <section id="listing" className="vertical--flex center">
        <p><span className="bold">Our Products</span> ( All Elementary, X, XI, XII STD Syllabus )</p>

        <div className="options--container horizontal--flex">
          <div className="options horizontal--flex center" style={physicsButton} onClick={togglePhysics}>
            <p>Physics Apparatus</p>
          </div>
          
          <div className="options horizontal--flex center" style={chemistryButton} onClick={toggleChemistry}>
            <p>Chemical Reagents</p>
          </div>

          <div className="options horizontal--flex center" style={biologyButton} onClick={toggleBiology}>
            <p>Biology and others</p>
          </div>
        </div>

        <div className="options--points horizontal--flex">
          <div className="points--area physics--points" style={physicsDetails}>
            <div className="point horizontal--flex ">
              <img src={tick} alt="tick" />
              <p>Laboratory Glassware <span>(Borosilicate glass beakers, Conical flask, Funnel, Burettes, Test tubes etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Lab Metal ware <span>(Bunsen burner, Spatula, Stands, Clamps, Test tube holders etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Rubberware <span>(Corks, Pipette bulb, Rubber tubes, Teats etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Porcelainware <span>(China dish, Crucible, Mortar & Pestle etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Woodenware <span>(Burette Stand, Dissection board, Mercury/Sodium lamp stand etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Electronic apparatus for Experiments <span>(De morgan's theorem, PN junction, NPN transistor etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Mechanical experiment apparatus <span>(Stoke's Apparatus, Sonometer etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Electrical experiment apparatus <span>(Ohm's law, Ammeter, Voltmeter etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Plastic Labware <span>(Beakers, Reagent bottle, Pipette & Test tube stand etc.)</span></p>
            </div>
          </div>

          <div className="points--area chemistry--points" style={chemistryDetails}>
            <div className="point horizontal--flex ">
              <img src={tick} alt="tick" />
              <p>Organic Reagents <span>(Acetone, Benzene, Ethyl Acetate etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Inorganic Reagents <span>(Hydrochloric Acid, Sodium Chloride, Sulfuric Acid etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Preparative Reagents <span>(Sodium Hydroxide, Ammonium Sulfate etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Analytical Reagents <span>(Silver Nitrate, Potassium Permanganate etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Indicator Reagents <span>(Phenolphthalein, Methyl Orange, Litmus paper, Ph paper etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Salts for Experiments covering Practical Syllabus <span>( Full set of chemical reagents available.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>High Quality HansLab chemicals delivered.<span>(Ohm's law, Ammeter, Voltmeter etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Distilled Water for the Experiments <span>(Upto 100 Litres delivered at your doorstep.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>High concentrated acids for titrations <span>(HCl, H2SO4 etc.)</span></p>
            </div>
          </div>

          <div className="points--area biology--points" style={biologyDetails}>
            <div className="point horizontal--flex ">
              <img src={tick} alt="tick" />
              <p>Microscope <span>(Dissecting/ Compound/ Pathological , with eye pieces, obejctive etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Lab equipments <span>(Micro prepared Slides, Cotton roll, Dissection hammer, Forceps etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Fibre Glass Models <span>(Human organs, Skeleton, Parts of plant etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Model Photographs <span>(Full X , XI , XII STD Syllabus )</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Slides and Specimen <span>(Ascaris, Dicot stem, Testis, Hydra etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>General Charts <span>( All Geography charts, Atmosphere, Solar system, Water cycle etc.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Superior Quality models and Charts delivered at your place.<span>( Full set of chemical reagents available.)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>Multicolor Charts <span>(Zoology, Botany, Physics and Chemistry as per Syllabus)</span></p>
            </div>

            <div className="point horizontal--flex">
              <img src={tick} alt="tick" />
              <p>All Maths Lab items available <span>(Shapes and color, Sand clock etc.)</span></p>
            </div>
          </div>

          <div className="images--area physics--image" style={physicsDetails} id="imagesPoint">
            <img src={physics1} alt="physics--image" className="image1" />
            <img src={physics2} alt="physics--image" className="image2" />
            <img src={physics3} alt="physics--image" className="image3" />
          </div>

          <div className="images--area physics--image" style={chemistryDetails} id="imagesPoint">
            <img src={chemistry1} alt="chemistry--image" className="image1 chem1" />
            <img src={chemistry2} alt="chemistry--image" className="image2 chem2" />
            <img src={chemistry3} alt="chemistry--image" className="image3 chem3" />
          </div>

          <div className="images--area physics--image" style={biologyDetails} id="imagesPoint">
            <img src={biology1} alt="biology--image" className="image1" />
            <img src={biology2} alt="biology--image" className="image2" />
            <img src={biology3} alt="biology--image" className="image3" />
          </div>
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
        <a href="https://mail.google.com/mail/?to=scientificoceanic@gmail.com#compose" target="_blank" 
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
