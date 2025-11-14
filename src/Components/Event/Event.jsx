const Event = () => {
  return (
    <div className="hero py-20 bg-[#0F1623] border-y border-y-[#1DA0E3] min-h-screen shadow-[0_20px_35px_rgba(0,0,0,0.6)]">
      <div className="hero-content items-center justify-center p-0 flex-col w-full">
        {/* event title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 leading-tight">
            EVENT
          </h1>
          <h2 className="text-4xl md:text-6xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
            PLAN
          </h2>
        </div>
        {/* event card */}
        <div className="w-7/10 space-y-6">
          {/* card-1 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-gray-900/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-500/50 rounded-t-2xl md:rounded-l-2xl md:rounded-t-none p-6 text-center min-w-[120px] shadow-lg shadow-cyan-500/25 transition-all duration-300">
              <div className="text-4xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                15
              </div>
              <div className="text-lg font-bold text-cyan-400">NOV</div>
            </div>
            <div className="text-center md:text-start bg-gray-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl md:rounded-r-2xl md:rounded-none p-6 flex-1 shadow-lg hover:border-cyan-500/40 transition-all duration-300">
              <h3 className="text-2xl font-black text-white mb-3">
                Registration Deadline
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 mr-3 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">11:59 PM</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 mr-3 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">Dig the data website</span>
                </div>
              </div>
            </div>
          </div>
          {/* card-2 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-gray-900/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-500/50 rounded-t-2xl md:rounded-l-2xl md:rounded-t-none p-6 text-center min-w-[120px] shadow-lg shadow-cyan-500/25 transition-all duration-300">
              <div className="text-4xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                16
              </div>
              <div className="text-lg font-bold text-cyan-400">NOV</div>
            </div>
            <div className="text-center md:text-start bg-gray-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl md:rounded-r-2xl md:rounded-none p-6 flex-1 shadow-lg hover:border-cyan-500/40 transition-all duration-300">
              <h3 className="text-2xl font-black text-white mb-3">
                Preliminary Round
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 mr-3 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">4.00pm - 6.00 pm</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 mr-3 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">AC-101, AC-116, AC-104</span>
                </div>
              </div>
            </div>
          </div>
          {/* card-3 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-gray-900/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-500/50 rounded-t-2xl md:rounded-l-2xl md:rounded-t-none p-6 text-center min-w-[120px] shadow-lg shadow-cyan-500/25 transition-all duration-300">
              <div className="text-4xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                17
              </div>
              <div className="text-lg font-bold text-cyan-400">NOV</div>
            </div>
            <div className="text-center md:text-start bg-gray-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl md:rounded-r-2xl md:rounded-none p-6 flex-1 shadow-lg hover:border-cyan-500/40 transition-all duration-300">
              <h3 className="text-2xl font-black text-white mb-3">
                Finalist Announcement
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 mr-3 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">12.00 pm-4.00 pm</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 mr-3 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">Dig the data website</span>
                </div>
              </div>
            </div>
          </div>
          {/* card-4 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-gray-900/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-500/50 rounded-t-2xl md:rounded-l-2xl md:rounded-t-none p-6 text-center min-w-[120px] shadow-lg shadow-cyan-500/25 transition-all duration-300">
              <div className="text-4xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                18
              </div>
              <div className="text-lg font-bold text-cyan-400">NOV</div>
            </div>
            <div className="text-center md:text-start bg-gray-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl md:rounded-r-2xl md:rounded-none p-6 flex-1 shadow-lg hover:border-cyan-500/40 transition-all duration-300">
              <h3 className="text-2xl font-black text-white mb-3">
                Final Round
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 mr-3 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">12.00 pm-5.00 pm</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 mr-3 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">AD 202, NITER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
