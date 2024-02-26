import personalPhto from "./PersonalPhoto.jpg";
import './AboutSection.css'

export default function AboutSection(){
    return(
        <>
        <div className="section aboutSection">
            <h1 className='AboutSectionTitle'>{`<About Me />`}</h1>
            <div className="containerRow">
                <img className="personal" src={personalPhto} alt="A picture of me"/>
                <div className="textContainer">
                    <p>I’m Abdullah Alqarni, a passionate Front-end developer and Tech content creator. I recently graduated with honors from King Abdulaziz University (KAU) with a bachelor degree in Management Information Systems (MIS).</p>
                    <p>My coding journey began during my university days, and I’ve set my sights on becoming a Full-Stack developer specializing in the MERN Stack.</p>
                </div>
            </div>
            <div className="container">
                <a href="#ToAboutMePage" className="AboutPage">For More Click Me</a>
            </div>
        </div>
        </>
    )
}