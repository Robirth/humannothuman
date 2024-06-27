import Image from 'next/image'
import * as React from "react";
import Menu from '../components/Menu/Menu';




export default function Home() {
  return (


    <div className="box-border flex relative flex-col shrink-0 w-full min-h-[20px] min-w-[20px]">

<a href="https://www.example.com"> <button className="c-btn">Skip</button></a>

      <a href="/test"> <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F7b63df447f6d40519a6901550afe4a6d?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F7b63df447f6d40519a6901550afe4a6d?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F7b63df447f6d40519a6901550afe4a6d?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F7b63df447f6d40519a6901550afe4a6d?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F7b63df447f6d40519a6901550afe4a6d?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F7b63df447f6d40519a6901550afe4a6d?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F7b63df447f6d40519a6901550afe4a6d?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F7b63df447f6d40519a6901550afe4a6d"
        className="box-border object-cover overflow-hidden absolute shrink-0 w-full cursor-pointer pointer-events-auto aspect-[4.37] min-h-[20px] min-w-[20px] mt-[500px] z-[55]"
      /></a>
      <div className="fixed">
        {/* Desktop Video */}
        <video
          className="hidden md:block box-border object-cover fixed flex-col shrink-0 min-h-[20px] min-w-[20px] w-full h-full"
          autoPlay={false}
          muted={false}
          controls={true}
          playsInline={true}
          loop={false}
          src="https://cdn.builder.io/o/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F35892a6997a64b16a6422202b6b979c9%2Fcompressed?apiKey=cfdade1741a141b6a543d6f07cefe0a0&token=35892a6997a64b16a6422202b6b979c9&alt=media&optimized=true"
        />

        {/* Mobile Video */}
        <video
          className="block md:hidden box-border object-cover fixed flex-col shrink-0 min-h-[20px] min-w-[20px] w-full h-full"
          poster='https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F1b9c60d702b741c89d3562f4b3e5dafa'
          autoPlay={false}
          muted={false}
          controls={true}
          playsInline={true}
          loop={false}
          src="https://cdn.builder.io/o/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F7be7e21fad2d44408c8e7594e1582dfe%2Fcompressed?apiKey=cfdade1741a141b6a543d6f07cefe0a0&token=7be7e21fad2d44408c8e7594e1582dfe&alt=media&optimized=true"
        />

        {/* Placeholder */}
        <div className="pt-72 w-full text-xs pointer-events-none" />
      </div>
    </div>
  );
}

 
  