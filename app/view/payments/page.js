"use client";

import Heading from "@/app/(components)/Heading";
import Table from "../../(components)/Table";
import { useState, useEffect } from "react";

export default function View() {
  const [paymentsData, setPaymentsData] = useState([
    {
      transaction_id: undefined,
      customer_id: undefined,
      transaction_date: undefined,
      payment_mode: undefined,
      payment_month: undefined,
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://workers.tornarselectnet.workers.dev/api/view/payments_data"
      );
      const data = await response.json();
      console.log(data);
      setPaymentsData(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Heading title="Payments Data" />
      <Table data={paymentsData} />
    </div>
  );
}
