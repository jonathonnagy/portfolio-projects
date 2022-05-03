import React from "react";
import CharacterCard from "./CharacterCard";
import { useCharacters } from '../../api/useData';
import styles from "./CharacterCard.module.css";



function CharacterList({ pageNumber }) {
    const characters = useCharacters(pageNumber);
    //console.log(characters.results)

    return <div className={styles.charPage}>
        <div className={styles.charPage}>{characters.results && characters.results.map(character => { return (<CharacterCard character={character} key={character.id}/>) })}</div>

    </div>;
}
export default CharacterList;

