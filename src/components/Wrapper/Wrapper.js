import React from 'react';
import '../../css/Wrapper.css';
import NavBar from '../../components/NavBars/NavBar'
import ProfileCard from '../../components/Cards/Profile'
import Aerlux from '../Cards/Aerlux'
import BookSearch from '../Cards/BookSearch'


function Wrapper() {
  return (
    <div className="wrapper w3-content w3-row ">
    
      <NavBar/>
     <div className="w3-col l8 s12">
      <Aerlux/>
      <BookSearch/>
     </div>
      <ProfileCard/>
    </div>
  );
}

export default Wrapper;
