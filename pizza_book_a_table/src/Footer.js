import face from './page/facebook.png';
import insta from './page/insta.png';

const Footer = () => {
    return (
        <footer id="footer">
                <div id="footerContainer">
                    <div id="footerDatas">
                        <p>Mobile: 06 20 333 3333</p>
                        <p>E-mail: giannispizza@gmail.com</p>
                    </div>
                    <div id="map">
                        <iframe title="map" src="https://maps.google.com/maps?q=Budapest,%20Arany%20J%C3%A1nos%20u.%209,%201051&t=&z=13&ie=UTF8&iwloc=&output=embed" width="300" height="250" ></iframe> 
                    </div>
                </div>
                {<img src={face} className="footerIcon" alt="icon"/>}
                {<img src={insta} className="footerIcon" alt="icon"/>}
                <div id="footerIcon"></div>
        </footer>
    )
}

export default Footer;