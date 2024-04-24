import React from 'react'
import bhai from "./resources/stevebhai.jpeg"
import "./testimonialsst.css"

export default function Testimonials() {
  return (
    <>
    <div id='Testimonials' style={{maxWidth:2000, backgroundColor:"#15202B"}}>
  <h1 style={{color: "gold"}}>🏆 Testimonials & Achievements🏆 </h1>
  <div className="content1">
  <ul style={{ fontStyle: "oblique", fontSize: "larger" }}>
    <li><b>National Talent Search Examination</b> (NTSE) Scholar</li>
    <li>
      <b>Merit award</b> for outstanding academic performance by <b>CBSE</b> in class
      X
    </li>
    <li><b>Merit Award</b> by <u>Royal Australian Chemistry Institute</u></li>
    <li><b>KVPY</b> Stage 1 cleared</li>
    <li>
      <b>Merit award</b> for outstanding academic performance by <b>CBSE</b> in class
      XII
    </li>
    <li><b>IPhO</b> and <b>IMO</b> national level qualifier</li>
    <li>
      In works of publishing a research paper based on{" "}
      <b>Deep Learning techniques for medical object detection</b>
    </li>
  </ul>
  </div>
  <br />
  <div className="containerS">
    <img
      src={bhai}
      alt="steve bhai"
      style={{ width: "98%", height: 400, marginLeft:15 }}
    />
    
  </div>
  <br/><br/><br/><br/>
</div>
</>


  );
}
