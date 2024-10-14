"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import NoDataFound from "../NoDataFound/NoDataFound";
import ErrorComponent from "../NoDataFound/ErrorComponent";
// import ProfileComponent from "../NavComponent/ProfileComponent";
import "./Table.css";
import StatusComponent from "../StatusComponent";
import Loader from "../Loader";
import PaginationComponent from "./PaginationComponent";
import UserLogo from "./UserLogo";
import { isArray } from "chart.js/helpers";

// Table.propTypes = {
//   data: Array,
//   columnData: Array,
// };
const Table = ({
  tableTitle,
  data,
  columnData,
  loading,
  checked,
  onClickRow,
  error,
  currentPage = 1,
  pageLimit = 10,
  totalItems = 10,
  onPaginationChange,
  showInputField,
}: any) => {
  const TableRow = ({ item, columnData, checked }: any) => (
    <tr onClick={() => onClickRow(item)} className="text-center cursor-pointer hover:bg-gray-300 transition-all delay-200 ease-in-out">
      <MyCheckComponent checked={checked} />
      {columnData.map((columnItem: any, index: number) => {
        return columnItem.value === "status" ||
          columnItem.value === "online" ? (
          <StatusComponent key={index} value={item[`${columnItem.value}`]} />
        ) : columnItem.value === "transactionType" ? (
          <td key={index}>
            {/* <OrderItem transaction={item} isLinear={true} /> */}
          </td>
        ) : columnItem.value === "full_name" || columnItem.value === "user" ? (
          <td key={index}>
            <UserLogo user={item?.user ?? item} />
          </td>
        ) : (
          <td
            className="text-gray-700 p-4 font-light text-sm text-left"
            key={index}
          >
            {item[`${columnItem.value}`]}
          </td>
        );
      })}
    </tr>
  );
  return (
    <div className="bgwhite  rounded-lg pt-4">
      {error ? (
        <ErrorComponent error={error} />
      ) : (
        <div>
          <div className="flex justify-between mb-4 items-center">
            <h1 className="font-normal text-xl">{tableTitle ?? "Title"}</h1>
            {/* {showInputField && (
              <InputField
                placeholder={"Search"}
                type={"search"}
                width={20}
                prefixIcon={<Icon icon="ic:outline-search" />}
              />
            )} */}
            <PaginationComponent
              currentPage={currentPage}
              totalItems={totalItems}
              pageLimit={pageLimit}
              onPaginationChange={onPaginationChange}
            />
          </div>
          <table className="table w-full  ">
            <thead className="bg-gray-100 text-center">
              <tr>
                <th>
                  <Icon
                    icon="material-symbols:indeterminate-check-box-outline"
                    className="text-blue-300 text-4xl  my-2"
                  />
                </th>
                {columnData?.map((item: any, index: number) => (
                  <TableHeadItem item={item} key={index} />
                ))}
              </tr>
            </thead>
            <tbody>
              {!loading &&
                Array.isArray(data) &&
                data.map((item: any, index: number) => (
                  <TableRow
                    item={item}
                    columnData={columnData}
                    checked={checked}
                    key={index}
                  />
                ))}
            </tbody>
          </table>
          {loading ? (
            <div className="h-80 flex items-center justify-center">
              <Loader loading />
            </div>
          ) : (
            data?.length === 0 && <NoDataFound />
          )}
        </div>
      )}
    </div>
  );
};

const TableHeadItem = ({ item }: any) => (
  <th className="p-3 text-left font-light text-sm text-gray-700 uppercase">
    {item.heading}
  </th>
);
const MyCheckComponent = ({ checked }: any) => (
  <td className="text-left ">
    <Icon
      icon={`material-symbols:check-box-outline-${
        checked ? "rounded" : "blank"
      }`}
      className="text-blue-300 text-4xl duration-900 text-center"
    />
  </td>
);

export default Table;
