// import React from 'react'
// import "./contactst.css"
// export default function Contact() {
//   return (
//     <div style={{maxWidth:2000, backgroundImage:"linear-gradient(to right,#FFD3A5,#FD6585)"}} id="Contact">
//         <h1>Reach out to me!</h1><br/><br/><br/>
//         <div id='contact-form'>
//         <form >
//               <ul>
//                 <li className="half">
//                   <input placeholder="Name" type="text" name="name" required />  <input
//                     placeholder="Email"
//                     type="email"
//                     name="email"
//                     required
//                   />
//                 </li>
                
//                 <li className="full">
//                   <input
//                     placeholder="Subject"
//                     type="text"
//                     name="subject"
//                     required
                    
//                   />
//                 </li>
//                 <li className="full">
//                   <textarea
//                     placeholder="Message"
//                     name="message"
//                     required
//                   ></textarea>
//                 </li>
//                 <li>
//                   <input type="submit" className="flat-button" value="SEND" />
//                 </li>
//               </ul>
//             </form>
//             </div>
//   <br />
//   <br />
//   <br />
//   <br />
  
//   <div style={{ textAlign: "center" }} className="contact" id='Contact'>
//     <a href="mailto:shivanshgupta0901@gmail.com">Send an E-mail</a>
//     <br />
//     <a href="https://www.instagram.com/shivansh_gpta" target="_blank">
//       Instagram
//     </a>
//     <br />
//     <a
//       href="https://www.linkedin.com/in/shivansh-gupta-774400217/"
//       target="_blank"
//     >
//       LinkedIn
//     </a>
//   </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
// </div>

//   )
// }

import React from 'react'
import "./contactst.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
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
    <a href="https://www.instagram.com/shivansh_gpta" target="_blank">
      Instagram
    </a>
    <br />
    <a
      href="https://www.linkedin.com/in/shivansh-gupta-774400217/"
      target="_blank"
    >
      LinkedIn
    </a>
  </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>

  )
}

