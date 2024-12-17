export default function ContactMe() {
    return(
        <section id="contact" className="contact-section">
            <div>
                <p  className="sub-title">Get in Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid eaque natus neque itaque, dolore assumenda ipsa cupiditate ipsam laboriosam, doloribus, voluptatum iste! Rem fugit officiis beatae cupiditate, saepe iure?
                </p>
            </div>
            <form className="contact-form-container" action="mailto:contact@segundoparra.com?subject=Portfolio Contact&body=Hello Segundo,%0D%0A%0D%0AI'm " method="POST" encType="text/plain">
                <div className="container">
                    <label htmlFor="first-name" className="contact-label">
                        <span className="text-md">First Name</span>
                        <input 
                        type="text" 
                        className="contact-input text-md" 
                        name="first-name"
                        id="first-name"
                        required
                        onInput={(e) => {
                            const form = e.target.form;
                            const lastName = form['last-name'].value;
                            const message = form['message'].value;
                            const email = form['email'].value;
                            const phone = form['phone-number'].value;
                            form.action = `mailto:contact@segundoparra.com?subject=Portfolio Contact&body=Hello Segundo,%0D%0A%0D%0AI'm ${e.target.value} ${lastName}.%0D%0A%0D%0A${message}%0D%0A%0D%0AContacted from:%0D%0AEmail: ${email}%0D%0APhone: ${phone}`;
                        }}
                        />
                    </label>
                    <label htmlFor="last-name" className="contact-label">
                        <span className="text-md">Last Name</span>
                        <input 
                        type="text" 
                        className="contact-input text-md" 
                        name="last-name"
                        id="last-name"
                        required
                        onInput={(e) => {
                            const form = e.target.form;
                            const firstName = form['first-name'].value;
                            const message = form['message'].value;
                            const email = form['email'].value;
                            const phone = form['phone-number'].value;
                            form.action = `mailto:contact@segundoparra.com?subject=Portfolio Contact&body=Hello Segundo,%0D%0A%0D%0AI'm ${firstName} ${e.target.value}.%0D%0A%0D%0A${message}%0D%0A%0D%0AContacted from:%0D%0AEmail: ${email}%0D%0APhone: ${phone}`;
                        }}
                        />
                    </label>
                    <label htmlFor="email" className="contact-label">
                        <span className="text-md">Email</span>
                        <input 
                        type="email" 
                        className="contact-input text-md" 
                        name="email"
                        id="email"
                        required
                        onInput={(e) => {
                            const form = e.target.form;
                            const firstName = form['first-name'].value;
                            const lastName = form['last-name'].value;
                            const message = form['message'].value;
                            const phone = form['phone-number'].value;
                            form.action = `mailto:contact@segundoparra.com?subject=Portfolio Contact&body=Hello Segundo,%0D%0A%0D%0AI'm ${firstName} ${lastName}.%0D%0A%0D%0A${message}%0D%0A%0D%0AContacted from:%0D%0AEmail: ${e.target.value}%0D%0APhone: ${phone}`;
                        }}
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact-label">
                        <span className="text-md">Phone Number</span>
                        <input 
                        type="number" 
                        className="contact-input text-md" 
                        name="phone-number"
                        id="phone-number"
                        required
                        onInput={(e) => {
                            const form = e.target.form;
                            const firstName = form['first-name'].value;
                            const lastName = form['last-name'].value;
                            const message = form['message'].value;
                            const email = form['email'].value;
                            form.action = `mailto:contact@segundoparra.com?subject=Portfolio Contact&body=Hello Segundo,%0D%0A%0D%0AI'm ${firstName} ${lastName}.%0D%0A%0D%0A${message}%0D%0A%0D%0AContacted from:%0D%0AEmail: ${email}%0D%0APhone: ${e.target.value}`;
                        }}
                        />
                    </label>
                </div>
                <label htmlFor="message" className="contact-label">
                        <span className="text-md">Message</span>
                        <textarea
                        className="contact-input text-md" 
                        id="message"
                        name="message"
                        rows="8"
                        placeholder="Type your message..."
                        required
                        onInput={(e) => {
                            const form = e.target.form;
                            const firstName = form['first-name'].value;
                            const lastName = form['last-name'].value;
                            const email = form['email'].value;
                            const phone = form['phone-number'].value;
                            form.action = `mailto:contact@segundoparra.com?subject=Portfolio Contact&body=Hello Segundo,%0D%0A%0D%0AI'm ${firstName} ${lastName}.%0D%0A%0D%0A${e.target.value}%0D%0A%0D%0AContacted from:%0D%0AEmail: ${email}%0D%0APhone: ${phone}`;
                        }}
                        />
                </label>
                <label htmlFor="checkbox" className="checkbox-label">
                    <input type="checkbox" required name="checkbox"
                    id="checkbox"/>
                    <span className="text-sm">I accept the terms</span>
                </label>
                <div><button type="submit" className="btn btn-primary contact-form-btn">Submit</button></div>
            </form>
        </section>
    )
}