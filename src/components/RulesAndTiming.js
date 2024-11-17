import React from 'react';
import './RulesAndTiming.css';

function RulesAndTiming() {
  const flipBoxes = [
    { title: "Custom Domains", description: "A short sentence describing this callout.", image: "https://s25.postimg.cc/frbd9towf/cta-2.png" },
    { title: "Never Sleeps", description: "A short sentence describing this callout.", image: "https://s25.postimg.cc/hj4c4qnov/cta-3.png" },
    { title: "Dedicated", description: "A short sentence describing this callout.", image: "https://s25.postimg.cc/l2q9ujy4f/cta-4.png" }
  ];

  return (
    <section className="library-info">
      <h2 className="rules-header text-center">Library Rules and Hours</h2>
      <div className="box-container">
        {flipBoxes.map((box, index) => (
          <div className="box-item" key={index}>
            <div className="flip-box">
              <div className="flip-box-front text-center" style={{ backgroundImage: `url(${box.image})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">{box.title}</h3>
                  <p>{box.description}</p>
                  <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img" />
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage: `url(${box.image})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">{box.title}</h3>
                  <p>{box.description}</p>
                  <button className="flip-box-button">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RulesAndTiming;
