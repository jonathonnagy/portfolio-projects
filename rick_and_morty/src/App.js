/* eslint-disable array-callback-return */
import React, { useState } from "react";
import styles from "./App.module.css";
import { useCharacters, useLocations } from "./api/useData";
import logo from "./logo2.png"
import title from "./rick2.png"
import gun from "./gun.png"
import CharacterList from "./components/characters/CharacterList";
import LocationList from "./components/locations/LocationList";
import Description from "./Description";


function App() {
  
  let [page, setPage] = useState("default");
  let [pageNumber, setpageNumbe] = useState(1);
 

  let pageInfo = useCharacters(1);
  let maxCharPage = pageInfo && pageInfo.info && pageInfo.info.pages ? pageInfo.info.pages : 42;

  let pageInfo2 = useLocations(1);
  let maxLocPage = pageInfo2 && pageInfo2.info && pageInfo2.info.pages ? pageInfo2.info.pages : 7;

  

  function Pagination({maxPage}){
    let max = maxPage;


    return <div className={styles.pagination}>
          <button disabled={pageNumber<2} onClick={(event) => {setpageNumbe(pageNumber-1)}}>{'< prev'}</button>
          <div className={styles.paginationNumbers}>
            {pageNumber>1 && <div className={styles.pagNum} onClick={(event) => {setpageNumbe(1)}}>1</div>}
            {pageNumber>6 && <div className={styles.points}>...</div>}
            
            {[...Array(4)].map((p,index) => {if (pageNumber-4+index>1) return <div className={styles.pagNum} key={index} onClick={(event) => {setpageNumbe(pageNumber-4+index)}}>{pageNumber-4+index}</div> })}
      
            <div className={styles.currentPage}>{pageNumber}</div>

            {[...Array(4)].map((p,index) => {if (pageNumber+index+1<max) return <div className={styles.pagNum} key={index} onClick={(event) => {setpageNumbe(pageNumber+index+1)}}>{pageNumber+index+1}</div> })}
            {pageNumber<max-5 && <div className={styles.points}>...</div>}
            {pageNumber<max && <div className={styles.pagNum} onClick={(event) => {setpageNumbe(max)}}>{max}</div>}
          </div>
      <button disabled={pageNumber === max} onClick={(event) => {setpageNumbe(pageNumber+1)}}>{'next >'}</button>
    </div>
  }

  return <div className="App">
    <div className={styles.header}>
      <img className={styles.logo}src={logo} alt="logo"/>
      <img className={styles.title} src={title} alt="logo" width={600}/>
    </div>
    <div className={styles.navbar}>
      <img className={styles.navImg} src={gun} alt="nav"/>
      <button onClick={(event) => {setPage("default");setpageNumbe(1);}}>Description</button>
      <button onClick={(event) => {setPage("char");setpageNumbe(1);}}>Characters</button>
      <button onClick={(event) => {setPage("loc");setpageNumbe(1);}}>Locations</button>
      <img className={styles.navImg2} src={gun} alt="nav"/>
    </div>
    <div className={styles.dataBody}>
      {page === "default" &&         
        <div>
          <div className={styles.sectionTitle}><p>Description</p></div>
          <Description/>
        </div>}
      {page === "char" && 
        <div>
          
          <Pagination maxPage={maxCharPage}/>
          <div className={styles.sectionTitle}><p>Characters</p></div>
          <CharacterList pageNumber={pageNumber}/>
          <Pagination maxPage={maxCharPage}/>
        </div>
      }
      {page === "loc" &&
        <div>
          <Pagination maxPage={maxLocPage}/>
          
          <div className={styles.sectionTitle}><p>Locations</p></div>
          <LocationList pageNumber={pageNumber}/>
          <Pagination maxPage={maxLocPage}/>
        </div>
      }
    </div>
  </div>;
}

export default App;
