import React from 'react';
import "./skin3.css";
import skinimage from "../static/images/skinimage.png"

const Skin3 = (props) => {
    let {
        fname,
        lname,
        phone,
        email,
        city,
        state,
        street,
        country,
        pin,
        profession,
        summary
    } = props.contact;


    let { cgpa, city: educationCity, state: educationState, degree, collegeName, graduationMonth, graduationYear } = props.education;

    return (
        <React.Fragment>
            <div className="preview-header">
                <div className="image">
                    <img src = {skinimage} className= "skinimage" alt=""/>
                </div>
                <div className="name">
                    <div className="fname">{fname}</div>
                    <div className="lname">{lname}</div>

                </div>
                <div className="address">
                    <div className="street">{street}</div>
                    <div className="city">{city}</div>
                    <div className="state">{state}</div>
                    <div className="country">{country}</div>
                    <div className="pin">{pin}</div>
                    <div className="Phone">{phone}</div>
                    <div className="Email">{email}</div>
                </div>
            </div>
            <div className="professional-summary">
                <div className="professional-summary-heading">PROFESSIONAL SUMMARY</div>
                <div className="profession-details">{profession}</div>
                <div className="details-prof">{summary}</div>
            </div>

            <div className="skills-box">
                <div className="skill-heading">SKILLS</div>
                <div className="skills-description">
                    <div className="two-li">

                        <li  className= "li">html</li> <li  className= "li">CSS</li>
                    </div>
                    <div className="two-li">

                        <li className= "li">nodejs</li> <li  className= "li">javascript</li>
                    </div>
                    <div className="two-li">

                        <li  className= "li">react</li> <li  className= "li">mySql</li>
                    </div> <div className="two-li">

                        <li  className= "li">express</li> <li  className= "li">jquery</li>
                    </div> <div className="two-li">

                        <li  className= "li">git</li> <li className= "li">automation</li>
                    </div>

                </div>
            </div>
            <div className="experience-box">
                <div className="experience-heading">EXPERIENCE</div>
                <div className="experience-description">bot August 2011-Current
                District Manager
                Verizon Wireless | San Francisco, CA
Directed recruitment/training/staff development initiatives. Compute taxes owed and prepare tax returns, ensuring compliance with reporting. Administered daily operations to ensure policies were adhered to by sales staff. Cultivated strong business relationships with customers to drive business.</div>
            </div>
            <div className="Education">
                <div
                    className="education-heading">EDUCATION</div>
                <div className="education-details">
                    <div className="line1">
                        <div className="course-detail">
                            <div className="degree">{degree}</div>
                            <div className="college">: {collegeName}</div>
                        </div>
                        <div className="edu-end">
                            <div className="graduationMonth">{graduationMonth}</div>
                            <div className="graduationYear">{graduationYear}</div>
                        </div>
                    </div>
                    <div className="edu-contact">
                        <div className="educationCity">{educationCity}</div>
                        <div className="educationState">{educationState}</div>
                    </div>
                    <div className="cgpa">{`CGPA: ${cgpa}`}</div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Skin3;