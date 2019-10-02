import React from 'react';
import '../../css/Wrapper.css';
import NavBar from '../../components/NavBars/NavBar'
import ProfileCard from '../../components/Cards/Profile'
import ProjectCard from '../Cards/Project'


function Wrapper() {
  return (
    <div className="wrapper w3-content w3-row ">
      <NavBar/>
     <div className="w3-col l8 s12">
      <ProjectCard/>
     </div>
      <ProfileCard/>
    </div>
  );
}

export default Wrapper;
