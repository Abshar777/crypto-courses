import React from "react";

const Cta = () => {
  return (
    <div className="w-full p-[10px]">
      <section
        id="cta"
        className="relative bg-pink-500/5 rounded-lg border-pink-500/30 border w-full z-10 py-20"
      >
        <div className="flex flex-col justify-between items-center w-full gap-8">
          <h2 className="text-4xl font-bold text-white">
            Powered by{" "}
            <span className="relative z-10 uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 animate-gradient">
              Delta Trading
            </span>
          </h2>
          <p className="text-white/80">
            Get access to our exclusive community and stay updated with the
            latest news and trends in the crypto world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cta;
