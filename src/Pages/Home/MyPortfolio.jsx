import data from "../../data/index.json";

export default function MyPortfolio(){
    return(
        <section className="portfolio-section" id="myPortfolio">
            <div className="portfolio-container-box">
                <div className="portfolio-container">
                    <p className="sub-title">Recent Projects</p>
                    <h2 className="section-heading">My Portfolio</h2>
                </div>
                <div>
                    <a href="https://github.com/smparra" target="_blank" rel="noopener noreferrer" className="btn btn-github" id="linkedin-btn">
                        <img
                            src="./img/github-mark-white.png"
                            alt="Github Logo"
                            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                        />
                        Visit My Github
                    </a>
                </div>
            </div>
            <div className="portfolio-section-container">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio-section-card">
                        <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                            <div className="portfolio-section-img">
                                <img src={item.source} alt="Placeholder" />
                            </div>
                        </a>
                        <div className="portfolio-section-card-content">
                            <div>
                                <h3 className="portfolio-section-title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                            </div>
                            <a href={item.githubUrl} className="text-sm portfolio--link" target="_blank" rel="noopener noreferrer">
                                {item.link}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        strokeWidth="2.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}