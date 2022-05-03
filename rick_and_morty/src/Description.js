import React from 'react';
import des1 from "./des1.png"
import des2 from "./des2.png"
import des3 from "./des3.png"
import styles from "./Description.module.css";

function Description() {

	return (
		<div className={styles.description}>
            <div className={styles.desCard}>
                <p>
                    Lick, lickity, lick my balls! Me irresponsible? <br/><br/>All I wanted was for you to hand me a screwdriver! But instead you had me buckle down and make you a roofie juice serum, so you can roofie that poor girl at your school. 
                </p>
                <img className={styles.desCardWhite} src={des1} alt="logo"/>
                <p>W-w-w-w--are you kidding me, Morty?! You're really gonna try to take the high road on this one? Y'know your-you're a little creep, Morty! Your-your-your-you're just a little creepy creep person! Shut the fuck up about moonmen! Get off the high road Summer. We all got pink eye because you wouldn't stop texting on the toilet.</p>
            </div>
            <div className={styles.desCard}>
                <img className={styles.desCardBlack} src={des2} alt="logo"/>
                <p>
                    That's because losers look stuff up while the rest of us are carp'en all them 'diems. Beth, your son is dying! Say good-bye! I don't get it and I don't need to. Principal Vagina here, don't let the name fool you; I'm very much in charge. Reminding you that tonight is our annual flu season dance. I don't know how many times I have to say this, but if you have the flu, stay home. The flu season dance is about awareness, not celebration. You don't bring dead babies to Passover.
                </p>

            </div>
            <div className={styles.desCard}>
                <p>
                    Don't be a baby! You avoid getting shot in real life all the time, Morty! Just do the same thing here and we'll be fine! It's a device Morty, that when you put it in your ear, you can enter people's dreams Morty. Its just like that movie that you keep crowing about. Who cares, Morty? Global acts of terrorism happen every day. Uh, here's something that's never happened before—I'm a pickle! I'm Pickle Ri-i-i-ick! Oh god, oh, I blame myself. Oh, what a tragedy. Oh, well, he's bones now. I guess all debts are paid.
                </p>
                <img className={styles.desCardWhite} src={des3} alt="logo"/>
            </div>

		</div>
	);
}

export default Description;