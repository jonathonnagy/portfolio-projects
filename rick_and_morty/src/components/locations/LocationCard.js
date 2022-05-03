import React, { useState } from "react";
import styles from "./LocationCard.module.css";

function Location(props){
    const location = props.location;
    return <div>
        <br/>
        <div>MORE INFO:</div>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Dimension:</div>
            <div className={styles.infoData}>{location.dimension}</div>
        </div>

    </div>
}

function LocationCard({ location }) {
    let [clickState, setClick] = useState(false);
    
    return <div className={styles.locCard} onClick={(event) => {setClick(!clickState);}}>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Name:</div>
            <div className={styles.infoData}>{location.name}</div>
        </div>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Type:</div>
            <div className={styles.infoData}>{location.type}</div>
        </div>
        {clickState && <Location location={location}/>}
    </div>;
}

export default LocationCard;
