import { useEffect } from 'react';
import Head from 'next/head';
import "./dist/base.5f386e0a.css";
import "./dist/styles.485f1646.css";

export default function Home() {
  useEffect(() => {
    // Dynamically load the JavaScript file on the client-side
    const script = document.createElement('script');
    script.src = './dist/js.771ef394.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>HNH</title>
        <meta name="description" content="A recreation of the sticky image effect seen on the websites of MakeReign and Ultranoir using three.js." />
        <meta name="keywords" content="three.js, sticky, animation, webgl, javascript, scroll, drag" />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{
          __html: `
            document.documentElement.className = "js";
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
              );
          `,
        }} />
      </Head>
      <main>
        <div className="frame">
          <div className="frame__title-wrap">
            <h1 className="frame__title">HUMAN|NOTHUMAN</h1>
          </div>
        </div>
        <div className="content" id="app">
          {/* the content */}
        </div>
      </main>
      <div className="cursor">
        <div className="cursor__inner cursor__inner--circle"></div>
        <div className="cursor__inner cursor__inner--dot"></div>
      </div>
    </>
  );
}
