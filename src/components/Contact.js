import React from 'react'
import "./contactst.css"
export default function Contact() {
  return (
    <div style={{maxWidth:2000, backgroundColor:"#15202B"}}>
        <h1 style={{color: "gold"}}>📩 Reach out! 📩</h1><br/><br/><br/>
  <div className='form-container'>
  <>
  <>
  <iframe
    // width={500}
    // height={425}
    title='map'
    src="https://www.openstreetmap.org/export/embed.html?bbox=79.14859771728517%2C12.960313896076702%2C79.1724157333374%2C12.979007674139009&layer=mapnik&marker=12.969660960696045%2C79.16048526763916"
    style={{ border: "1px solid black" }}
  />

  <br />
  
</>

  <br />
  
</>

  <form action="">
    
      {/* <legend>Reach out to me!</legend> */}
      
      <input type="text" placeholder='Name' className='sub' required />
      <br/><br/>
      <input type="email" placeholder='Email ID' className='sub' required/>
      
      <br />
      <br />
      <input type="text" placeholder='Subject' className='sub'required/>
      <br />
      <br />
      <textarea placeholder='Message' required></textarea>
      {/* <input type="text" style={{ height: 100, width: 400 }} /> */}
      <br/><br/>
      <input type="submit" className='submit' />
    
  </form>
  
  </div>
  <br />
  <br />
  <br />
  <br />
  
  
  <div style={{ textAlign: "center" }} className="contact" id='Contact'>
    <a href="mailto:shivanshgupta0901@gmail.com">Send an E-mail</a>
    <br />
    <a href="https://www.instagram.com/shivansh_gpta" target="_blank"  rel="noreferrer">
      Instagram
    </a>
    <br />
    <a
      href="https://www.linkedin.com/in/shivansh-gupta-774400217/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>
  </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>

  )
}

