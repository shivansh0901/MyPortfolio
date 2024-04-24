import React from 'react'
import "./aboutst.css"
import cert1 from "./resources/coursera1.png"
import cert2 from "./resources/coursera2.png"
import cert3 from "./resources/coursera3.png"
export default function About() {
  return (
    <div style={{backgroundColor:"#15202B"} } id='About'>
  <h1 style={{color: "gold"}}>👉 About Me 👈</h1>
  <p>
    I am a passionate undergraduate student with a strong interest in artificial
    intelligence and machine learning. I am currently pursuing a degree in
    Computer Science at VIT, Vellore.
    <br /> I have immense interest in machine learning, natural language
    processing, computer vision, data science, and more. I am looking for
    research internships and career opportunities
    <br /> in the field of AI/ML to get hands on practical experience in the
    field. I am eager to learn and contribute to the field.
  </p>
  <h1 style={{color: "gold"}}>🎓 Education 🎓</h1>
  <div className="container1">
    <ul>
      <li>
        <b>BTech. in Computer Science and Engineering-VIT, Vellore</b>
        <br />
        2022-2026
        <br />
        CGPA:9.35
      </li>
      <br />
      <li>
        <b>Senior Secondary Education- Modern School, Kota</b>
        <br />
        2017-2022
        <br /> CBSE Class X: 96%
        <br /> CBSE Class XII: 95%
      </li>
    </ul>
  </div>
  <br />
  <h1 style={{color: "gold"}}>📄 Certifications 📄</h1><br></br>
  <p>
    <img src={cert1} alt="" style={{ height: 400, width: "auto" }} />{" "}
    <img src={cert2} alt="" style={{ height: 400, width: "auto" }} />{" "}
    <img src={cert3} alt="" style={{ height: 400, width: "auto" }} />
  </p>
  <h1 style={{color: "gold"}}>💼 Professional Experience 💼</h1>
  <div className="timeline">
    <div className="containerC left">
      <div className="content">
        <h2>2023</h2>
        <h3>AI Intern @ Personifwy</h3>
      </div>
    </div><br></br><br></br>
    <div className="containerC right">
      <div className="content">
        <h2>2020</h2>
        <h3>Co-founder @ One Organisation</h3>
      </div>
    </div>
  </div>
  <br/><br/>
  
  {/* <h2>
    <a
      href="https://www.linkedin.com/in/shivansh-gupta-774400217/"
      target="_blank"
    >
      LinkedIn Profile
    </a>
  </h2> */}
</div>


  )
}
