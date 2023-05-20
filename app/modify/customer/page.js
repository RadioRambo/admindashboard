"use client";
import Heading from "@/app/(components)/Heading";
import { useState } from "react";

export default function () {
  const [detailsFetched, setDetailsFetched] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [tableData, setTableData] = useState([
    {
      customer_id: undefined,
      cabin: undefined,
      name: undefined,
      email: undefined,
      phone: undefined,
      gender: undefined,
    },
  ]);

  function addRow() {
    setTableData((tableData) => [
      ...tableData,
      {
        customer_id: undefined,
        cabin: undefined,
        name: undefined,
        email: undefined,
        phone: undefined,
        gender: undefined,
      },
    ]);
  }

  async function saveToDatabase() {
    setTableData([
      {
        customer_id: undefined,
        cabin: undefined,
        name: undefined,
        email: undefined,
        phone: undefined,
        gender: undefined,
      },
    ]);
    setSubmitted(true);
    console.log(tableData);

    // const response = await fetch('url', {});
    // if success clean table and change button to "save"
  }
  function addMore() {
    setSubmitted(false);
  }
  return (
    <div>
      {submitted ? (
        <div>
          <Heading title="Saved to Database" />
          <button className="px-2 py-2  hover:bg-black/30 " onClick={addMore}>
            Add More?
          </button>
        </div>
      ) : (
        <div>
          <Heading title="Modify Customers Data" />
          <div className="overflow-x-scroll">
            <table className="min-w-full">
              <thead className="bg-foreground">
                <tr>
                  {Object.keys(tableData[0]).map((key) => (
                    <th
                      key={key}
                      scope="col"
                      className="px-2 py-2 text-left text-base font-semibold text-black uppercase tracking-widest border-x-2 border-black/30"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {tableData.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-neutral-100" : ""}>
                    <td className=" whitespace-nowrap  text-base border-2 border-foreground">
                      <input
                        placeholder="Enter ID first"
                        type="text"
                        className="px-2 w-full py-2 bg-inherit"
                        onChange={(event) => {
                          tableData[i].customer_id = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td
                      className={`whitespace-nowrap  text-base border-2 border-foreground ${
                        detailsFetched ? "" : "bg-black/5"
                      } `}
                    >
                      {detailsFetched ? (
                        <input
                          type="text"
                          defaultValue={tableData[i].cabin}
                          className="px-2 w-full py-2 bg-inherit"
                          onChange={(event) => {
                            tableData[i].cabin = event.target.value;
                          }}
                        ></input>
                      ) : (
                        <input
                          disabled
                          className="disabled:bg-transparent w-full"
                        ></input>
                      )}
                    </td>
                    <td className=" whitespace-nowrap  text-base border-2 border-foreground">
                      <input
                        type="text"
                        className="px-2 w-full py-2 bg-inherit"
                        onChange={(event) => {
                          tableData[i].name = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td className=" whitespace-nowrap  text-base border-2 border-foreground">
                      <input
                        type="text"
                        className="px-2 w-full py-2 bg-inherit"
                        onChange={(event) => {
                          tableData[i].email = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td className=" whitespace-nowrap  text-base border-2 border-foreground">
                      <input
                        type="text"
                        className="px-2 w-full py-2 bg-inherit"
                        onChange={(event) => {
                          tableData[i].phone = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td className=" whitespace-nowrap  text-base border-2 border-foreground">
                      <input
                        type="text"
                        className="px-2 w-full py-2 bg-inherit"
                        onChange={(event) => {
                          tableData[i].gender = event.target.value;
                        }}
                      ></input>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex  justify-between">
            <button
              className="mt-4 text-base bg-foreground hover:bg-black/30 "
              onClick={addRow}
            >
              <img src="/add.svg" />
            </button>
            <button
              className="mt-4 text-base bg-foreground px-6 py-1 hover:bg-black/30"
              onClick={saveToDatabase}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
