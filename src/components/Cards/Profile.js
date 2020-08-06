import React from 'react';
import '../../css/ProfileCard.css';
import avatar from '../../images/profile-img.jpg'
function ProfileCard() {
  return (
  <div className="w3-col sm12 md3 l4">
    <div className="w3-card w3-margin w3-margin-top">
      <img src={avatar} alt="Radu Prodan" className="ProfileImg"/>
        <div className="w3-container w3-white">
        <h4><b>Radu Prodan</b></h4>
          <p>Follow me on <a href="https://www.linkedin.com/in/prodanradu/ " target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://github.com/radu200"target="_blank" rel="noopener noreferrer" >GitHub </a></p>
        </div>
    </div><hr/> 
  </div>

  );
}

export default ProfileCard;
