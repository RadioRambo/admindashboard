"use client";

import Heading from "@/app/(components)/Heading";
import Table from "../../(components)/Table";
import { useState, useEffect } from "react";

export default function View() {
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
        "https://workers.tornarselectnet.workers.dev/api/view/customers_data"
      );
      const data = await response.json();
      console.log(data.results);
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
