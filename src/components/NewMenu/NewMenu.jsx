import React, { useEffect, useState } from 'react';
import { gsap, Power2 } from 'gsap';
import { CSSPlugin, CSSRulePlugin } from 'gsap/all';
import { useGSAP } from "@gsap/react";
import './style.css';

// Register plugins with GSAP
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

function NewMenu() {
  const [timeline, setTimeline] = useState(null);
  const gsapTimeline = useGSAP();

  useEffect(() => {
    setTimeline(gsapTimeline);
  }, [gsapTimeline]);

  useEffect(() => {
    if (!timeline) return;

    function initializeAnimation() {
      const path = document.querySelector('path');
      const hamburger = document.getElementById('hamburger');

      if (!path || !hamburger) {
        console.error('Path or hamburger element not found.');
        return;
      }

      const spanBefore = CSSRulePlugin.getRule('#hamburger span:before');

      gsap.set(spanBefore, { background: '#000' });
      gsap.set('.menu', { visibility: 'hidden' });

      revealMenu(path);
    }

    function revealMenu(path) {
      const start = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
      const end = 'M0,1005S175,995,500,995s500,5,500,5V0H0Z';

      timeline.to('#hamburger', 1.25, {
        marginTop: '-5px',
        x: -40,
        y: 40,
        ease: 'power4.inOut',
      });

      timeline.to("#hamburger span", 1, { background: '#e2e2dc', ease: 'power2.inOut' }, '<');
      timeline.to(path, 0.8, { attr: { d: start }, ease: Power2.easeIn }, '<');
      timeline.to(path, 0.8, { attr: { d: end }, ease: Power2.easeOut }, '-=0.5');
      timeline.to('.menu', 1, { visibility: 'visible' }, '-=0.5');

      timeline.to(
        '.btn .btn-outline',
        1.25,
        {
          x: -40,
          y: 40,
          width: '140px',
          height: '140px',
          border: '1px solid #e2e2dc',
          ease: 'power4.inOut',
        },
        '<'
      );

      timeline.to(
        '.menu-item > a',
        1,
        {
          top: 0,
          ease: 'power3.out',
          stagger: {
            amount: 0.5,
          },
        },
        '-=1'
      ).reverse();
    }

    initializeAnimation();

    // Clean up function to run when component unmounts
    return () => {
      if (timeline && typeof timeline.kill === 'function') {
        timeline.kill(); // Kill the GSAP timeline to prevent memory leaks
      }
    };
  }, [timeline]); // Added 'timeline' as a dependency

  return (
    <div>
      <div>
        <div className="overlay">
          <svg viewBox="0 0 1000 1000">
            <path d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
          </svg>
        </div>
        <div>
          {/* menu items */}
        </div>
      </div>

      <div className="menu">
        <div className="primary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="#">
                  <span>I</span>Index
                </a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="#">
                  <span>II</span>Work
                </a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="#">
                  <span>III</span>About
                </a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="secondary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="#">Speaker</a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="#">Blog</a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="#">Contact</a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
            <div className="wrapper">
              <div className="menu-item">
                <a href="#">Credits</a>

                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMenu;
