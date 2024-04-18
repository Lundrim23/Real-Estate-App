import React from 'react';
import './homePage.scss';
import SearchBar from '../../components/searchBar/searchBar';

function HomePage() {
  return (
    <div className="homPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Explore a vast selection of real estate listings to find your dream
            home or perfect investment opportunity. Start your journey with us
            and secure your ideal place today!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Exprerience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1300</h1>
              <h2>Propety Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="bg" />
      </div>
    </div>
  );
}

export default HomePage;
