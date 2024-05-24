import React from "react";
import Filter from "../components/dashboard/forms/Filter";
import AddData from "../components/dashboard/forms/AddData";

const Dashboard = () => {
  return (
    <div>
      <div className="w-full bg-white flex flex-col sm:flex-row gap-4 mb-4">
        <div className="w-full border shadow-sm rounded-lg py-2 px-2">
          <AddData />
        </div>

        <div className="w-full border shadow-sm rounded-lg py-2 px-2">
          <Filter />
        </div>
      </div>

      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default Dashboard;
