import React, { Component } from 'react'
import { connect } from "react-redux";
import { skinCodes } from "../Constants/skinCodes";
import onlineclasses from "../static/images/onlineclassess.png"
import backgroundimage from '../static/images/Screenshot (9).png'
import image from "../static/images/softskill.png"
import "./templates.css";
import { updateSkin } from '../actions/documentActions';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




class Templates extends Component {
  state = {
    skinCode: this.props.skinCode
  }

  
  handleSkinSelect = (skinCode) => {
    //  console.log(skinCode);
    this.props.changeSkinCode(skinCode);
    this.props.history.push("/contact");
  }

  componentDidMount() {
    console.log("inside mount", this.props.skinCode);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    this.setState({
      skinCode: newProps.skinCode
    })


  }


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      //nextArrow: <SampleNextArrow />,
      //prevArrow: <SamplePrevArrow />
    };
    let { skinCode } = this.state;
    return (
      <React.Fragment>
        <img src={backgroundimage} alt="" className="bgimgg" />
        <div className="heading">
          <h1>What are your soft skills</h1>
        </div>


        <div className="templates">
          <div className="softskills">

            <div className="descrption" >

              <h4>Unfortunately, some people believe that soft skills aren’t that important. However, almost every employer I’ve ever talked to about this disagrees. In a world where job roles are changing rapidly, soft skills will be one of the few constants”</h4>
              <img src={image} alt="" className="Softskills" />
            </div>
          </div>
            <h2 className="title">Let’s get started!</h2>
          <section className="get-started">
            <ul className="templates-ul">
              <li className="templates-li">
                <h3 className="list-title">Select a Template</h3>
              </li>
              <li className="templates-li" >
                <h3 className="list-title">Enter your Details</h3>
              </li>
              <li className="templates-li" >
                <h3 className="list-title">Finalize Download Print</h3>
              </li>

            </ul>
            <div className="col-image">
             <img src={onlineclasses} className="col-right-image" alt=""/>
            </div>
          </section>
          <div className="templates-intro">
            <h1>Select a resume template to get started</h1>

            <p> <h4>Avoid hours of online research and wasted time playing with margins in Microsoft Word and let our resume generator make a resume for you. We guide you through creating each resume section step-by-step — you just need to fill in the blanks. With our online resume builder, you can create a resume that showcases your greatest strengths and unique professional and educational experiences.</h4></p>
          </div>

          
          <div className="templates-styles">
          
          <Slider>
            {skinCodes.map((skin) => {
              let className = skin.value ==skinCode ? "selected-skin" : "";
              return (
                <div className="template-container">
              
                  <div key={skin.id} className={`template ${className}`} >

                    <img src={`/images/${skin.value}.svg`} alt="" />
                    <button class="template-btn" onClick={() => { this.handleSkinSelect(skin.value) }}>USE TEMPLATE</button>
                  </div>
              
              </div>
              
              )
               
            })}</Slider>
          
          </div>
          
        </div>
        

      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  console.log("inside templates map state" , state);
  return {
    skinCode : state.document.skinCode
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    changeSkinCode : (skinCode) => {  dispatch( updateSkin(skinCode) )}
  }
}

export default connect(mapStateToProps , mapDispatchToProps )(Templates);
