import React, { useState } from 'react';
import SocialMedia from './socialMedia';

const About = (props) => {
  const [showing, setState] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p2>
          Hey! My name is Joshua Francis. I am a Junior at Louisiana State
          University of Shreveport pursuing a Bachelor's in Software
          Development!
          <br></br>
          <br></br>
        </p2>
        <p2>
          I post all of my coding projects on my Github page and try to explain
          them to the best of my ability! Check out my projects page to see the
          latest web development project that I am working on!
        </p2>
        <br></br>
        <button className="Fancy-button-2" onClick={() => setState(!showing)}>
          <div>
            {showing
              ? 'Hide Social Media Accounts'
              : 'Show Social Media Accounts'}
          </div>
        </button>
        {showing ? <SocialMedia /> : null}
      </header>
    </div>
  );
};

export default About;
