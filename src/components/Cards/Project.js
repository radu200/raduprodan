import React from 'react';
import '../../css/PostCard.css';
import {ProjectsData} from '../../service/ProjectsData'
 

function Aerlux() {
  return ProjectsData.map((data,i) =>{
    return(
        <div  key={i} >
          <div className="w3-card-4 w3-margin w3-white">
            <img src={data.image} alt={data.title}   className="PostImg"/>
            <div className="w3-container">
              <h3><b>{data.title}</b></h3>
             </div>      
            <div className="w3-container">
              <p>{data.description}</p>
                {data.tech.map((tech,i) => {
                  return(
                    <ul key={i} className="w3-ul w3-border tech" >
                      <li>{tech}</li>
                    </ul>
                  )})}
                <div className="w3-row">
                {data.demoLink ? 
                <div className="w3-col m2 s6">
                  <p><button className="w3-button w3-padding-large  w3-white w3-border "><b> <a href={data.demoLink} target="_blank" rel="noopener noreferrer">DEMO »</a></b></button></p>
                </div> :null }
                {data.sourceCodeLink ? 
                <div className="w3-col m2 s6">
                   <p><button className="w3-button w3-padding-large  w3-white w3-border   "><b> <a href={data.sourceCodeLink} target="_bank" rel="noopener noreferrer">Source Code »</a></b></button></p>
                </div> : null }
              
              </div>
            </div>
          </div>
        </div>
    )
  })
}

export default Aerlux;
