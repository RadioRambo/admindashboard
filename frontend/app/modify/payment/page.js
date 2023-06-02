"use client";
import Heading from "@/app/(components)/Heading";
import { useState } from "react";

export default function ModifyPayment() {
  const [detailsFetched, setDetailsFetched] = useState(false);
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
    //TODO Data not saving to database

    try {
      console.log(JSON.stringify(tableData));
      const response = await fetch(
        "https://a6kbmv3x3pjass8qn2fu76wqydvtvh.tornarselectnet.workers.dev/api/add/payment",
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

  async function fetchCustomerData(id) {
    try {
      const response = await fetch(
        "https://a6kbmv3x3pjass8qn2fu76wqydvtvh.tornarselectnet.workers.dev/api/view/payments"
      );
      const data = await response.json();
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].transaction_id === Number(id)) {
          setTableData([data.results[i]]);
          break;
        }
      }
      setDetailsFetched(true);
    } catch (e) {
      console.log(e);
    }
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
          <Heading title="Modify Payments Data" />
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
                        placeholder="(1000001 - 1000072)"
                        type="text"
                        className="px-2 py-2 w-full bg-inherit"
                        onChange={(event) => {
                          tableData[i].transaction_id = event.target.value;
                          if (event.target.value.length === 7) {
                            fetchCustomerData(event.target.value);
                          }
                        }}
                      ></input>
                    </td>
                    <td
                      className={`whitespace-nowrap  text-base border-2 border-foreground ${
                        detailsFetched ? "" : "bg-black/5"
                      }`}
                    >
                      {detailsFetched ? (
                        <input
                          type="text"
                          placeholder="(1000001 - 1000072)"
                          defaultValue={tableData[i].customer_id}
                          className="px-2 py-2 w-full bg-inherit"
                          onChange={(event) => {
                            tableData[i].customer_id = event.target.value;
                          }}
                        ></input>
                      ) : (
                        <input
                          placeholder="Number"
                          disabled
                          className="w-full disabled:bg-transparent"
                        ></input>
                      )}
                    </td>
                    <td
                      className={`whitespace-nowrap  text-base border-2 border-foreground ${
                        detailsFetched ? "" : "bg-black/5"
                      }`}
                    >
                      {detailsFetched ? (
                        <input
                          type="text"
                          defaultValue={tableData[i].transaction_date}
                          className="px-2 py-2 w-full bg-inherit"
                          onChange={(event) => {
                            tableData[i].transaction_date = event.target.value;
                          }}
                        ></input>
                      ) : (
                        <input
                          placeholder="YYYY-MM-DD"
                          disabled
                          className="w-full disabled:bg-transparent"
                        ></input>
                      )}
                    </td>
                    <td
                      className={`whitespace-nowrap  text-base border-2 border-foreground ${
                        detailsFetched ? "" : "bg-black/5"
                      }`}
                    >
                      {detailsFetched ? (
                        <input
                          type="text"
                          defaultValue={tableData[i].payment_mode}
                          className="px-2 py-2 w-full bg-inherit"
                          onChange={(event) => {
                            tableData[i].payment_mode = event.target.value;
                          }}
                        ></input>
                      ) : (
                        <input
                          placeholder="offline or online"
                          disabled
                          className="w-full disabled:bg-transparent"
                        ></input>
                      )}
                    </td>
                    <td
                      className={`whitespace-nowrap  text-base border-2 border-foreground ${
                        detailsFetched ? "" : "bg-black/5"
                      }`}
                    >
                      {detailsFetched ? (
                        <input
                          type="text"
                          defaultValue={tableData[i].payment_month}
                          className="px-2 py-2 w-full bg-inherit"
                          onChange={(event) => {
                            tableData[i].payment_month = event.target.value;
                          }}
                        ></input>
                      ) : (
                        <input
                          placeholder="YYYY-MM-DD"
                          disabled
                          className="w-full disabled:bg-transparent"
                        ></input>
                      )}
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
              {/* <img src="/add.svg" /> TODO Add multiple entries support */}
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
