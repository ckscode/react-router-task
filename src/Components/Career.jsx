import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Career = () => {
    const [career,setCareer] = useState()
    const fetchData = async() =>{
        try{
          const response = await axios.get("../../courses.json");
          const jsonData = response.data
          setCareer(jsonData.filter((e)=>e.type === 'career'))
        }catch(error){
          console.error('Error fetching data:', error);
        }
       }
    useEffect(()=>{
          fetchData() 
    },[])
   
    return (
        <>
        <h2 className='text-center mt-3'>Career</h2>
        {career&&career.map((element,index)=>{
         return(
             <div key={element.id} className='col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center p-3'>
                 <div className='card w-100 shadow border-0 rounded-3'>
                 <img src={element.image} className="card-img-top rounded-top-3" alt="image"/>
                     <div className='card-body'>
                     <h5 className='card-title'>{element.job}</h5> 
                     <div className='details text-secondary d-flex align-items-center'>{element.description}</div>
                     <div className='details text-success d-flex align-items-center'>Candidates:&nbsp;<span className='fw-bold'>{element.candidates}</span></div>
                     </div>
                     </div>
             </div>
         )
        })}
          </>
    );
};

export default Career;