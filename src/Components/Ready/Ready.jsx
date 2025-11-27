const Ready = () => {
  return (
    <div
      className="hero py-20 min-h-screen relative overflow-hidden 
                      bg-linear-to-b from-[#0D131F] via-blue-900/50 to-[#0D131F]
                      before:content-[''] before:absolute before:inset-0 
                      before:bg-[linear-gradient(#1DA0E333_1px,transparent_1px),linear-gradient(90deg,#1DA0E333_1px,transparent_1px)] 
                      before:bg-size-[20px_20px] before:opacity-30 before:pointer-events-none"
    >
      <div className="hero-content text-center">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch px-4 md:px-22">
          {/* card-1 */}
          <div className="card flex flex-col rounded-3xl border border-[#145875] bg-[#192338] w-9/10 shadow-sm hover:border-[#1DA0E3] hover:-translate-y-2 hover:shadow-[0_0_55px_#145875] transition-all duration-300 overflow-hidden">
            <div className="card-body flex flex-col grow justify-center items-center gap-6 text-center lg:rounded-r-3xl rounded-b-3xl lg:rounded-l-none rounded-t-none bg-[#192338] py-9">
              <h2 className="card-title  md:text-5xl text-xl font-bold text-white">
                Ready to Get Started?
              </h2>
              <p className="lg:text-xl text-base font-semibold text-white/70 w-7/10">
                Join us today and unlock the full potential of data analytics.
                Be part of the most exciting data competition at NITER.
              </p>
              <div className="card-actions mt-auto justify-center gap-6">
                <a
                  className="btn btn-ghost md:px-6 md:py-6 bg-linear-to-l to-[#00B3FF] from-[#0077FF] border border-transparent rounded-xl md:text-lg text-xs text-white font-semibold hover:border-[#1DA0E3] hover:-translate-y-1 hover:shadow-[0_8px_15px_#1DA0E3]/50 transition-all duration-300"
                >
                  Register Now
                </a>
                <a
                  className="btn btn-ghost md:px-6 md:py-6 bg-[#A78BFA]/15 border border-[#A78BFA] rounded-xl md:text-lg text-xs text-[#A78BFA] font-semibold hover:-translate-y-1 hover:border-[#A78BFA] hover:shadow-[0_8px_15px_#A78BFA]/50 hover:bg-[#A78BFA]/30 hover:text-purple-200 transition-all duration-300"
                >
                  Already Registered?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ready;
