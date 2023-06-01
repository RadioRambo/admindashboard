"use client";
import Heading from "./(components)/Heading";
import Tiles from "./(components)/Tiles";

import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [customerNumbers, setCustomerNumbers] = useState({
    filledCabins: 0,
    emptyCabins: 0,
  });
  const [paymentNumbers, setPaymentNumbers] = useState({
    paymentsdue: 0,
  });

  async function fetchData() {
    try {
      const response = await fetch(
        "https://a6kbmv3x3pjass8qn2fu76wqydvtvh.tornarselectnet.workers.dev/api/view/customers"
      );
      const data = await response.json();
      return data.results;
    } catch (e) {
      console.log(e);
    }
  }
  async function fetchPaymentDue() {
    try {
      const response = await fetch(
        "https://a6kbmv3x3pjass8qn2fu76wqydvtvh.tornarselectnet.workers.dev/api/duepayments"
      );
      const data = await response.json();
      return data.results;
    } catch (e) {
      console.log(e);
    }
  }
  const totalCabins = 100;

  useEffect(() => {
    fetchData().then((data) => {
      setCustomerNumbers({
        filledCabins: data.length,
        emptyCabins: totalCabins - data.length,
      });
      fetchPaymentDue().then((data) => {
        setPaymentNumbers({
          paymentsdue: data[0].unique_customers,
        });
      });
    });
  }, []);
  return (
    <div className="px-2 md:px-20">
      <div>
        <Heading heading="Dashboard" />

        <div className="grid grid-cols-2 gap-y-4 gap-x-8 w-full sm:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2 lg:col-span-1">
            <Tiles smallText="Total Cabins" bigText={totalCabins} />
          </div>
          <Tiles
            smallText="Filled Cabins"
            bigText={customerNumbers.filledCabins}
          />
          <Tiles
            smallText="Empty Cabins"
            bigText={customerNumbers.emptyCabins}
          />

          <Tiles
            smallText="Payments Clear"
            bigText={customerNumbers.filledCabins - paymentNumbers.paymentsdue}
          />
          <Tiles
            smallText="Payments Due"
            bigText={paymentNumbers.paymentsdue}
          />
        </div>
      </div>

      <div />

      <div>
        <Heading heading="Actions" />
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 w-full sm:grid-cols-2 lg:grid-cols-3">
          <div className="lg:order-1">
            <Tiles
              smallText="Customer Data"
              bigText="Add"
              url="./add/customer"
            />
          </div>
          <div className="lg:order-4">
            <Tiles smallText="Payment Data" bigText="Add" url="./add/payment" />
          </div>
          <div className="lg:order-2">
            <Tiles
              smallText="Customer Data"
              bigText="View"
              url="./view/customer"
            />
          </div>
          <div className="lg:order-5">
            <Tiles
              smallText="Payment Data"
              bigText="View"
              url="./view/payment"
            />
          </div>
          <div className="lg:order-3">
            <Tiles
              smallText="Customer Data"
              bigText="Modify"
              url="./modify/customer"
            />
          </div>
          <div className="lg:order-6">
            <Tiles
              smallText="Payment Data"
              bigText="Modify"
              url="./modify/payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
