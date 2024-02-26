import './Contact.css'
import Cards from './Cards'

export default function ContactUs(){
    return(
        <div className='section contactUS'>
        <div className="container">
            <h3 className="ContactUsTitle">Interested to work together or business? <span>{`< let’s keep in touch />`}</span></h3>
            <div className='containerRow CardContainer'>
                <Cards Title={'Linkedin Page'} Description={'Click Here To View'} Link={'https://linkedin.com/in/abdullahmalqarni'} />
                <Cards Title={'Business Email'} Description={'business@abdullahqarni.com'} Link={'mailto:business@abdullahqarni.com'} />
                <Cards Title={'Contact Number'} Description={'0581882912'} />
            </div>
        </div>
        </div>
    )
}