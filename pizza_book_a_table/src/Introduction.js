import intro1 from './page/intro_img1.jpg';
import intro2 from './page/intro_img2.jpg';
//import intro2 from './intro2.jpg';

const Introduction = () => {
    return (
        <div id="intro">
            <div id="introIcons"></div>
            <div className="sectionTitle">
                <h1>Introduction</h1>
            </div>
            <div className="introContent">
                {<img src={intro1} className="introPic" alt="Pizza" />}
                <div className='introText'>
                    <h2>Origin</h2>
                    <p>Gianni's started off as a family business in a little town called
                        Mascarponeferraribuongiorno using the magical <b>Grandma recipe</b> . People are
                        kept coming and now we have a chance to spread the taste to more and more places
                        in the world. That's why we are here, in Hungary, to show off how amazing food can
                        we... I mean, you can decide whether you like it, or not. Khm...</p>
                </div>
            </div>
            <div className="introContent">
                <div className='introText'>
                    <h2>Our crew</h2>
                    <li> Johnny - Our bold master chef</li>
                    <li>Betti - The girl who will talk to you when you call us</li>
                    <li>Máté - Johnny's servant who can cut onions like no one else in the world</li>
                    <li>Ákos - Our silent waiter who sometimes speaks, but i bet you won't hear it</li>
                    <li>Bandi - Speaks way too much and tries to be funny all the time, but meh...</li>

                </div>
                {<img src={intro2} className="introPic" alt="Pizza" />}
            </div>

        </div>
    )
}

export default Introduction;