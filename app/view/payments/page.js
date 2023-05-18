"use client";

import Heading from "@/app/(components)/Heading";
import Table from "../../(components)/Table";
import { useState, useEffect } from "react";

let paymentsData = [
  {
    transaction_id: 1000001,
    customer_id: 1,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000002,
    customer_id: 1,
    transaction_date: "2022-02-01",
    payment_mode: "online",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000003,
    customer_id: 1,
    transaction_date: "2022-03-01",
    payment_mode: "online",
    payment_month: "2022-03-01",
  },
  {
    transaction_id: 1000004,
    customer_id: 2,
    transaction_date: "2022-01-01",
    payment_mode: "offline",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000005,
    customer_id: 2,
    transaction_date: "2022-02-01",
    payment_mode: "offline",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000006,
    customer_id: 3,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000007,
    customer_id: 3,
    transaction_date: "2022-03-01",
    payment_mode: "online",
    payment_month: "2022-03-01",
  },
  {
    transaction_id: 1000008,
    customer_id: 3,
    transaction_date: "2022-05-01",
    payment_mode: "online",
    payment_month: "2022-05-01",
  },
  {
    transaction_id: 1000009,
    customer_id: 4,
    transaction_date: "2022-01-01",
    payment_mode: "offline",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000010,
    customer_id: 4,
    transaction_date: "2022-03-01",
    payment_mode: "offline",
    payment_month: "2022-03-01",
  },
  {
    transaction_id: 1000011,
    customer_id: 4,
    transaction_date: "2022-05-01",
    payment_mode: "offline",
    payment_month: "2022-05-01",
  },
  {
    transaction_id: 1000012,
    customer_id: 5,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000013,
    customer_id: 5,
    transaction_date: "2022-02-01",
    payment_mode: "online",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000014,
    customer_id: 5,
    transaction_date: "2022-04-01",
    payment_mode: "online",
    payment_month: "2022-04-01",
  },
  {
    transaction_id: 1000015,
    customer_id: 6,
    transaction_date: "2022-01-01",
    payment_mode: "offline",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000016,
    customer_id: 6,
    transaction_date: "2022-03-01",
    payment_mode: "offline",
    payment_month: "2022-03-01",
  },
  {
    transaction_id: 1000017,
    customer_id: 6,
    transaction_date: "2022-05-01",
    payment_mode: "offline",
    payment_month: "2022-05-01",
  },
  {
    transaction_id: 1000018,
    customer_id: 7,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000019,
    customer_id: 7,
    transaction_date: "2022-02-01",
    payment_mode: "online",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000020,
    customer_id: 7,
    transaction_date: "2022-04-01",
    payment_mode: "online",
    payment_month: "2022-04-01",
  },
  {
    transaction_id: 1000021,
    customer_id: 8,
    transaction_date: "2022-01-01",
    payment_mode: "offline",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000022,
    customer_id: 8,
    transaction_date: "2022-03-01",
    payment_mode: "offline",
    payment_month: "2022-03-01",
  },
  {
    transaction_id: 1000023,
    customer_id: 8,
    transaction_date: "2022-05-01",
    payment_mode: "offline",
    payment_month: "2022-05-01",
  },
  {
    transaction_id: 1000024,
    customer_id: 9,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000025,
    customer_id: 9,
    transaction_date: "2022-03-01",
    payment_mode: "online",
    payment_month: "2022-03-01",
  },
  {
    transaction_id: 1000026,
    customer_id: 9,
    transaction_date: "2022-05-01",
    payment_mode: "online",
    payment_month: "2022-05-01",
  },
  {
    transaction_id: 1000027,
    customer_id: 10,
    transaction_date: "2022-01-01",
    payment_mode: "offline",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000028,
    customer_id: 10,
    transaction_date: "2022-02-01",
    payment_mode: "offline",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000029,
    customer_id: 11,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000030,
    customer_id: 11,
    transaction_date: "2022-03-01",
    payment_mode: "online",
    payment_month: "2022-03-01",
  },
  {
    transaction_id: 1000031,
    customer_id: 11,
    transaction_date: "2022-05-01",
    payment_mode: "online",
    payment_month: "2022-05-01",
  },
  {
    transaction_id: 1000032,
    customer_id: 12,
    transaction_date: "2022-01-01",
    payment_mode: "offline",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000033,
    customer_id: 12,
    transaction_date: "2022-02-01",
    payment_mode: "offline",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000034,
    customer_id: 12,
    transaction_date: "2022-04-01",
    payment_mode: "offline",
    payment_month: "2022-04-01",
  },
  {
    transaction_id: 1000035,
    customer_id: 13,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000036,
    customer_id: 13,
    transaction_date: "2022-03-01",
    payment_mode: "online",
    payment_month: "2022-03-01",
  },
  {
    transaction_id: 1000037,
    customer_id: 13,
    transaction_date: "2022-05-01",
    payment_mode: "online",
    payment_month: "2022-05-01",
  },
  {
    transaction_id: 1000038,
    customer_id: 14,
    transaction_date: "2022-01-01",
    payment_mode: "offline",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000039,
    customer_id: 14,
    transaction_date: "2022-02-01",
    payment_mode: "offline",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000040,
    customer_id: 14,
    transaction_date: "2022-04-01",
    payment_mode: "offline",
    payment_month: "2022-04-01",
  },
  {
    transaction_id: 1000041,
    customer_id: 15,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000042,
    customer_id: 15,
    transaction_date: "2022-02-01",
    payment_mode: "online",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000043,
    customer_id: 15,
    transaction_date: "2022-04-01",
    payment_mode: "online",
    payment_month: "2022-04-01",
  },
  {
    transaction_id: 1000044,
    customer_id: 16,
    transaction_date: "2022-01-01",
    payment_mode: "offline",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000045,
    customer_id: 16,
    transaction_date: "2022-03-01",
    payment_mode: "offline",
    payment_month: "2022-03-01",
  },
  {
    transaction_id: 1000046,
    customer_id: 16,
    transaction_date: "2022-05-01",
    payment_mode: "offline",
    payment_month: "2022-05-01",
  },
  {
    transaction_id: 1000047,
    customer_id: 17,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000048,
    customer_id: 17,
    transaction_date: "2022-02-01",
    payment_mode: "online",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000049,
    customer_id: 17,
    transaction_date: "2022-04-01",
    payment_mode: "online",
    payment_month: "2022-04-01",
  },
  {
    transaction_id: 1000050,
    customer_id: 18,
    transaction_date: "2022-01-01",
    payment_mode: "offline",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000051,
    customer_id: 18,
    transaction_date: "2022-02-01",
    payment_mode: "offline",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000052,
    customer_id: 18,
    transaction_date: "2022-04-01",
    payment_mode: "offline",
    payment_month: "2022-04-01",
  },
  {
    transaction_id: 1000053,
    customer_id: 19,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000054,
    customer_id: 19,
    transaction_date: "2022-03-01",
    payment_mode: "online",
    payment_month: "2022-03-01",
  },
  {
    transaction_id: 1000055,
    customer_id: 19,
    transaction_date: "2022-05-01",
    payment_mode: "online",
    payment_month: "2022-05-01",
  },
  {
    transaction_id: 1000056,
    customer_id: 20,
    transaction_date: "2022-01-01",
    payment_mode: "offline",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000057,
    customer_id: 20,
    transaction_date: "2022-03-01",
    payment_mode: "offline",
    payment_month: "2022-03-01",
  },
  {
    transaction_id: 1000058,
    customer_id: 20,
    transaction_date: "2022-05-01",
    payment_mode: "offline",
    payment_month: "2022-05-01",
  },
  {
    transaction_id: 1000059,
    customer_id: 21,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000060,
    customer_id: 21,
    transaction_date: "2022-02-01",
    payment_mode: "online",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000061,
    customer_id: 21,
    transaction_date: "2022-04-01",
    payment_mode: "online",
    payment_month: "2022-04-01",
  },
  {
    transaction_id: 1000062,
    customer_id: 22,
    transaction_date: "2022-01-01",
    payment_mode: "offline",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000063,
    customer_id: 22,
    transaction_date: "2022-04-01",
    payment_mode: "offline",
    payment_month: "2022-04-01",
  },
  {
    transaction_id: 1000064,
    customer_id: 23,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000065,
    customer_id: 23,
    transaction_date: "2022-02-01",
    payment_mode: "online",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000066,
    customer_id: 23,
    transaction_date: "2022-04-01",
    payment_mode: "online",
    payment_month: "2022-04-01",
  },
  {
    transaction_id: 1000067,
    customer_id: 24,
    transaction_date: "2022-01-01",
    payment_mode: "offline",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000068,
    customer_id: 24,
    transaction_date: "2022-02-01",
    payment_mode: "offline",
    payment_month: "2022-02-01",
  },
  {
    transaction_id: 1000069,
    customer_id: 24,
    transaction_date: "2022-04-01",
    payment_mode: "offline",
    payment_month: "2022-04-01",
  },
  {
    transaction_id: 1000070,
    customer_id: 25,
    transaction_date: "2022-01-01",
    payment_mode: "online",
    payment_month: "2022-01-01",
  },
  {
    transaction_id: 1000071,
    customer_id: 25,
    transaction_date: "2022-03-01",
    payment_mode: "online",
    payment_month: "2022-03-01",
  },
  {
    transaction_id: 1000072,
    customer_id: 25,
    transaction_date: "2022-05-01",
    payment_mode: "online",
    payment_month: "2022-05-01",
  },
];

export default function View() {
  // TODO Before build, remove comments and delete variable and check fetchData, remove console logs
  // const [paymentsData, setPaymentsData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://workers.tornarselectnet.workers.dev/api/view/payments_data"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setPaymentsData(data.results);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div>
      <Heading title="Payments Data" />
      <Table data={paymentsData} />
    </div>
  );
}
