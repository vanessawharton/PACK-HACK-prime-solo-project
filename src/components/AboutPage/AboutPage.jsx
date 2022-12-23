import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function AboutPage() {
  return (
    <div className="container">
      <h3>Technologies Used:</h3>
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>React</li>
          <li>PostgreSQL</li>
          <li>Heroku</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Figma</li>
          <li>Postico</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Nodemon</li>
          <li>Passport JS</li>
          <li>Redux-saga</li>
          <li>Material-UI</li>
          <li>Day.js</li>
          <li>Sweetalert</li>
        </ul>
      </div>
  );
}

export default AboutPage;
