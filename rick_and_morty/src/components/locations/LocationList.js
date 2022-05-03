import React from "react";
import LocationCard from "./LocationCard";
import { useLocations } from '../../api/useData';
import styles from "./LocationCard.module.css";



function LocationList({ pageNumber }) {
    const locations = useLocations(pageNumber);
	//console.log(locations.results)

    return <div className={styles.locList} >
        <div>{locations.results && locations.results.map((location, index) => { return (<LocationCard location={location} key={index}/>) })}</div>

    </div>;
}

export default LocationList;

