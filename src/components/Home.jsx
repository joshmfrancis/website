import React from 'react';
import capybara from '../capybara.svg';

const Home = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={capybara} className="Capybara" alt="Capybara" />
        <br></br>
        <p1>Welcome to my website!</p1>
        <br></br>
        <p1>Have a look around!</p1>
        <br></br>

        <a
          className="App-link"
          href="https://github.com/joshmfrancis?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Other coding projects
        </a>
      </header>
    </div>
  );
};

export default Home;
