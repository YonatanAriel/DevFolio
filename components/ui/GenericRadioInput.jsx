import React from "react";

export default function GenericRadioInput({}) {
  return (
    <>
      <div className="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value="No"
          name="portfolio-radio"
          checked={!isPortfolio}
          onChange={() => setIsPortfolio(false)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-1"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          No
        </label>
      </div>
    </>
  );
}
