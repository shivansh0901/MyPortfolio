import React from 'react'
import cpp from "./resources/cppimg.png"
import java from "./resources/javaimg.png"
import pyton from "./resources/pythonimg.jpeg"
import torch from "./resources/pytorchimg.png"
import tf from "./resources/tensorflowimg.png"
import "./skillsst.css"
export default function Skills() {
  return (
    <div id='Skills' style={{backgroundColor:"#15202B"}}>
  <h1 style={{color: "gold"}}>🎯 Skills 🎯</h1><br/>
  <div style={{ textAlign: "center" }}>
    <table border={5}>
      <tbody>
        <tr>
          <th>Skill</th>
          <th>Relevance</th>
          <th>Proficiency</th>
        </tr>
        <tr>
          <td>
            <img  src={java} style={{ height: 100, width: 100 }} alt='img 1'/>
          </td>
          <td>
            Comes handy in software development as is the most used language.
          </td>
          <td>Proficient</td>
        </tr>
        <tr>
          <td>
            <img  src={cpp} style={{ height: 100, width: 100 }} alt='img 2'/>
          </td>
          <td>
            Relevant in software development and competitive coding.
            <br />
            Generally used due to it being the fastest language.
          </td>
          <td>Proficient</td>
        </tr>
        <tr>
          <td>
            <img  src={pyton} style={{ height: 100, width: 100 }} alt='img 3'/>
          </td>
          <td>
            Recently introduced beginner friendly language which <br /> is used
            for software development, data science and ML tasks.
          </td>
          <td>Proficient</td>
        </tr>
        <tr>
          <td>
            <img  alt='img4' src={tf} style={{ height: 100, width: 100 }} />
          </td>
          <td>Heavily used for machine learning tasks and research.</td>
          <td>Proficient</td>
        </tr>
        <tr>
          <td>
            <img alt='img5' src={torch} style={{ height: 100, width: 100 }} />
          </td>
          <td>Heavily used for machine learning tasks and research.</td>
          <td>Intermediate</td>
        </tr>
        <tr>
          <td><b>Leadership</b></td>
          <td>
            Important to lead teams and ensure fruitful results.
            <br />
            <br />
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td><b>Management</b></td>
          <td>
            Soft skill which allows proper structuring of tasks and
            <br /> their proper execution.
            <br />
            <br />
          </td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
  <br/><br/>
</div>

  )
}
