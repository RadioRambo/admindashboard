import Heading from "./(components)/Heading";
import Tiles from "./(components)/Tiles";

export default function Home() {
  return (
    <div
      className="  px-2 md:px-20
"
    >
      <div>
        <Heading heading="Dashboard" />

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-8 lg:grid-cols-3 gap-y-4 w-full">
          <div className="col-span-2 lg:col-span-1">
            <Tiles smallText="Total Cabins" bigText="100" />
          </div>
          <Tiles smallText="Filled Cabins" bigText="53" />
          <Tiles smallText="Empty Cabins" bigText="47" />

          <Tiles smallText="Payments Clear" bigText="30" />
          <Tiles smallText="Payments Due" bigText="23" />
        </div>
      </div>

      <div />

      <div>
        <Heading heading="Actions" />
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-8 lg:grid-cols-3 gap-y-4 w-full">
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
