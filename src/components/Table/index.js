import { data } from "autoprefixer";
import React from "react";

const Table = ({ columns, dataSource }) => {
  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Id
                </th>
                {columns.map((item, index) => (
                  <th
                    key={index}
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataSource.length &&
                dataSource.map((dataItem, dataIndex) => (
                  <tr key={dataIndex}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {dataIndex + 1}
                      </p>
                    </td>
                    {columns.map((columnItem, columnIndex) => (
                      <td
                        key={columnIndex}
                        className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        {Object.keys(columnItem).includes("render") ? (
                          columnItem["render"](
                            dataItem[columnItem["dataIndex"]]
                          )
                        ) : (
                          <p className="text-gray-900 whitespace-no-wrap">
                            {dataItem[columnItem["dataIndex"]]}
                          </p>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
            <span className="text-xs xs:text-sm text-gray-900">
              Showing 1 to 4 of 50 Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                Prev
              </button>
              &nbsp; &nbsp;
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
