"use client";
import React from 'react';
import "./dist/base.5f386e0a.css";
import "./dist/styles.a5aeaf67.css";
import "./dist/js.1837f6e0.js";

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
