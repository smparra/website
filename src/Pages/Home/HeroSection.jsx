export default function HeroSection() {
    return (
        <section id="HeroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hello, I'm Segundo</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Full Stack</span>{""}
                        <br />
                        Developer
                    </h1>
                    <p className="hero-section-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nam, nisi necessitatibus itaque iure, placeat nesciunt dolor cupiditate eveniet nulla ipsum numquam? Dolorum tempore assumenda quam beatae itaque, maiores deserunt.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit possimus labore corrupti quibusdam beatae.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero-section-img">
                <img src="./img/hero_img.png" alt="hero-section-img" />
            </div>
        </section>
    );
}
