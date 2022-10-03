import React from "react";
import { useState } from "react";
import Card from "../../Product/Card/Card";
import { apiRequest } from "../../../apiRequest/apiRequest";
import { useEffect } from "react";

const BestSelling = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getProduct = async () => {
      const response = await apiRequest.get("/api/ecom/v1/product");
      const resData = response.data;
      setItem(resData);
      setLoading(false);
    };
    getProduct();
  }, []);
  return (
    <section className="bestselling dark:bg-gray-900 w-full border-b-gray-300 dark:border-b-gray-800 md:px-2 lg:px-4">
      <div className="bestSelling categroy container mx-auto py-6">
        <div className="headerLine flex flex-col pb-12 pt-4 justify-center items-center">
          <h1 className="text-3xl text-gray-900 dark:text-white text-center font-bold">
            Best Selling
          </h1>
          <span className="uppercase text-base text-gray-600 font-medium">
            View all
          </span>
        </div>
        <div className="singleCard grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-y-10 gap-x-4">
          {item &&
            item.map((data, index) => <Card data={data} index={index} />)}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
