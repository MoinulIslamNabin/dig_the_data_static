import logo from "../../assets/logodtd.webp";
import legacy from "../../assets/legacy.jpg";

const Legacy = () => {
  return (
    <div
      className="hero pt-20 min-h-screen relative overflow-hidden 
              bg-[#000C31]
              before:content-[''] before:absolute before:inset-0 
              before:bg-[linear-gradient(#1DA0E333_1px,transparent_1px),linear-gradient(90deg,#1DA0E333_1px,transparent_1px)] 
              before:bg-size-[20px_20px] before:opacity-30 before:pointer-events-none"
    >
      <div className="hero-content text-center">
        <div className="flex flex-col gap-16">
          <h1 className="text-3xl md:text-6xl font-bold">Dig The Data Legacy</h1>
          {/* legacy card */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch px-4 md:px-22">
            {/* card-1 */}
            <div className="card flex flex-col rounded-3xl border border-[#145875] bg-[#000C31] w-9/10 shadow-sm hover:border-[#1DA0E3] hover:-translate-y-2 hover:shadow-[0_0_55px_#145875] transition-all duration-300 overflow-hidden">
              <figure className="relative flex justify-center items-center p-2 bg-white rounded-t-2xl overflow-hidden">
                <img
                  src={legacy}
                  className="w-full h-full object-cover rounded-t-2xl hover:scale-105 transition-all duration-300"
                  alt="Shoes"
                />
                <span className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent rounded-t-2xl pointer-events-none"></span>
              </figure>

              <div className="card-body flex flex-col grow text-left lg:rounded-r-3xl rounded-b-3xl lg:rounded-l-none rounded-t-none bg-[#000C31]">
                <h2 className="card-title pb-2 md:text-5xl text-xl font-bold text-white">
                  What is Dig The Data?
                </h2>
                <p className="lg:text-xl text-base font-semibold text-white/70">
                  A thrilling mix of puzzles, quizzes, and brain games. Uncover
                  hidden clues and decode data-driven mysteries around your
                  campus. Step into the world where logic meets curiosity.
                </p>
                <div className="card-actions mt-auto justify-center py-6 gap-6">
                  <a
                    href="https://www.facebook.com/share/v/17fLL55JeP/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn btn-ghost md:px-6 md:py-6 bg-linear-to-l to-[#00B3FF] from-[#0077FF] border border-transparent rounded-xl md:text-lg text-xs text-white font-semibold hover:scale-110 hover:border-[#1DA0E3] hover:shadow-[0_4px_15px_#1DA0E3]/50 transition-all duration-300"
                  >
                    (NCC) Page
                  </a>
                </div>
              </div>
            </div>

            {/* card-2 */}
            <div className="card flex flex-col rounded-3xl border border-[#145875] bg-[#000C31] w-9/10 shadow-sm hover:border-[#1DA0E3] hover:-translate-y-2 hover:shadow-[0_0_55px_#145875] transition-all duration-300 overflow-hidden">
              <figure className="relative flex justify-center items-center p-2 rounded-t-2xl overflow-hidden">
                <img
                  src={logo}
                  className="w-full h-full object-cover rounded-t-2xl hover:scale-105 transition-all duration-300"
                  alt="Shoes"
                />
                <span className="absolute inset-0 bg-linear-to-t from-black/20 80% to-transparent rounded-t-2xl pointer-events-none"></span>
              </figure>

              <div className="card-body flex flex-col grow text-left lg:rounded-r-3xl rounded-b-3xl lg:rounded-l-none rounded-t-none bg-[#000C31]">
                <h2 className="card-title pb-2 md:text-5xl text-xl font-bold text-white">
                  Why is Dig The Data?
                </h2>
                <p className="lg:text-xl text-base font-semibold text-white/70">
                  “Dig The Data” makes learning engaging and interactive by
                  transforming traditional education into a fun, game-based
                  experience. It strengthens logical and analytical thinking
                  while encouraging teamwork and communication as teams
                  collaborate and strategize to solve challenges.
                </p>
                <div className="card-actions mt-auto justify-center py-6 gap-6">
                  <a
                    href="https://www.facebook.com/share/v/17fLL55JeP/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn btn-ghost md:px-6 md:py-6 bg-linear-to-l to-[#00B3FF] from-[#0077FF] border border-transparent rounded-xl md:text-lg text-xs text-white font-semibold hover:scale-110 hover:border-[#1DA0E3] hover:shadow-[0_4px_15px_#1DA0E3]/50 transition-all duration-300"
                  >
                    (NCC) Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Legacy;
