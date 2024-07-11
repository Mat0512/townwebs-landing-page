"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative h-[140vh] overflow-hidden bg-black pb-20 pt-35 md:pt-40 lg:h-screen xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:items-center lg:gap-8 xl:flex-row xl:gap-32.5">
            <div className="w-full xl:w-1/2">
              <h1 className="text-whitexl:text-hero mb-5 pr-16 text-3xl font-bold ">
                Elevate Your Local Business with a Professional Website{" "}
              </h1>
              <p>
                Unlock the potential of your local business with a modern
                website. Increase visibility, attract new customers, and enhance
                customer engagement 24/7. Discover how a digital presence can
                transform your store's growth and success.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="bg-main flex rounded-full px-7.5 py-2.5 text-white duration-300 ease-in-out"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* hero image */}
            <div className="animate_right h-[500px] w-full xl:w-1/2">
              <div className="relative left-10 z-0 flex gap-2 lg:left-40 lg:gap-4 xl:left-0 xl:w-[900px]">
                <div className=" mt-20 flex flex-1 flex-col gap-2 lg:gap-4">
                  <div className="relative">
                    <div className="absolute h-full w-full bg-black opacity-25"></div>
                    <Image
                      src="/images/hero/hero-img-col-1-1.png "
                      alt="Hero"
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "5px",
                      }}
                      unoptimized={true}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute h-full w-full bg-black opacity-25"></div>
                    <Image
                      src="/images/hero/hero-img-col-1-2.png"
                      alt="Hero"
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "5px",
                      }}
                      unoptimized={true}
                    />
                  </div>
                </div>
                <div className="mt-7 flex flex-1 flex-col gap-2 lg:gap-4">
                  <div className="relative">
                    <div className="absolute h-full w-full bg-black opacity-25"></div>
                    <Image
                      src="/images/hero/hero-img-col-2-1.png"
                      alt="Hero"
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "5px",
                      }}
                      unoptimized={true}
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute h-full w-full bg-black opacity-25"></div>
                    <Image
                      src="/images/hero/hero-img-col-2-2.png"
                      alt="Hero"
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "5px",
                      }}
                      unoptimized={true}
                    />
                  </div>
                </div>
                <div className=" flex flex-1 flex-col gap-2 lg:gap-4">
                  <div className="relative">
                    <div className="absolute h-full w-full bg-black opacity-25"></div>
                    <Image
                      src="/images/hero/hero-img-col-3-1.png"
                      alt="Hero"
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "5px",
                      }}
                      unoptimized={true}
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute h-full w-full bg-black opacity-25"></div>
                    <Image
                      src="/images/hero/hero-img-col-3-2.png"
                      alt="Hero"
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "5px",
                      }}
                      unoptimized={true}
                    />
                  </div>
                </div>

                {/* <div className="w-full"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
