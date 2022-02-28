import { Fragment, useState, useEffect } from "react";
import { Menu, Transition, Listbox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { data } from "../warehouse_data";
import { useNavigate } from "react-router";
import { printData } from "../redux/filterSlice";
import { warehoueData } from "../redux/filterSlice";
import {useDispatch, useSelector} from 'react-redux'

export default function Warehouse() {
  const dispatch = useDispatch();
  const selector = useSelector(warehoueData);
  const filterList = [
    { name: "City" },
    { name: "Cluster" },
    { name: "Space Available Limit" },
  ];
  console.log(selector);

  useEffect(() => {
      console.log(selector)
  }, [])
  

  const navigate = useNavigate()
  const [selected, setSelected] = useState(filterList[0]);
  const [search, setSearch] = useState("");
  let searchedData = data.filter((el) => el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  const [filteredArray, setFilteredArray] = useState([]);

  return (
    <div className="lg:justify-between max-w-7xl mx-auto mt-4 px-4">
      <div className="lg:flex lg:items-center ">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate" onClick={() =>  dispatch(printData())}>
            Warehouse {selector}
          </h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  class="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                name="q"
                class="py-3 text-sm text-black bg-gray-100 p rounded-md pl-10  pr-2 focus:outline-none "
                placeholder="Search..."
              />
            </div>
          </span>
        </div>
        <div className="w-96 ml-4 flex items-center">
          <h2 className="mr-4 text-lg">Filter By :</h2>
          <Listbox value={selected} onChange={setSelected} className="w-72">
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-72 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filterList.map((el, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `cursor-default select-none relative py-2 pl-10 pr-4 ${
                          active
                            ? "text-amber-900 bg-amber-100"
                            : "text-gray-900"
                        }`
                      }
                      value={el}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {el.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-12 gap-8 place-content-center">
        {searchedData.map((el, index) => (
          <div
            className="max-w-sm mb-2 rounded-lg shadow-md bg-green-100 cursor-pointer"
            key={index}
            onClick={() =>navigate('/info', {state:{data:el}})}
          >
            <div class="px-6 py-4">
              <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">
                {el.name}
              </h4>
              <p class="leading-normal text-gray-700">{el.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
