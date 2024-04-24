import React from 'react'
// import sg from './resources/sg.png'
import './homest.css'

export default function Homepage() {
  return (
    <div style={{backgroundColor:"#15202B"}} id='Home'>
        <br/><br/>
  <h2><b><u>Welcome to Shivansh's Personal Website!</u></b></h2><br></br>
  <div className="container">
    <div className="image">
      {/* <img
        src={sg}
        alt="shivansh gupta pic"
        style={{ height: 550, width: 350 }}
      /> */}
    </div>
    <div className="text"><br/>
      
      <p>
        I'm delighted to have you here. This website is a space where I share my passions, experiences, and insights. Whether you're a first-time visitor or a returning friend, I hope you find something engaging and meaningful during your time here.
         Explore the following sections to get to know me better:</p>
      <ul>
        <li>
          <b>About Me:</b> Discover who I am, my background, and the journey
          that has shaped me.
        </li>
        <li>
          <b>Portfolio:</b> Explore my work and projects. From creative
          endeavors to professional achievements, this section provides a
          glimpse into my skills and accomplishments.
        </li>
        <li>
          <b>Skills:</b> Dive into my skills and experiences. I enjoy sharing my
          passion and interests beyong the sphere of academics
        </li>
        <li>
          <b>Testimonials:</b> Take a look at my achievements and various
          certifications and awards!
        </li>
        <li>
          <b>Resume:</b> View my resume/cv and also get a downloadable pdf
        </li>
        <li>
          <b>Contact:</b> Connect with me! Whether you have questions, want to
          collaborate, or just share your thoughts, I value every interaction.
        </li>
      </ul>
      <p>
        Thank you for visiting, and I hope you enjoy your time exploring my
        personal corner of the internet. Feel free to reach out—I'd love to hear
        from you!
        <br />
        
        <b>
          <i style={{}}>Best,<br/>Shivansh Gupta</i>
        </b>
        <br /><br/>
        
      </p>
    </div>
  </div>
</div>

  )
}
