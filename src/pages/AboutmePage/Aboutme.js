import React from "react";
import Header from '../../components/header/Header'
import './Aboutme.css'
import personalPhto from '../../components/AboutSection/PersonalPhoto.jpg'


function Aboutme() {
    let tabContent = <p>Plz Select a Section to view</p>

    

    return (
        <>
        <Header></Header>
        <div className="sectionOne">
        <div className="section">
            <h1 className='AboutSectionTitle'>{`<About Me />`}</h1>
            <div className="containerRow">
                <img className="personal" src={personalPhto} alt="A picture of me"/>
                <div className="textContainer">
                    <p>I’m Abdullah Alqarni, a passionate Front-end developer and Tech content creator. I recently graduated with honors from King Abdulaziz University (KAU) with a bachelor degree in Management Information Systems (MIS).</p>
                    <p>My coding journey began during my university days, and I’ve set my sights on becoming a Full-Stack developer specializing in the MERN Stack.</p>
                </div>
            </div>
        </div>
        </div>
        <div className="sectionTwo ">
            <div className="section ">
                <h2 className="center">{`<My Resume />`}</h2>
                <div className="TabButtonsAbout">

                </div>
                <div className="center">{tabContent}</div>
            </div>
        </div>
        </>
    );
}

export default Aboutme;
