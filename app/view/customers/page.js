"use client";

import Heading from "@/app/(components)/Heading";
import Table from "../../(components)/Table";
import { useState, useEffect } from "react";

let customersData = {
  results: [
    {
      customer_id: 1,
      cabin: 1,
      name: "Amit Singh",
      email: "amit.singh@example.com",
      phone: "9876543210",
      gender: "male",
    },
    {
      customer_id: 2,
      cabin: 2,
      name: "Neha Patel",
      email: "neha.patel@example.com",
      phone: "9876543211",
      gender: "female",
    },
    {
      customer_id: 3,
      cabin: 3,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@example.com",
      phone: "9876543212",
      gender: "male",
    },
    {
      customer_id: 4,
      cabin: 4,
      name: "Deepika Singh",
      email: "deepika.singh@example.com",
      phone: "9876543213",
      gender: "female",
    },
    {
      customer_id: 5,
      cabin: 5,
      name: "Alok Sharma",
      email: "alok.sharma@example.com",
      phone: "9876543214",
      gender: "male",
    },
    {
      customer_id: 6,
      cabin: 6,
      name: "Sonia Chauhan",
      email: "sonia.chauhan@example.com",
      phone: "9876543215",
      gender: "female",
    },
    {
      customer_id: 7,
      cabin: 7,
      name: "Vivek Dubey",
      email: "vivek.dubey@example.com",
      phone: "9876543216",
      gender: "male",
    },
    {
      customer_id: 8,
      cabin: 8,
      name: "Kavita Mehta",
      email: "kavita.mehta@example.com",
      phone: "9876543217",
      gender: "female",
    },
    {
      customer_id: 9,
      cabin: 9,
      name: "Amitabh Singh",
      email: "amitabh.singh@example.com",
      phone: "9876543218",
      gender: "male",
    },
    {
      customer_id: 10,
      cabin: 10,
      name: "Sneha Nair",
      email: "sneha.nair@example.com",
      phone: "9876543219",
      gender: "female",
    },
    {
      customer_id: 11,
      cabin: 11,
      name: "Alok Gupta",
      email: "alok.gupta@example.com",
      phone: "9876543220",
      gender: "male",
    },
    {
      customer_id: 12,
      cabin: 12,
      name: "Rashmi Shah",
      email: "rashmi.shah@example.com",
      phone: "9876543221",
      gender: "female",
    },
    {
      customer_id: 13,
      cabin: 13,
      name: "Raj Kumar",
      email: "raj.kumar@example.com",
      phone: "9876543222",
      gender: "male",
    },
    {
      customer_id: 14,
      cabin: 14,
      name: "Rekha Singh",
      email: "rekha.singh@example.com",
      phone: "9876543223",
      gender: "female",
    },
    {
      customer_id: 15,
      cabin: 15,
      name: "Abhishek Jain",
      email: "abhishek.jain@example.com",
      phone: "9876543224",
      gender: "male",
    },
    {
      customer_id: 16,
      cabin: 16,
      name: "Meena Patel",
      email: "meena.patel@example.com",
      phone: "9876543225",
      gender: "female",
    },
    {
      customer_id: 17,
      cabin: 17,
      name: "Sanjay Kumar",
      email: "sanjay.kumar@example.com",
      phone: "9876543226",
      gender: "male",
    },
    {
      customer_id: 18,
      cabin: 18,
      name: "Shweta Singh",
      email: "shweta.singh@example.com",
      phone: "9876543227",
      gender: "female",
    },
    {
      customer_id: 19,
      cabin: 19,
      name: "Arun Mehta",
      email: "arun.mehta@example.com",
      phone: "9876543228",
      gender: "male",
    },
    {
      customer_id: 20,
      cabin: 20,
      name: "Preeti Sharma",
      email: "preeti.sharma@example.com",
      phone: "9876543229",
      gender: "female",
    },
    {
      customer_id: 21,
      cabin: 21,
      name: "Suresh Dubey",
      email: "suresh.dubey@example.com",
      phone: "9876543230",
      gender: "male",
    },
    {
      customer_id: 22,
      cabin: 22,
      name: "Megha Shah",
      email: "megha.shah@example.com",
      phone: "9876543231",
      gender: "female",
    },
    {
      customer_id: 23,
      cabin: 23,
      name: "Anil Kumar",
      email: "anil.kumar@example.com",
      phone: "9876543232",
      gender: "male",
    },
    {
      customer_id: 24,
      cabin: 24,
      name: "Ruchi Singh",
      email: "ruchi.singh@example.com",
      phone: "9876543233",
      gender: "female",
    },
    {
      customer_id: 25,
      cabin: 25,
      name: "Manoj Gupta",
      email: "manoj.gupta@example.com",
      phone: "9876543234",
      gender: "male",
    },
  ],
  success: true,
  meta: {
    duration: 8.238646000623703,
    last_row_id: 0,
    changes: 0,
    served_by: "SinglePrimary-bdcce3ba-ece4-4d89-92bc-612a3bcbc53d.db3",
    internal_stats: null,
  },
};

export default function View() {
  // TODO Before build, remove comments and delete variable and check fetchData, remove console logs
  // const [customersData, setCustomersData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://workers.tornarselectnet.workers.dev/api/view/customers_data"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setCustomersData(data.results);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div>
      <Heading title="Customers Data" />
      <Table data={customersData} />
    </div>
  );
}
