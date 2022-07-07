import React from 'react'
import '../../App.css';
import http from 'axios';
import { useState, useEffect } from "react";

import { Pagination } from '@mui/material';
import PicturesCard from '../PicturesCard';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';



const Gallery = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [totalPages, setTotalPages] = useState(1);
  let [pageData, setPageData] = useState([]);


  let [cultures, setCultures] = useState([]);
  let [worktypes, setWorktypes] = useState([]);
  let [classifications, setClassifications] = useState([]);
  let [periods, setPeriods] = useState([]);

  let [searchCulture, setSearchCulture] = useState("");
  let [searchCentury, setSearchCentury] = useState("");
  let [searchWorktype, setSearchWorktype] = useState("");
  let [searchPeriod, setSearchPeriod] = useState("");
  let [searchClassification, setSearchClassification] = useState("");
  const [myCollection, setMyCollection] = useState([])

  const createMyCollection = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await http.post('http://localhost:4000/api/todo', {
        msg: myCollection,
        picId: Math.random()
      }
        , {
          headers: {
            'Authorization': localStorage.getItem('sessionID')
          }
        });
    }
    catch (error) {
      if (error.response.status === 401) {
        alert('Your session has expired')
        localStorage.removeItem('sessionID')
      }
    }
  }

  const Dropdownlist = ({ list, label, value }) => {
    const handleChange = (event) => {
      if (label === "Culture") setSearchCulture(event.target.value);
      if (label === "Worktype") setSearchWorktype(event.target.value);
      if (label === "Classification") setSearchClassification(event.target.value);
      if (label === "Period") setSearchPeriod(event.target.value);
    };

    const divStyle = {
      color: 'navy'

    };

    return (
      <Box sx={{ minWidth: 120, maxWidth: 300 }}>
        <FormControl fullWidth>

          <InputLabel style={divStyle} id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={label}
            onChange={handleChange}
          >
            {list.map((data) => <MenuItem key={data.id} value={data.id}>{data.name}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
    )
  }

  const loadSearch = async (category) => {
    try {
      const testres = await http.get(`https://api.harvardartmuseums.org/${category}?apikey=95ab7a44-f4f7-44df-97b4-fcaad30a3961`)
      const res = await http.get(`https://api.harvardartmuseums.org/${category}?size=${testres.data.info.totalrecords}&sort=name&apikey=95ab7a44-f4f7-44df-97b4-fcaad30a3961`)
      const newArray = [];

      newArray.push({ "id": "", "name": "<<ALL>>" });
      res.data.records.map(data => {
        let newSearch = {
          "id": data.id,
          "name": data.name
        }
        newArray.push(newSearch);
      });

      if (category === "culture") setCultures(newArray);
      if (category === "worktype") setWorktypes(newArray);
      if (category === "classification") setClassifications(newArray);
      if (category === "period") setPeriods(newArray);
    }
    catch (error) {
      error.alert("No data")
    }
  }

  const load = async () => {
    try {
      const res = await http.get(`https://api.harvardartmuseums.org/object?size=24&sortorder=desc&sort=primaryimageurl&culture=${searchCulture}&century=${searchCentury}&worktype=${searchWorktype}&period=${searchPeriod}&classification=${searchClassification}&apikey=95ab7a44-f4f7-44df-97b4-fcaad30a3961&page=${pageNumber}`)
      setTotalPages(res.data.info.pages)
      setPageData(res.data.records)
    }
    catch (error) {
      error.alert("No data")
    }
  }

  useEffect(() => {
    load();
  }, [pageNumber])

  useEffect(() => {
    loadSearch("culture");
    loadSearch("worktype");
    loadSearch("classification");
    loadSearch("period");

  }, [])


  return (
    <div>
      <div className='searchBox'>
        <div className='listBox'><Dropdownlist list={cultures} label={"Culture"} value={searchCulture} /></div>
        <div className='listBox'><Dropdownlist list={worktypes} label={"Worktype"} value={searchWorktype} /></div>
        <div className='listBox'><Dropdownlist list={classifications} label={"Classification"} value={searchClassification} /></div>
        <div className='listBox'><Dropdownlist list={periods} label={"Period"} value={searchPeriod} /></div>

        <button className="searchButton" onClick={(e) => { setPageNumber(1); load() }} >Search</button>
      </div>
      <div className='galleryBox'>
        <div className='pagination'>
          <Pagination variant="outlined" size="large" count={totalPages} boundaryCount={1} siblingCount={3} onChange={(event, value) => setPageNumber(value)} />
        </div>
        <div id="pics">{pageData.map(pic => <PicturesCard key={pic.id} pic={pic} createMyCollection={createMyCollection} setMyCollection={data => setMyCollection(data)} />)}</div>
        <div className='pagination'>
          <Pagination variant="outlined" size="large" count={totalPages} boundaryCount={1} siblingCount={3} onChange={(event, value) => setPageNumber(value)} />
        </div>
      </div>
    </div>
  )

}

export default Gallery
