import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Datascience = () => {
    const [dataSci,setDataSci] = useState()
    const fetchData = async() =>{
        try{
          const response = await axios.get("../../courses.json");
          const jsonData = response.data
          setDataSci(jsonData.filter((e)=>e.type === 'data'))
        }catch(error){
          console.error('Error fetching data:', error);
        }
       }
    useEffect(()=>{
          fetchData() 
    },[])
    return (
     <>
       <h2 className='text-center mt-3'>Data Science</h2>
        {dataSci&&dataSci.map((element,index)=>{
         return(
             <div key={element.id} className='col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center p-3'>
                 <div className='card w-100 shadow border-0 rounded-3'>
                 <img src={element.image} className="card-img-top rounded-top-3" alt="image"/>
                     <div className='card-body'>
                     <h5 className='card-title'>{element.course}</h5> 
                     <div className='details text-secondary d-flex align-items-center'><i className="fa-regular fa-clock"></i>&nbsp; <p className='my-0'>{element.duration}</p>&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-globe"></i>&nbsp;<p className='my-0'>{element.languages}</p> </div>
                     </div>
                     </div>
             </div>
         )
        })}
          </>
    );
};

export default Datascience;