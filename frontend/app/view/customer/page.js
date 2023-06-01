"use client";

import Heading from "@/app/(components)/Heading";
import Table from "../../(components)/Table";
import { useState, useEffect } from "react";

export default function ViewCustomer() {
  const [customersData, setCustomersData] = useState([
    {
      customer_id: undefined,
      cabin: undefined,
      name: undefined,
      email: undefined,
      phone: undefined,
      gender: undefined,
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://a6kbmv3x3pjass8qn2fu76wqydvtvh.tornarselectnet.workers.dev/api/view/customers"
      );
      const data = await response.json();
      setCustomersData(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Heading title="Customers Data" />
      <Table data={customersData} />
    </div>
  );
}
