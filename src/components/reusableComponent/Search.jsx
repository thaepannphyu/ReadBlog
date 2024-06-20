import { PropTypes } from "prop-types";
import { useState } from "react";

const Search = (props) => {

const [query,setQuery]= useState("");

const queryHandler=(e)=>{
  const value= e.target?.value;
  props?.handleInputChange(e);
  setQuery(value);
}


  return (
   
      <div
        className="relative"
        data-hs-combo-box='{
        "groupingType": "default",
        "isOpenOnFocus": true,
        "apiUrl": "../assets/data/searchbox.json",
        "apiGroupField": "category",
        "outputItemTemplate": "<div data-hs-combo-box-output-item><span class=\"flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:focus:bg-neutral-700\"><div class=\"flex items-center w-full\"><div class=\"flex items-center justify-center rounded-full bg-gray-200 size-6 overflow-hidden me-2.5\"><img class=\"flex-shrink-0\" data-hs-combo-box-output-item-attr=&apos;[{\"valueFrom\": \"image\", \"attr\": \"src\"}, {\"valueFrom\": \"name\", \"attr\": \"alt\"}]&apos; /></div><div data-hs-combo-box-output-item-field=\"name\" data-hs-combo-box-search-text data-hs-combo-box-value></div></div><span class=\"hidden hs-combo-box-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg></span></span></div>",
        "groupingTitleTemplate": "<div class=\"text-xs uppercase text-gray-500 m-3 mb-1 dark:text-neutral-500\"></div>"
      }'>
        <div className="relative">
          
          <input
           name="search"
            onChange={(e)=>queryHandler(e)}
            type="text"
            value={query}
            className="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-s-none rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Type a name"
            data-hs-combo-box-input=""
          />

          <div className="absolute inset-y-0 end-2 flex items-center pointer-events-none z-20 ps-3.5">
            <svg
              className="flex-shrink-0 size-4 text-gray-400 dark:text-white/60"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx={11} cy={11} r={8} />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
        {/* SearchBox Dropdown */}
        <div
          className="absolute z-50 w-full bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
          style={{ display: "none" }}
          data-hs-combo-box-output="">
          <div
            className="max-h-72 rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            data-hs-combo-box-output-items-wrapper=""
          />
        </div>
        {/* End SearchBox Dropdown */}
      </div>
  );
};

export default Search;

Search.propTypes = {
  handleInputChange:PropTypes.func.isRequired
};
