import './Contact.css'

export default function Cards({Title, Description, Link}) {
    return(
        <div className='card'>
            <div className="container">
                <h1 className="Title">{Title}</h1>
                <p className="Description"><a href={Link} target='_blank'>{Description}</a></p>
            </div>
        </div>
    )
}