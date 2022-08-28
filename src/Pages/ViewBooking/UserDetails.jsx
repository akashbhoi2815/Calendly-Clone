import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
  const currentUser = useSelector((store)=>store.authReducer.currentUser)

  const events =useSelector((store)=>store.appReducer.events)
  
   const { id } = useParams()

   const [data, setGetdata] = useState({})
   console.log('id: ', data);

  useEffect(() => {
    if(events){
      var data = events.find(ele => ele.id === +id);
      setGetdata(data)
    }
    
  }, [])
  
  

   
    







  return (
    <div style={{border:'1px solid #a0a096',boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",height:"400px",padding:'5%'}}>
    <label>{currentUser===null ? "":currentUser.displayName}</label>
    <br />
    <br />
    <h2 style={{fontWeight:"bold"}}>{data.name}</h2>
    <div style={{marginTop:"5%"}}>
        <p>{data.duration}</p>
    </div>
    <div>
        <p>Web conference details provided upon confirmation.</p>
        <br />
        <p>{data.description}</p>
    </div>
    <div style={{display:'flex',marginTop:'35%',justifyContent:"space-between",alignItems:"center"}}>
       <div>
        <p style={{color:'blue'}}>Cookie settings</p>
       </div>
       <div>
        <button style={{border:"1px solid #a0a096",padding:"8px",borderRadius:'5px'}}>Troubleshoot</button>
       </div>
    </div>
    <br />
</div>
  )
}
