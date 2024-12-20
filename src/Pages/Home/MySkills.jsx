import data from "../../data/index.json";

export default function MySkills(){
    return(
        <section className="skills-section" id="mySkills">
            <div className="portfolio-container">
                <p className="section-title">My Skills</p>
                <h2 className="skills-section-heading">My Expertise</h2>
            </div>
            <div className="skills-section-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data?.skills.map((item,index) =>(
                    <div key={index} className="skills-section-card" style={{ flex: '1 1 200px', margin: '10px', display: 'flex', flexDirection: 'column', height: '600px' }}>
                        <div className="skills-section-img">
                            <img src={item.source} alt="Product Chain" />
                        </div>
                        <div className="skills-section-card-content" style={{ paddingBottom: '20px', flexGrow: 1 }}>
                            <h3 className="skills-section-title" style={{color: "white"}}>
                                {item.title}
                            </h3>
                            <p className="skills-section-description" style={{color: "white"}}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}