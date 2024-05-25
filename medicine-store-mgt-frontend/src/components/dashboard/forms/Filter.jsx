import React, { useState } from "react";
import axios from "axios";

const FilterForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    categoryName: "",
    initialPrice: "",
    endPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();
    if (formData.companyName)
      queryParams.append("company_name", formData.companyName);
    if (formData.categoryName)
      queryParams.append("medicine_category", formData.categoryName);
    if (formData.initialPrice)
      queryParams.append("initial_price", formData.initialPrice);
    if (formData.endPrice) queryParams.append("end_price", formData.endPrice);

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/medicine/medicines/?${queryParams.toString()}`
      );
      console.log("Filtered data:", response.data);
      // Process the filtered data as needed
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  return (
    <div className="">
      <h2 className="font-semibold border-b text-lg">
        Filter by company, category or prices
      </h2>
      <form className="w-full flex flex-col gap-2 py-3" onSubmit={handleSubmit}>
        <div className="w-full">
          <input
            type="text"
            name="companyName"
            placeholder="Enter company name"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            name="categoryName"
            placeholder="Enter category/brand name"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.categoryName}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-row gap-2">
          <input
            type="text"
            name="initialPrice"
            placeholder="Enter initial price"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.initialPrice}
            onChange={handleChange}
          />
          <input
            type="text"
            name="endPrice"
            placeholder="Enter end price"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.endPrice}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="w-[200px] bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 font-bold"
          >
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
