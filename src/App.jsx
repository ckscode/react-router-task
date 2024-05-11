import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Fullstack from './Components/Fullstackdev';
import Datascience from './Components/Datascience';
import Cyber from './Components/Cyber';
import Career from './Components/Career';
import All from './Components/All';
import axios from 'axios';
import PageNotFound from './Components/PageNotFound';


const App = () => {
    const data =[
    
      {
         "id":1,
         "type":"fsd",
         "image":"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "course":"MEAN Stack Development",
         "duration":"130 Hrs",
         "languages":"Tamil,English"
     },
     {
         "id":2,
         "type":"fsd",
         "image":"https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
         "course":"MERN Stack Development",
         "duration":"130 Hrs",
         "languages":"Tamil"
     },
     {
         "id":3,
         "type":"fsd",
         "image":"https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "course":"LAMP Stack Development",
         "duration":"120 Hrs",
         "languages":"English"
     },
     {
         "id":4,
         "type":"fsd",
         "image":"https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "course":"Django Stack Development",
         "duration":"100 Hrs",
         "languages":"Tamil"
     },
     {
         "id":5,
         "type":"fsd",
         "image":"https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "course":"Ruby on Rails(RoR)",
         "duration":"130 Hrs",
         "languages":"English"
     },
     {
         "id":6,
         "type":"fsd",
         "image":"https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "course":"Serveless Stack ",
         "duration":"90 Hrs",
         "languages":"English"
     },
     {
         "id":7,
         "type":"data",
         "image":"https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-124672.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715385600&semt=ais_user",
         "course":"Machine Learning",
         "duration":"140 Hrs",
         "languages":"Tamil"
     },
     {
         "id":8,
         "type":"data",
         "image":"https://img.freepik.com/premium-vector/privacy-protection-software-development-security-isometric-illustration-cartoon-vector_82984-10.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1712188800&semt=ais",
         "course":"Data Mining",
         "duration":"130 Hrs",
         "languages":"Tamil"
     },
     {
         "id":9,
         "type":"data",
         "image":"https://static.vecteezy.com/system/resources/previews/006/970/865/non_2x/technology-network-data-connection-cyber-security-digital-data-global-5g-high-speed-internet-connection-and-big-data-analysis-process-background-concept-photo.jpg",
         "course":"Big Data Analytics",
         "duration":"140 Hrs",
         "languages":"Tamil"
     },
     {
         "id":10,
         "type":"data",
         "image":"https://img.freepik.com/free-vector/natural-language-processing-illustration_23-2149226911.jpg",
         "course":"Natural Language Processing (NLP)",
         "duration":"100 Hrs",
         "languages":"Tamil,English"
     },
     {
         "id":11,
         "type":"data",
         "image":"https://img.freepik.com/free-vector/infographic-dashboard-element-set_23-2148378096.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715040000&semt=ais",
         "course":"Data Visualization",
         "duration":"130 Hrs",
         "languages":"English"
     },
     {
         "id":12,
         "type":"data",
         "image":"https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "course":"Data Engineering",
         "duration":"90 Hrs",
         "languages":"Tamil"
     },
     {
         "id":13,
         "type":"cyber",
         "image":"https://watermark.lovepik.com/photo/40171/9705.jpg_wh1200.jpg",
         "course":"Blockchain",
         "duration":"4 Hrs",
         "languages":"English"
     },
     {
         "id":14,
         "type":"cyber",
         "image":"https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg",
         "course":"Cyber Security & Ethical Hacking for Beginners",
         "duration":"6 Hrs",
         "languages":"English"
     },
     {
         "id":15,
         "type":"cyber",
         "image":"https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg",
         "course":"Cyber Security & Ethical Hacking - Advanced",
         "duration":"7 Hrs",
         "languages":"English"
     } ,
     {
         "id":16,
         "type":"career",
         "image":"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "job":"Fullstack Developer(MERN)",
           "description":"InternShip (6-months)",
           "candidates":5
     } ,
     {
         "id":17,
         "type":"career",
         "image":"https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "job":"Data Analyst",
           "description":"Full-time",
           "candidates":2
     } ,
     {
         "id":18,
         "type":"career",
         "image":"https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg",
         "job":"Cyber Security Analyst",
           "description":"Full-time",
           "candidates":1
     } ,
     {
         "id":19,
         "type":"career",
         "image":"https://img.freepik.com/free-photo/black-male-team-leader-business-meeting-office_1268-21457.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais",
         "job":"Business Development Executive",
           "description":"Full-time",
           "candidates":1
     }     
 ]
    
 
 
  return (
    <div className='app'>
      <Navbar/>
      <div className='content'>
      <div className='row w-100 mx-auto mt-3 py-3'>
    <Routes>
        <Route path="/" element={<All data={data}/>}/>
        <Route path="/all" element={<All data={data}/>}/>
        <Route path="/fsd" element={<Fullstack data={data}/>}/>
        <Route path="/data" element={<Datascience data={data}/>}/>
        <Route path="/cyber" element={<Cyber data={data}/>}/>
        <Route path="/career" element={<Career data={data}/>}/>
        <Route path="#" element={<PageNotFound/>}/>
    </Routes>
    </div>
    </div>
    </div>
  );
};

export default App;