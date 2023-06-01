"use client";

import Heading from "@/app/(components)/Heading";
import Table from "../../(components)/Table";
import { useState, useEffect } from "react";

export default function ViewPayment() {
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
        "https://a6kbmv3x3pjass8qn2fu76wqydvtvh.tornarselectnet.workers.dev/api/view/payments"
      );
      const data = await response.json();
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
