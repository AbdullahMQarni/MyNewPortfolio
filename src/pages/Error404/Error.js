import Header from '../../components/header/Header';
import './Error.css';


function Error() {
    return (
        <>
        <Header></Header>
        <div id="main">
            <div class="fof">
                    <h1>Error 404</h1>
                    <p>Sorry, the page you are looking for could not be found.</p>
            </div>
        </div>
        </>

    )
}

export default Error