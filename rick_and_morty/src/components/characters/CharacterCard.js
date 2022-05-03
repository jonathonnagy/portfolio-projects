import React, { useState } from "react";
import styles from "./CharacterCard.module.css";

function Character(props){
    const character = props.character;
    return <div>
        <br/>
        <div>MORE INFO:</div>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Species:</div>
            <div className={styles.infoData}>{character.species}</div>
        </div>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Gender:</div>
            <div className={styles.infoData}>{character.gender}</div>
        </div>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Type:</div>
            {character.type !== "" && <div className={styles.infoData}>{character.type}</div>}
            {character.type === "" && <div className={styles.infoData}>-</div>}
        </div>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Origin:</div>
            <div className={styles.infoData}>{character.origin.name}</div>
        </div>

    </div>
}


function CharacterCard({ character }) {
    let [clickState, setClick] = useState(false);

    return <div className={styles.charCard} onClick={(event) => {setClick(!clickState);}}>
        <img src={character.image} className={styles.charImg} alt="character" ></img>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Name:</div>
            <div className={styles.infoData}>{character.name}</div>
        </div>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Status:</div>
            <div className={styles.infoData}>{character.status}</div>
        </div>
        {clickState && <Character character={character}/>}
    </div>;
}

export default CharacterCard;
