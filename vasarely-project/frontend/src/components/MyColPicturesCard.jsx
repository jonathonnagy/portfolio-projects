import React from 'react'
import { useState, useEffect } from "react";
import Popup from '../components/Popup';
import 'reactjs-popup/dist/index.css';
import noPicture from '../components/nopic.jpg'
import tagPic from '../components/tag.png'
import http from 'axios';
import './myCollection.css'
import MyCollectInfo from './MyCollectInfo';
import Button from '@mui/material/Button';
import MyCollection from './MyCollection';


const MyColPicturesCard = ({ collection, childToParentUpdate, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  let [collect, setCollect] = useState("info");
  const [tag, setTag] = useState("");

  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const addTags = async (id) => {
    try {
      const response = await http.post('http://localhost:4000/api/tags', { msg: tag, picId: id }, {
        headers: {
          'Authorization': localStorage.getItem('sessionID')
        }
      });
      setTag("");
    }
    catch (error) {
      if (error.response.status === 401) {
        alert('Your session has expired')
        localStorage.removeItem('sessionID')
      }
    }
  }

  const deleteTag = async (picId, word) => {
    try {
      const response = await http.delete(`http://localhost:4000/api/tag?tag=${word}&picId=${picId}`, {
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

  const deleteImage = async (picId) => {
    try {
      const response = await http.delete(`http://localhost:4000/api/todo?picId=${picId}`, {
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

  let pic = JSON.parse(collection.picData);

  return (
    <div>
      <div className='galleryImageBox' onClick={() => { togglePopup(); setCollect("info") }}>
        {(pic.primaryimageurl !== null && pic.primaryimageurl !== undefined) && <input type="image" className="galleryImage" alt={pic.imageid} src={pic.primaryimageurl} />}
        {(pic.primaryimageurl === null) && <input type="image" className="galleryImage" alt={pic.imageid} src={noPicture} />}
        {(pic.primaryimageurl === undefined) && <input type="image" className="galleryImage" alt={pic.imageid} src={noPicture} />}
      </div>

      <div className='popup'>
        {isOpen && <Popup
          content={<>
            <div className="collectCard">
              <div className='collectBase'>
                <div className='collectImg'>
                  {(pic.primaryimageurl !== null && pic.primaryimageurl !== undefined) &&
                    <img className="popupImage" src={pic.primaryimageurl} alt={pic.imageid} />
                  }
                  {(pic.primaryimageurl === null || pic.primaryimageurl === undefined) &&
                    <img className="popupImage" src={noPicture} alt={pic.imageid} />
                  }
                </div>
                <div className='collectRight'>
                  <div className='collectData'>
                    <div className='collectButtons'>
                      <div>
                        <button className="roundButton" id="infoButton" onClick={() => setCollect("info")}></button>
                        <button className="roundButton" id="tagButton" onClick={() => setCollect("tags")}></button>

                      </div>
                      <button id="deleteButton" onClick={() => { deleteImage(collection.picId); childToParentUpdate('updateMyColl'); handleClick()}}></button>

                    </div>
                  </div>
                  <div className='collectMore'>
                    {collect === "info" &&
                      <div>
                        <MyCollectInfo pic={pic} />
                      </div>

                    }
                    {collect === "tags" &&
                      <div className='tagsList'>

                        <div className='tagInput'>
                          <input type="text" placeholder="Tag name..." onChange={e => setTag(e.target.value)} />
                          <button type="button" onClick={() => {
                            if (tag !== "") {
                              addTags(collection.picId);
                              childToParentUpdate('addTag');

                            }
                          }}>+ Add tag</button>

                        </div>
                        <div className='tagBox'>
                          {collection.picTag.map((tag, index) => {
                            return (
                              <div className="tag" key={index}>
                                <p>{tag}</p>
                                <div onClick={() => { deleteTag(collection.picId, tag); childToParentUpdate('deleteTag'); }}>X</div>

                              </div>
                            )
                          })}
                        </div>


                      </div>
                    }
                  </div>
                </div>

              </div>







            </div>


          </>}
          handleClose={togglePopup}
        />}
      </div>
    </div>
  )
}

export default MyColPicturesCard