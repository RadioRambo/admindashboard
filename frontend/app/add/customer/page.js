"use client";
import Heading from "@/app/(components)/Heading";
import { useState } from "react";

export default function AddCustomer() {
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
    try {
      console.log(JSON.stringify(tableData));
      const response = await fetch(
        "https://a6kbmv3x3pjass8qn2fu76wqydvtvh.tornarselectnet.workers.dev/api/add/customer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tableData),
        }
      );

      const data = await response.json();

      if (data.success || data[0].success) {
        setSubmitted(true);

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
      } else console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  function addMore() {
    setSubmitted(false);
  }
  return (
    <div>
      {submitted ? (
        <div>
          <Heading title="Saved to Database" />
          <button className="px-2 py-2 hover:bg-black/30" onClick={addMore}>
            Add More?
          </button>
        </div>
      ) : (
        <div>
          <Heading title="Add Customers Data" />
          <div className="overflow-x-scroll">
            <table className="min-w-full">
              <thead className="bg-foreground">
                <tr>
                  {Object.keys(tableData[0]).map((key) => (
                    <th
                      key={key}
                      scope="col"
                      className="px-2 py-2 text-base font-semibold tracking-widest text-left text-black uppercase border-x-2 border-black/30"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {tableData.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-neutral-100" : ""}>
                    <td className="text-base whitespace-nowrap border-2 border-foreground">
                      <input
                        placeholder="Number"
                        type="text"
                        className="px-2 py-2 w-full bg-inherit"
                        onChange={(event) => {
                          tableData[i].customer_id = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td className="text-base whitespace-nowrap border-2 border-foreground">
                      <input
                        placeholder="Number"
                        type="text"
                        className="px-2 py-2 w-full bg-inherit"
                        onChange={(event) => {
                          tableData[i].cabin = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td className="text-base whitespace-nowrap border-2 border-foreground">
                      <input
                        placeholder="String"
                        type="text"
                        className="px-2 py-2 w-full bg-inherit"
                        onChange={(event) => {
                          tableData[i].name = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td className="text-base whitespace-nowrap border-2 border-foreground">
                      <input
                        placeholder="String"
                        type="text"
                        className="px-2 py-2 w-full bg-inherit"
                        onChange={(event) => {
                          tableData[i].email = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td className="text-base whitespace-nowrap border-2 border-foreground">
                      <input
                        placeholder="Number"
                        type="text"
                        className="px-2 py-2 w-full bg-inherit"
                        onChange={(event) => {
                          tableData[i].phone = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td className="text-base whitespace-nowrap border-2 border-foreground">
                      <input
                        placeholder="male or female"
                        type="text"
                        className="px-2 py-2 w-full bg-inherit"
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
          <div className="flex justify-between">
            <button
              className="mt-4 text-base bg-foreground hover:bg-black/30"
              onClick={addRow}
            >
              <img src="/add.svg" />
            </button>
            <button
              className="px-6 py-1 mt-4 text-base bg-foreground hover:bg-black/30"
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
