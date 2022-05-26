import React from "react";
import useServices from "../../../Hook/useServices";
import Service from "../../Shear/Service/Service";

const HomeServices = () => {
  const [services] = useServices();
  return (
    <div className="md:w-11/12  mx-auto py-20 ">
      <h1 className="text-center text-secondary mb-7 font-bold md:text-3xl">
        Our Best Construction Tools
      </h1>
      <div className="grid gap-20  my-10  lg:grid-cols-3 md:grid-cols-2 lg:w-11/12 mx-auto">
        {services.slice(0, 6).map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
