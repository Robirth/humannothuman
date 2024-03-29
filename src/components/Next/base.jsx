import React, { useEffect, useState } from 'react';

import './dist/base.94ea9517.css';
import './dist/styles.2c302241.css';


export default function App() {

    return (

        <div>
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
                <div className="cursor__inner cursor__inner--circle" />
                <div className="cursor__inner cursor__inner--dot" />
            </div>
        </div>
    )

}


