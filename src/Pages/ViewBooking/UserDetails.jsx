import React from 'react'

export const UserDetails = () => {
  return (
    <div style={{border:'1px solid #a0a096',boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",height:"400px",padding:'5%'}}>
    <label>Username</label>
    <h3>Project</h3>
    <div style={{marginTop:"5%"}}>
        <p>30 min</p>
    </div>
    <div>
        <p>Web conference details provided upon confirmation.</p>
    </div>
    <div style={{display:'flex',marginTop:'50%',justifyContent:"space-between",alignItems:"center"}}>
       <div>
        <p style={{color:'blue'}}>Cookie settings</p>
       </div>
       <div>
        <button style={{border:"1px solid #a0a096",padding:"8px",borderRadius:'5px'}}>Troubleshoot</button>
       </div>
    </div>
</div>
  )
}
