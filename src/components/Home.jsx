import "../cssStyling/home.css";
import myphoto2 from "../assets/myphoto2.jpeg";
function Home() {
    return (
        <section className="home-content" id="home">
            <div className="home-page">
                <span id="welcome">
                    <img src={myphoto2} alt="welcome" />
                </span>
                <span className="header-sect">
                    <p className="header1">Hello everyone </p>
                    <p className="header2"> Welcome to my portfolio.</p>
                </span>
            </div>
        </section>
    )
}
export default Home;
