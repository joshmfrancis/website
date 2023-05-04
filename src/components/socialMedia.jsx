import React from 'react';

const SocialMedia = (props) => {
  return (
    <div className="social-media">
      <br></br>
      <div className="social-media-links m-1">
        <i class="bi bi-github mx-3"></i>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/joshmfrancis/"
        >
          Github
        </a>
      </div>
      <div className="social-media-links m-1">
        <i class="bi bi-mailbox2 mx-3"></i>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:thejoshuafrancis@gmail.com"
        >
          Email
        </a>
      </div>
      <div className="social-media-links m-1">
        <i class="bi bi-linkedin mx-3"></i>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/joshua-francis-87a3831a2/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};
export default SocialMedia;
