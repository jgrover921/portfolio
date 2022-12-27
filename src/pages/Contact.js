import emailjs from 'emailjs-com'
import GitImg from '../assests/github.png'
import LinkdImg from '../assests/linkd.png'
export default function Contact() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_8po6d9h', e.target, 'RNFFzuYYLSmlHXxAB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    }

    return (
        <>
            <div className="contact-bg">
                <br></br>
                <h1 className="title"><u>Contact Me</u></h1>

                <div className="contact-container">
                    <br></br><br></br>
                    <form onSubmit={sendEmail}>
                        <input type="text" placeholder="Subject" name="subject"></input>
                        <br></br>
                        <input type="text" placeholder='Name' name="name"></input>
                        <br></br>
                        <input type="email" placeholder='Email Address' name="email"></input>
                        <br></br><br></br>
                        <textarea cols="30" rows="8" placeholder="Write Your Message Here" name="message"></textarea>
                        <br></br>
                        <input type="submit" value="Send Message"></input>
                    </form>
                    <br></br><br></br>
                </div>
                <br></br><br></br>
                <div className="links">
                    <a href="https://github.com/jgrover921/" target="_blank">
                        <img className='git' src={GitImg} alt="github"></img>
                    </a>
                  
                    <a href="https://www.linkedin.com/in/jessica-grover-597a8525a/">
                        <img className="linkd" src={LinkdImg} alt="linkedin"></img>
                    </a>
                    
                </div>
                <br></br><br></br>
            </div>
        </>
    )
}