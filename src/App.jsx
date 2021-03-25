import React from "react";
import "./App.scss";

function App() {
  console.log(window.innerWidth);
  const price = 39;
  const daily_price = 1.99;
  return (
    <div className="main-wrapper">
      <div className="body">
        <div className="article">
          <h3>Join our community</h3>
          <h4>30-day, hassle-free money back guarantee</h4>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>

        <div className="subscribe">
          <div>
            <h4>Monthly Subscription</h4>
            <h2 className="plan-price">
              ${price} <span>per month</span>
            </h2>
            <p>Full access for less than ${daily_price} a day</p>
          </div>
          <button>Sign Up</button>
        </div>

        <div className="information">
          <div>
            <h4>Why Us</h4>

            <p>
              Tutorials by industry experts Peer & expert code review Coding
              exercises Access to our GitHub repos Community forum Flashcard
              decks New videos every week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
