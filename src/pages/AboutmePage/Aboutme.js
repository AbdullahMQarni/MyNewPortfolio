/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Header from '../../components/header/Header';
import './Aboutme.css';
import personalPhto from '../../components/AboutSection/PersonalPhoto.jpg';
import TabAbout from "./TabAbout";
import {data} from './CvData';
import Footer from "../../components/Footer/Footer";



function Aboutme() {
    const [selectSection, setSelectSection] = useState(0);
    
    function handleSelectSection(selectSection) {
        setSelectSection(selectSection)
    }

    let tabContent = <p>Plz Select a Section To View</p>

    if (selectSection) {
        tabContent = (
            <div className='containerRow' id="tab-content-About">
                <div className='Container tabDesc'>
                    <h2>{data[selectSection].title}</h2>
                    <p>{data[selectSection].desc}</p>
                    {data[selectSection].desc2 !== null ? <p>{data[selectSection].desc2}</p> : null}
                    {data[selectSection].desc3 !== null ? <p>{data[selectSection].desc3}</p> : null}
                    {data[selectSection].desc4 !== null ? <p>{data[selectSection].desc4}</p> : null}
                    {data[selectSection].desc5 !== null ? <p>{data[selectSection].desc5}</p> : null}
                    {data[selectSection].desc6 !== null ? <p>{data[selectSection].desc6}</p> : null}
                </div>
            </div>
        );
    }


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
                    <TabAbout 
                    isSelected={selectSection === "OBJ"}
                    onSelect={() => handleSelectSection('OBJ')}>
                        Objective
                    </TabAbout>
                    <TabAbout 
                    isSelected={selectSection === "EXP"}
                    onSelect={() => handleSelectSection('EXP')}>
                        Experience
                    </TabAbout>
                    <TabAbout 
                    isSelected={selectSection === "EDU"}
                    onSelect={() => handleSelectSection('EDU')}>
                        Eduction
                    </TabAbout>
                    <TabAbout 
                    isSelected={selectSection === "VOL"}
                    onSelect={() => handleSelectSection('VOL')}>
                        Volunteering
                    </TabAbout>
                    <TabAbout 
                    isSelected={selectSection === "CER"}
                    onSelect={() => handleSelectSection('CER')}>
                        Certification
                    </TabAbout>
                    <TabAbout 
                    isSelected={selectSection === "SKILLS"}
                    onSelect={() => handleSelectSection('SKILLS')}>
                        Skills
                    </TabAbout>
                    <TabAbout 
                    isSelected={selectSection === "PROJ"}
                    onSelect={() => handleSelectSection('PROJ')}>
                        Project
                    </TabAbout>
                    <TabAbout 
                    isSelected={selectSection === "LANG"}
                    onSelect={() => handleSelectSection('LANG')}>
                        Langauges
                    </TabAbout>
                </div>
                <div className="center">{tabContent}</div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default Aboutme;
