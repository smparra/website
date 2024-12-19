export default function HeroSection() {
    return (
        <section id="HeroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title" style={{color: "white"}}>Hello, I'm</p>
                    <h1 className="hero-section-title">
                        <span style={{color: "white"}}>Segundo</span>{""}
                        <br />
                        <span style={{color: "white"}}>Parra</span>
                    </h1>
                    <p className="hero-section-description" style={{color: "white"}}>
                    I am a Computer Science undergraduate with a minor in Data Science, passionate about applying my technical expertise to the insurance and reinsurance industry. My skills in machine learning, statistical analysis, and data-driven problem-solving have been honed through personal projects.
                        <br />
                        <br/>
                        I thrive on solving real-world challenges by blending technology and innovation. Explore my portfolio to see how I've combined technical precision with a practical focus, delivering solutions that add measurable value in this evolving, data-driven industry.
                    </p>
                </div>
                <br/>
                <div style={{display: 'flex', gap: '1rem'}}>
                    <button 
                        className="btn btn-primary" 
                        id="linkedin-btn"
                        onClick={() => window.open('./img/Segundo-Resume.pdf', '_blank')}
                    >
                        Resume/CV
                    </button>
                    <button 
                        className="btn btn-primary" 
                        id="linkedin-btn" 
                        onClick={() => window.open('https://www.linkedin.com/in/segundo-parra', '_blank')}
                    >
                        LinkedIn
                    </button>
                </div>
            </div>
            <div className="hero-section-img">
                <img src="./img/hero_img.png" alt="hero-section-img" />
            </div>
        </section>
    );
}
