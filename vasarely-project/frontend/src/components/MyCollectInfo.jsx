import React from 'react'
import Popup2 from 'reactjs-popup';

const Colors = ({ pic }) => {
  if (pic.colors != null) {
    return (<div className='colors-box'>
      {pic.colors.map((c, index) => {
        return (
          <div key={index}>
            <Popup2 trigger={<div className="colors" style={{ backgroundColor: c.color }}> </div>} position="right center">
              <div>{c.color}</div>
            </Popup2>

          </div>
        )
      })}
    </div>)

  }
  else {
    return (<div>
      <p>no data</p>
    </div>)
  }
}

const MyCollectInfo = ({ pic }) => {

  return <div>
    <div className='popupTop'>

      <div>
        <h2>{pic.title}</h2>

        {(pic.people !== null && pic.people !== undefined) &&
          <div className="popupDataBox">
            <h3>Artist:</h3>
            <div>
              {pic.people.map((person, index) => <p key={index}>{person.name}</p>)}
            </div>
          </div>
        }
        {pic.century !== null &&
          <div className="popupDataBox">
            <h3>Century:</h3>
            <p>{pic.century}</p>
          </div>
        }
        {pic.culture !== null &&
          <div className="popupDataBox">
            <h3>Culture:</h3>
            <p>{pic.culture}</p>
          </div>
        }
        {pic.technique !== null &&
          <div className="popupDataBox">
            <h3>Technique:</h3>
            <p>{pic.technique}</p>
          </div>
        }

        {(pic.worktypes !== null && pic.worktypes !== undefined) &&
          <div className="popupDataBox">
            <h3>Worktypes:</h3>
            <div>
              {pic.worktypes.map(type => <p key={type.worktypeid}>{type.worktype}</p>)}
            </div>
          </div>
        }
        {(pic.colors !== null && pic.colors !== undefined) &&
          <div className="popupDataBox">
            <h3>Colors:</h3>
            {<Colors pic={pic} />}
          </div>
        }
      </div>
    </div>

    {pic.description !== null &&
      <div className='des'>
        <h3>Description:</h3>
        <hr></hr>
        <p>{pic.description}</p>
      </div>
    }


  </div>
}

export default MyCollectInfo