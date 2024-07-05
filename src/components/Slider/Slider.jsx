import React from "react";
import "/img/app.js";
import "/img/style.css";


const Slider = () => {
  return (
    <section className="carousel">
      <div className="list">
        <div className="item">
          <figure>
            <img src="img/3.png" alt="Item 3" />
          </figure>
          <div className="content">
            <p className="category">Work</p>
            <h2>Concentric</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              facere ipsa blanditiis quidem dignissimos enim quam corrupti
              praesentium ipsam assumenda?
            </p>
            <div className="more">
              <button>
                <i className="fa-solid fa-play"></i> See More
              </button>
            </div>
          </div>
        </div>
        <div className="item">
          <figure>
            <img src="img/2.png" alt="Item 2" />
          </figure>
          <div className="content">
            <p className="category">Work</p>
            <h2>New York Times</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              facere ipsa blanditiis quidem dignissimos enim quam corrupti
              praesentium ipsam assumenda?
            </p>
            <div className="more">
              <button>
                <i className="fa-solid fa-play"></i> See More
              </button>
            </div>
          </div>
        </div>
        <div className="item">
          <figure>
            <img src="img/1.png" alt="Item 1" />
          </figure>
          <div className="content">
            <p className="category">Work</p>
            <h2>Victoria's Secret</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              facere ipsa blanditiis quidem dignissimos enim quam corrupti
              praesentium ipsam assumenda?
            </p>
            <div className="more">
              <button>
                <i className="fa-solid fa-play"></i> See More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="arrows">
        <button id="prev">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button id="next">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="indicators">
        <div className="number">02</div>
        <ul>
          <li className="active"></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Slider;
