import React from 'react'
import resume1 from './resources/SGresume.pdf'

export default function Resume() {
  return (
    <div id='Resume' style={{backgroundColor:"#15202B"}}>
        <h1 style={{color: "gold"}}>Resume</h1><br/>
      <embed
  src={resume1}
  type="application/pdf"
  width="60%"
  height="800px"
  title="Resume"
  style={{marginLeft: 355}}
/>
<br/><br/>

    </div>
  )
}
