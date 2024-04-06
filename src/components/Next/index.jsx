import React from 'react';
import "./dist/base.94ea9517.css";
import "./dist/styles.2c302241.css";
import "./dist/js.c1161f3d.js";

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
