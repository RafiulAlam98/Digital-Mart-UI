import React from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../../Inventory/CategoryList/CategoryList";
import Machinery from "../Machinery/Machinery";

const Hero = () => {
  return (
    <main className="max-w-[1200px] mx-auto ">
      <section className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-6 gap-2 mb-4">
        <section className=" md:block lg:block">
          <CategoryList />
        </section>
        <section className="lg:col-start-2 lg:col-span-4">
          <Banner />
        </section>
        <section className="">
          <Machinery />
        </section>
      </section>
    </main>
  );
};

export default Hero;
