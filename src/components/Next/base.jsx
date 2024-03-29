import React, { useEffect, useState } from 'react';


  <><meta charSet="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Sticky Image Effect | Codrops</title><meta
    name="description"
    content="A recreation of the sticky image effect seen on the websites of MakeReign and Ultranoir using three.js." /><meta
        name="keywords"
        content="three.js, sticky, animation, webgl, javascript, scroll, drag" /><meta name="author" content="Codrops" /><link rel="shortcut icon" href="favicon.ico" /><link rel="stylesheet" href="https://use.typekit.net/ncw8xrb.css" /><link rel="stylesheet" type="text/css" href="css/base.css" /><link rel="stylesheet" type="text/css" href="css/styles.css" /><main>
        <div className="frame">
            <div className="frame__title-wrap">
                <h1 className="frame__title">HUMAN|NOTHUMAN</h1>
            </div>
            <p className="frame__tip">Click &amp; drag</p>
        </div>
        <div className="content" id="app">
            {/* the content */}
        </div>
    </main><div className="cursor">
        <div className="cursor__inner cursor__inner--circle" />
        <div className="cursor__inner cursor__inner--dot" />
    </div></>
import React, { useEffect, useState } from 'react';

export default function App() {

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Sticky Image Effect | Codrops</title>
            <meta
                name="description"
                content="A recreation of the sticky image effect seen on the websites of MakeReign and Ultranoir using three.js."
            />
            <meta
                name="keywords"
                content="three.js, sticky, animation, webgl, javascript, scroll, drag"
            />
            <meta name="author" content="Codrops" />
            <link rel="shortcut icon" href="favicon.ico" />
            <link rel="stylesheet" href="https://use.typekit.net/ncw8xrb.css" />
            <link rel="stylesheet" type="text/css" href="css/base.css" />
            <link rel="stylesheet" type="text/css" href="css/styles.css" />
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
        </>
  )

}

