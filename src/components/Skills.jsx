import "../cssStyling/skills.css";

function Skills(){
    return(
        <section className="skill-content" id="skills">
            <div className="skills-page">
                <h1 className="skill" style={{color: '#d7636b'}}> My Skills </h1>
                <p className="skill-paragraph">Have gained knowledge and understanding in languages such as Java, python, javascript,
                   web(html and css), and database(MySQL and MongoDB) as well as their frameworks such as java Springboot, ExpressJs and React.
                   Through this knowledge, together with machine learning have gained skills in data prediction and analysis.
                </p>

                <div>
                    <h1> These are some of the projects have done primarily building web applications</h1>
                    <a href="">frontend Jali connect App </a>
                    <a href=""> Hotel Management System</a>
                    <a href=""> Task Manager App</a>
                    <a href=""> </a>
                </div>
            </div>
        </section>
    )
}
export default Skills;