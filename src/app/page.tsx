import * as React from "react";
import Head from 'next/head';


export default function Home() {
  return (
    <div className="box-border flex relative flex-col shrink-0 w-full min-h-[20px] min-w-[20px]">
      <Head>
        

 
<script
    type="module"
    src="https://agent.d-id.com/v1/index.js"
    data-name="did-agent"
    data-mode="fabio"
    data-client-key="Z29vZ2xlLW9hdXRoMnwxMTA0MTc1NDA1OTYyMTk4NjMxMTI6eDBVbko4SnRQNWNtTzB0SURpWnRs"
    data-agent-id="agt_jF9PSC1p"
    data-monitor="true">
</script>
    
    
    
      </Head>
      <a href="/test" className="button">Enter</a>
      <div className="fixed">
        {/* Desktop Video */}
        <video
          className="hidden md:block box-border object-cover fixed flex-col shrink-0 min-h-[20px] min-w-[20px] w-full h-full"
          autoPlay={false}
          poster="https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F1619028b3eb44bcebf652aa45ad83023"
          muted={false}
          controls={true}
          playsInline={true}
          loop={false}
          src="https://cdn.builder.io/o/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F35892a6997a64b16a6422202b6b979c9%2Fcompressed?apiKey=cfdade1741a141b6a543d6f07cefe0a0&token=35892a6997a64b16a6422202b6b979c9&alt=media&optimized=true"
        />

        {/* Mobile Video */}
        <video
          className="block md:hidden box-border object-cover fixed flex-col shrink-0 min-h-[20px] min-w-[20px] w-full h-full"
          poster='https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F2537612138fc4492a3b2a70480a21173'
          autoPlay={false}
          muted={false}
          controls={true}
          playsInline={true}
          loop={false}
          src="https://cdn.builder.io/o/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F8e0a95ddafc340cab10b589c9272608f%2Fcompressed?apiKey=cfdade1741a141b6a543d6f07cefe0a0&token=8e0a95ddafc340cab10b589c9272608f&alt=media&optimized=true"
        />

        {/* Placeholder */}
        <div className="pt-72 w-full text-xs pointer-events-none" />
      </div>
    </div>
  );
}