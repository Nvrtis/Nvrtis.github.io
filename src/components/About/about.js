import React from 'react'
import "./style.css"
import img from "./img.jpg"
import Download from "../download/download"

const About = ()=> (
  <>
    <div className="containerabout">
    <h2 className="text-center">Introduction</h2>
<div className="about">
<img src={img} alt="profile pic" className="img-fluid" id="profilePic"/>
        <p>
        Recently graduate from Northwestern University, Full-Stack Web Developer and Salesforce Certified Administrator. I am highly motivated to start working as a web developer. </p>

        <p>My studies in Northwestern has given me a solid foundation for my coding skills. </p>

        <p>What I have learned is Front-end: HTML, CSS, JavaScript and React.js. I also have knowledge over packages such as JQuery, Handlebars, many API’s and Framework such as Bootstrap. Responsive design that looks as good on a mobile screen as a desktop PC has been a focus throught the bootcamp.</p>

        <p>Back-end I have learned Node.js, and created databases with both MongoDB and MySQL. I have also worked with several different npm packages on server-side and client-side.</p>

        <p>I am a Salesforce Certified Administrator working on my Salesforce App Builder and Web Developer I Certificate.</p>

        <p>Eager to learn, easy going by nature and confident with working with colleagues and managers. </p>
        <p>Currently looking for a suitable graduate web developer position with a progressive employer. Previous background includes medicine, after a career change into Software Development and Salesforce.</p>

        <Download/>
</div>

<div className="skills about">
  <h3>FRONT-END</h3>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React.js</li>
    <li>JQuery</li>
    <li>Bootstrap</li>
  </ul>

  <h3>BACK-END</h3>
  <ul>
    <li>Express.js</li>
    <li>MongoDB</li>
    <li>Node.js</li>
    <li>MySQL.js</li>

  </ul>
</div>
</div>
</>
)

export default About
