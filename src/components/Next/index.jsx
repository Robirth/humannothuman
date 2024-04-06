import React, { useEffect } from 'react';
import "./dist/base.94ea9517.css";
import "./dist/styles.2c302241.css";
import "./dist/js.c1161f3d.js";


const Next = () => {
  useEffect(() => {
    // Check if window object is defined (i.e., if code is running in a browser environment)
    if (typeof window !== 'undefined') {
      const cursorElement = document.querySelector('.cursor');
      const cursor = new Cursor(cursorElement);

      function Cursor(el) {
        console.log('Initializing Cursor with element:', el);
        this.DOM = {}; // Initialize this.DOM as an empty object
        this.DOM.el = el; // Set the el property on this.DOM
        // Rest of the constructor...
      }
    }
  }, []); // Run this effect only once after the component is mounted

  return (
    <React.Fragment>
      <main>
        <div className="frame">
          <div className="frame__title-wrap">
            <h1 className="frame__title">HUMAN|NOTHUMAN</h1>
          </div>
          <p className="frame__tip">Click &amp; drag</p>
        </div>
        <div className="content" id="app">
          <div>
            {/* the content */}
          </div>
        </div>
      </main>
      <div className="cursor">
        <div className="cursor__inner cursor__inner--circle" />
        <div className="cursor__inner cursor__inner--dot" />
      </div>
    </React.Fragment>
  );
}

export default Next;

