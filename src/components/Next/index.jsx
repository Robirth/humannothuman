"use client";
import React from 'react';
import "./base.jsx";
import "./dist/base.98fd6c19.css";
import "./dist/styles.b61e60ae.css";
import "./dist/js.fcf4b9da.js";

const Next = () => {
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
