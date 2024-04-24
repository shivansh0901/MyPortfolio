import React from 'react'
import "./portfoliost.css"
import iris from "./resources/iris.png"
import pet from "./resources/cognipet.png"
import imdb from "./resources/imdb.png"
export default function Portfolio() {
  return (
    <div id='Portfolio' style={{backgroundColor:"#15202B"}}>
  <h1 style={{color: "gold"}}>🛠️ Projects 🛠️</h1>
  <ol>
    <li>
      <b>
        <u>
          Loss Analysis and Comparative Evaluation of Classification Models on
          the Iris Dataset 
        </u>
      </b>
      <br />
      <a href='https://github.com/shivansh0901/classification-models-on-Iris-dataset' target='_blank'>🔗 Github Link</a><br/>
      
      In my project, I conducted a comprehensive analysis titled "Loss Analysis
      and Comparative Evaluation of Classification Models on the Iris Dataset." I explored various classification models applied to the familiar Iris dataset, focusing on different loss functions. The goal was to understand
      and compare model performance in accurately categorizing Iris flowers into different species. I assessed metrics like accuracy, precision, recall, and F1-score to provide insights into the strengths and limitations of each
      model. This project contributes valuable findings to inform decision-making for future classification tasks using the Iris dataset.
      <br /><br/>
      <img src={iris} alt="iris"
      style={{ height: 500, width: "auto" }} />
      <br />
      
      <br />
    </li><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <li>
      <b>
        <u>
          CogniPet: An Advanced Pet Face Classification System powered by
          ResNet-50
        </u>
      </b>
      <br /><a href='https://github.com/shivansh0901/pet-face-classification-using-ResNet50' target='_blank'>🔗 Github Link</a>
      <br />I developed "CogniPet: An Advanced Pet Face Classification System
      powered by ResNet-50." This project involves leveraging the ResNet-50
      architecture to create an advanced system for classifying pet faces. The focus is on
      achieving accurate and efficient categorization of different pet breeds
      through the
      <br />
      utilization of deep learning techniques. The ResNet-50 model serves as a
      robust backbone, enhancing the system's ability to recognize and
      distinguish various
      <br />
      features in pet faces. CogniPet aims to provide a reliable and
      sophisticated solution for pet face classification, offering practical
      applications in pet-related
      <br />
      industries and services. <br />
      
      <img
        src={pet}
        alt="cognipet"
        style={{ height: 450, width: "auto" }}
      />
      <br />
      <br />
      
      
    </li><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <li>
      <b>
        <u>
          Quantitative Analysis of Sentiments in IMDb Reviews: A Text
          Classification Approach
        </u>
      </b>
      <br />
      <a href='https://github.com/shivansh0901/text-classification-imdb-reviews' target='_blank'>🔗 Github Link</a>
      <br />
      I conducted a project titled "Quantitative Analysis of Sentiments in IMDb
      Reviews: A Text Classification Approach." The study involves applying text
      classification
      <br />
      techniques to analyze sentiments expressed in IMDb reviews quantitatively.
      Utilizing a systematic approach, I aimed to categorize reviews into
      positive, negative, or
      <br />
      neutral sentiments, providing a deeper understanding of audience opinions.
      The project utilizes various machine learning algorithms to achieve
      accurate sentiment
      <br />
      classification, contributing valuable insights into the overall sentiment
      landscape within IMDb reviews. This research has implications for
      understanding audience
      <br />
      perceptions and preferences in the realm of movie reviews on the IMDb
      platform. <br />
      <br />
      <img src={imdb} alt="imdb img" style={{ height: 450, width: "auto" }} />
      <br />
      <br />
    </li>
  </ol><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>

  )
}
