import React, { useEffect, useRef } from "react";
import "./style.css";

const Slider = () => {
  const carouselRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;
    const items = carousel.querySelectorAll(".list .item");
    const indicator = carousel.querySelector(".indicators");
    const dots = indicator.querySelectorAll(".indicators ul li");

    let active = 0;
    const firstPosition = 0;
    const lastPosition = items.length - 1;
    let autoPlay;

    const startAutoPlay = () => {
      clearInterval(autoPlay);
      autoPlay = setInterval(() => {
        nextBtn.click();
      }, 5000);
    };
    startAutoPlay();

    const setSlider = () => {
      const itemActiveOld = carousel.querySelector(".list .item.active");
      if (itemActiveOld) itemActiveOld.classList.remove("active");
      items[active].classList.add("active");

      const dotActiveOld = indicator.querySelector(".indicators ul li.active");
      if (dotActiveOld) dotActiveOld.classList.remove("active");
      dots[active].classList.add("active");

      indicator.querySelector(".number").innerText = "0" + (active + 1);
      startAutoPlay();
    };
    setSlider();

    nextBtn.onclick = () => {
      active = active + 1 > lastPosition ? 0 : active + 1;
      carousel.style.setProperty("--calculation", 1);
      setSlider();
    };

    prevBtn.onclick = () => {
      active = active - 1 < firstPosition ? lastPosition : active - 1;
      carousel.style.setProperty("--calculation", -1);
      setSlider();
      clearInterval(autoPlay);
      autoPlay = setInterval(() => {
        nextBtn.click();
      }, 5000);
    };

    dots.forEach((item, position) => {
      item.onclick = () => {
        active = position;
        setSlider();
      };
    });

    return () => clearInterval(autoPlay); // Cleanup interval on unmount
  }, []);

  return (
    <section className="carousel" ref={carouselRef}>
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
        <button id="prev" ref={prevBtnRef}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button id="next" ref={nextBtnRef}>
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
