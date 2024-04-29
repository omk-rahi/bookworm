import { useState } from "react";
import Book from "./Book";
import DefaultLink from "./DefaultLink";

const BestSellerOverview = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = ["All", "Art & Photography", "Self Help", "Fiction"];

  return (
    <div className="container mx-auto mt-8 py-4">
      <h2 className="text-center text-xl font-semibold uppercase tracking-widest xl:text-2xl">
        Best Selling books
      </h2>

      <div className="items-center justify-between md:flex">
        <ul className=" mt-4 flex justify-center gap-8 xl:text-[1.2rem] ">
          {categories.map((category, i) => (
            <li
              key={category}
              className={`cursor-pointer border-b-2  transition-all duration-100 ${activeTab === i ? "border-orange-300 font-semibold text-orange-300" : "border-transparent"}`}
              onClick={() => setActiveTab(i)}
            >
              {category}
            </li>
          ))}
        </ul>
        <DefaultLink to="/" className=" hidden gap-2 md:flex">
          <span>View more</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </DefaultLink>
      </div>
      <div className="mt-8 flex flex-col items-center gap-8 md:flex-row">
        <Book />
        <Book />
        <Book />
      </div>

      <div className="flex justify-center py-4">
        <DefaultLink to="/" className="flex gap-2  md:hidden">
          <span>View more</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </DefaultLink>
      </div>
    </div>
  );
};

export default BestSellerOverview;
