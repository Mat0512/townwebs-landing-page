"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="text bg-white py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="mb-30 flex h-auto w-full flex-wrap gap-10">
            <div className="w-full flex-1  lg:w-1/2">
              <h2 className=" text-3xl font-bold text-black xl:text-sectiontitle3 ">
                Creating Professional Websites for Local Stores
              </h2>
            </div>
            <div className="w-full flex-1 lg:w-1/2">
              <p className="text-black lg:text-xl">
                Our mission is to help you attract more customers and enhance
                your business visibility with a straightforward and effective
                web solution.{" "}
              </p>
            </div>
          </div>
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Market Reach",
              subtitle: "Why Build a Website for Your Local Store?",
              description: ``,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
