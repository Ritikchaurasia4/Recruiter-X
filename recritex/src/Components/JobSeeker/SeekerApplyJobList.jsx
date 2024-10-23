import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function SeekerApplyJobList(){
    const [dataId,setData]=useState()
    const [jobData,setJobData]=useState([])
    useEffect(()=>{
        const temData=JSON.parse(localStorage.getItem("data"));
        setData(temData)
            getData()
         
    },[]) 

 
    const getData=async()=>{
       
     const response= await axios.get("http://localhost:9000/api/seeker-joblist",{
            headers:{
                "Content-Type":"application/json"
            }
          })
        if(response.data.code==200){
            setJobData(response.data.data)
        }  

    }
const handleApply=async(element)=>{
     const companyId=element.companyId;
     const jobId=element._id;
     const userId=dataId._id;
     const payload={
        companyId:companyId,
        userId:userId,
        jobId:jobId
     }
   const response=await axios.post("http://localhost:9000/api/seeker-apply",payload,{
            headers:{
            "Content-Type":"application/json"   
            }
        })  
        if(response.data.code==200){
            alert("Job Applied Successfully")
        }
        else if(response.data.code==301){
            alert("You have already applied for this role");
        }

}

    return (<>
        <div className="container my-3">
                
                {jobData.map((el) => {
                    // console.log(el,"###########################################")
                    return (
                        <div className="card p-3 mb-3 postedjob_card">
                        <div className="row d-flex justify-content-center align-items-center">
                            {/* Logo Column */}
                            <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <img src={`http://localhost:9000/upload/${el.logo}`} alt="Company Logo" className="img-fluid bg-dark" style={{ maxHeight: '100px' }} />
                            </div>

                            {/* Company Name, Job Title, and Job Type Column */}
                            <div className="col-md-3 d-flex justify-content-start flex-column my-3">
                                <h5 className='postedjob_h'> {el.name}</h5>
                                <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.jobTitle}</span></div>
                                <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.jobType}</span></div>
                            </div>

                            {/* Job Category, Location, and Salary Column */}
                            <div className="col-md-3">
                                <div className='postedjob_p2 mb-2'>Category: <span className='postedjob_p1'> {el.category}</span></div>
                                <div className='postedjob_p2 mb-2'>Location: <span className='postedjob_p1'> {el.jobLocation}</span></div>
                                <div className='postedjob_p2 mb-2'>Salary: <span className='postedjob_p1'> {el.salary}</span></div>
                            </div>

                            {/* Apply Date and Vacancies Column */}
                            <div className="col-md-3">
                                <div className='postedjob_p2 mb-2'>Vacancies: <span className='postedjob_p1'> {el.vacancies}</span></div>
                                <div className='postedjob_p2 mb-2'>Apply By: <span className='postedjob_p1'> {el.applyDate}</span></div>
                                 <input className='form_button mt-3' onClick={()=>handleApply(el)} type='submit' value='APPLY NOW' style={{width:'150px', fontSize:"0.8em"}}/> 
                            </div>
                        </div>
                        </div>
                    )
                })}
            
        </div>
     </>)
}

export default SeekerApplyJobList; 