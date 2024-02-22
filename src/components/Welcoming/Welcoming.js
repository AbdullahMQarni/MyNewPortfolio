import './Welcoming.css'
import SocialMediaIcon from './SocialMediaIcon'
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";





export default function Welcoming() {
    return(
        <>
        <div className="Welcoming section containerRow">
                <div>
                    <svg className="circle" xmlns="http://www.w3.org/2000/svg" width="200" height="200" 
                        viewBox="-25 -25 250 250" class="rotate circle"> 
                        <path d="M199.5960077902492 91.02028774154631 C198.56001287827726 82.15331751202308 194.55544338187926 64.33018698924683 190.09099540041734 56.599394615259314 C182.0110650669945 42.607908083587105 158.79127801182204 18.525201493044403 144.73253545220422 10.562869723937965 C134.98545557744941 5.0424980823302255 112.35647725421438 -0.8368213236124679 101.18651896188106 0.007039383999156712 C81.74830560792111 1.4755448203029526 43.24967119280396 16.222334762311757 29.026642866758365 29.552980352343226 C17.26391280174495 40.577691973057384 1.0778136616779295 71.40560555619791 0.7812446411581391 87.52448057024118 C0.3070348499752889 113.29834036556012 22.537567511125285 165.51462161968777 42.50484644175431 181.81874673516913 C57.488926461785795 194.05387983646656 99.55897302531625 203.87429395003093 118.09782561183786 198.3487097430541 C145.65154297249083 190.13620658079154 187.29786304707162 142.68898400455123 198.66586713068926 116.28025378638714 C201.16442677291627 110.47591143743821 200.32934740838266 97.29686351134653 199.5960077902492 91.02028774154631Z" stroke="none" fill="#00adb5"  />
                    </svg>
                </div>
            <div className="container">
                <h3 className='textContainer'>Welcome to my website<p>I’m <span>Abdullah Alqarni,</span> MIS Fresh Graduated and Tech Content Creator</p></h3>
            </div>
        </div>
        <div className='container'>
            <h2>{`< Social Media Accounts />`}</h2>
            <div className='containerRow'>
                <SocialMediaIcon Icon={<FaGithub />} Link={'https://github.com/AbdullahMQarni'} />
                <SocialMediaIcon Icon={<FaXTwitter />} Link={'https://twitter.com/AbdullahMQarni'} />
                <SocialMediaIcon Icon={<FaYoutube />} Link={'https://www.youtube.com/@UltraTech-UT'} />
                <SocialMediaIcon Icon={<FaLinkedin />} Link={'https://linkedin.com/in/abdullahmalqarni'} />
            </div>

        </div>
        </>
    )
}