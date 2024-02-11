import Image from 'next/image'

export default function Home() {
  return (
    <div className="box-border flex relative flex-col shrink-0 w-full min-h-[20px] min-w-[20px]">
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

 
  





