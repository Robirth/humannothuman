import React, { useEffect } from 'react';
import "./dist/base.94ea9517.css";
import "./dist/styles.2c302241.css";
import "./dist/js.c1161f3d.js";

const StickyImageEffect = () => {
  useEffect(() => {
    const cursorElement = document.querySelector('.cursor');
    const cursor = new Cursor(cursorElement);

    function Cursor(el) {
      console.log('Initializing Cursor with element:', el);
      this.DOM.el = el;
      // Rest of the constructor...
    }
  }, []); // Run this effect only once after the component is mounted

  return (
    <html lang="en" className="no-js">
      <head>
       
        <script>
          {`document.documentElement.className = "js";
            var supportsCssVars = function () {
              var e,
                t = document.createElement("style");
              return (
                (t.innerHTML = "root: { --tmp-var: bold; }"),
                document.head.appendChild(t),
                (e = !!(
                  window.CSS &&
                  window.CSS.supports &&
                  window.CSS.supports("font-weight", "var(--tmp-var)")
                )),
                t.parentNode.removeChild(t),
                e
              );
            };
            supportsCssVars() ||
              alert(
                "Please view this demo in a modern browser that supports CSS Variables."
              );`}
        </script>
      </head>
   
        <main>
          <div className="frame">
            <div className="frame__title-wrap">
              <h1 className="frame__title">HUMAN|NOTHUMAN</h1>
            </div>
            <p className="frame__tip">Click &amp; drag</p>
          </div>
          <div className="content" id="app">
            {/* the content */}
          </div>
        </main>
        <div className="cursor">
          <div className="cursor__inner cursor__inner--circle"></div>
          <div className="cursor__inner cursor__inner--dot"></div>
        </div>
       
   
    </html>
  );
}

export default StickyImageEffect;
