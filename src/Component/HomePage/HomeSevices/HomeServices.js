import React from "react";
import useServices from "../../../Hook/useServices";
import Service from "../../Shear/Service/Service";

const HomeServices = () => {
  const [services] = useServices();
  return (
    <div className="md:w-10/12 mx-auto py-20 ">
      <h1 className="text-center text-secondary mb-7 font-bold text-3xl">
        Our Best Construction Tools
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-20 lg:gap-x-2">
        {services.slice(0, 6).map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
