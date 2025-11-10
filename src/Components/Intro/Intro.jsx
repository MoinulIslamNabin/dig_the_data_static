import ncc from "../../assets/ncclogonewncc.webp";
import logo from "../../assets/DtdLogo.png";

const Intro = () => {
  return (
    <div
      className="hero pt-20 min-h-screen relative overflow-hidden 
              bg-[linear-gradient(to_top_left,#0F182D,#14336C,#0F182D)] 
              before:content-[''] before:absolute before:inset-0 
              before:bg-[linear-gradient(#1DA0E333_1px,transparent_1px),linear-gradient(90deg,#1DA0E333_1px,transparent_1px)] 
              before:bg-size-[20px_20px] before:opacity-30 before:pointer-events-none"
    >
      <div className="hero-content flex-col gap-16">
        <div className="flex flex-row-reverse justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-between gap-3">
            <h1 className="text-4xl font-bold">NITER Computer Club</h1>
            <p className="text-[#01C6E6] text-lg font-semibold">Presents</p>
          </div>
          <img
            src={ncc}
            alt="Dtd Logo"
            className="rounded-2xl md:mr-2 transition-all duration-300 hover:scale-110 hover:bg-blue-500"
          />
        </div>
        <div className="card lg:flex-row rounded-3xl border border-[#145875] bg-[#192338] w-9/10 shadow-sm hover:border-[#1DA0E3] hover:-translate-y-2 hover:shadow-[0_0_55px_#145875] transition-all duration-300">
          <figure className="w-full lg:w-1/2 flex justify-center items-center px-8 md:px-10 md:py-10 lg:px-0 lg:py-0 py-8">
            <img
              src={logo}
              className="w-full md:w-6/10 md:p-28 p-8 bg-[#000C31] rounded-2xl shadow-2xl hover:scale-105 hover:shadow-[0_0_35px_#145875]/50 transition-all duration-300"
              alt="Shoes"
            />
          </figure>
          <div
            className="w-full lg:w-1/2 card-body md:p-11 p-6 lg:rounded-r-3xl rounded-b-3xl 
                lg:rounded-l-none rounded-t-none  bg-[#1D293D]"
          >
            <h2 className="card-title pb-2 md:text-5xl text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1DA0E3] to-[#0D8ED9]">
              Dig The Data
            </h2>
            <div className="flex justify-center items-center gap-6">
              <h2 className="card-title pb-2 md:text-4xl font-bold text-xl text-white">
                4.0
              </h2>
              <div class="h-1 flex-1 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>

            <p className="md:text-xl text-base font-semibold text-white/70">
              Organized by
              <span className="text-[#00D3F3]"> NCC (NITER Computer Club)</span>
              , an exclusive event for the
              <span className="text-[#51A2FF]"> NITER 15th batch. </span>
              <br />
              <br />
              This time, we bring you an event with a twist
              <span className="text-[#00D3F3]"> unlike never seen before</span>.
            </p>
            <div className="card-actions justify-start py-6 gap-6">
              <button className="btn btn-ghost md:px-6 md:py-6 bg-linear-to-l to-[#00B3FF] from-[#0077FF] border border-transparent rounded-xl md:text-lg text-xs text-white font-semibold hover:scale-110 hover:border-[#1DA0E3] hover:shadow-[0_4px_15px_#1DA0E3]/50 transition-all duration-300">
                Rules Book
              </button>
              <button className="btn btn-ghost md:px-6 md:py-6 bg-linear-to-l to-[#00B3FF] from-[#0077FF] border border-transparent rounded-xl md:text-lg text-xs text-white font-semibold hover:scale-110 hover:border-[#1DA0E3] hover:shadow-[0_4px_15px_#1DA0E3]/50 transition-all duration-300">
                Registration Rules
              </button>
            </div>
            <div class="grid grid-cols-3 gap-4  pt-6 border-t border-gray-700/50">
              <div class="text-center">
                <div class="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#1DA0E3] to-[#0D8ED9] mb-1">
                  4.0
                </div>
                <p class="text-gray-400 text-sm">Edition</p>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#1DA0E3] to-[#0D8ED9] mb-1">
                  15th
                </div>
                <p class="text-gray-400 text-sm">Batch</p>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#1DA0E3] to-[#0D8ED9] mb-1">
                  NCC
                </div>
                <p class="text-gray-400 text-sm">Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
