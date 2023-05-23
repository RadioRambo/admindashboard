"use client";
import Heading from "@/app/(components)/Heading";
import { useState } from "react";

export default function () {
  const [submitted, setSubmitted] = useState(false);
  const [tableData, setTableData] = useState([
    {
      transaction_id: undefined,
      customer_id: undefined,
      transaction_date: undefined,
      payment_mode: undefined,
      payment_month: undefined,
    },
  ]);

  function addRow() {
    setTableData((tableData) => [
      ...tableData,
      {
        transaction_id: undefined,
        customer_id: undefined,
        transaction_date: undefined,
        payment_mode: undefined,
        payment_month: undefined,
      },
    ]);
  }

  async function saveToDatabase() {
    try {
      console.log(JSON.stringify(tableData));
      const response = await fetch(
        "https://workers.tornarselectnet.workers.dev/api/add/payment",
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
            transaction_id: undefined,
            customer_id: undefined,
            transaction_date: undefined,
            payment_mode: undefined,
            payment_month: undefined,
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
          <button className="px-2 py-2  hover:bg-black/30 " onClick={addMore}>
            Add More?
          </button>
        </div>
      ) : (
        <div>
          <Heading title="Add Payments Data" />
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
                        type="text"
                        className="px-2 w-full py-2 bg-inherit"
                        onChange={(event) => {
                          tableData[i].transaction_id = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td className=" whitespace-nowrap  text-base border-2 border-foreground">
                      <input
                        type="text"
                        className="px-2 w-full py-2 bg-inherit"
                        onChange={(event) => {
                          tableData[i].customer_id = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td className=" whitespace-nowrap  text-base border-2 border-foreground">
                      <input
                        type="text"
                        className="px-2 w-full py-2 bg-inherit"
                        onChange={(event) => {
                          tableData[i].transaction_date = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td className=" whitespace-nowrap  text-base border-2 border-foreground">
                      <input
                        type="text"
                        className="px-2 w-full py-2 bg-inherit"
                        onChange={(event) => {
                          tableData[i].payment_mode = event.target.value;
                        }}
                      ></input>
                    </td>
                    <td className=" whitespace-nowrap  text-base border-2 border-foreground">
                      <input
                        type="text"
                        className="px-2 w-full py-2 bg-inherit"
                        onChange={(event) => {
                          tableData[i].payment_month = event.target.value;
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
