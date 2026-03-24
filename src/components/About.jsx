import "../cssStyling/about.css";
import myphoto1 from "../assets/myphoto1.jpeg";
function About() {
    return (
        <section className="about-me" id="about">
            <h1 className="info-me" style={{color: '#d7636b'}}>About Me</h1>
            <p className="my-self"> My name is Effie Achieng Oluoch, born in the year 2004 June in a family of seven children,
                3rd year undergraduate student at Kisii University currently taking Bachelor of Science in software Engineering.
                I am a passionate developer and love things technology. Have majored in Data Science/Data Analysis as a field of occupation.
            </p>
            <div>
                <img src={myphoto1} alt="About Me" />
            </div>
        </section>
    )
}
export default About;