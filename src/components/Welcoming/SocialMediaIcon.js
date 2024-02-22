import './Welcoming.css'

export default function SocialMediaIcon({Icon, Link}){
    return(
        <>
        <a  href={Link} target="_blank" rel="noreferrer" className="Social">
            {Icon}
        </a>
        </>
    )
}