"use client"

export default function Tiles (props) {
  // const [dashboardTileData, setDashboardTileData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (props.fetchDataUrl !== null && props.fetchDataUrl !== undefined) {
  //       try {
  //         console.log(props.fetchDataUrl);
  //         const response = await fetch(props.fetchDataUrl);
  //         const data = await response.json();
  //         const count = data.results[0]["count(*)"];
  //         setDashboardTileData(count);
  //       } catch (error) {
  //         console.error("Error fetching Dashboard Data", error);
  //       }
  //     }
  //   };

  //   fetchData();
  // }, [props.fetchDataUrl]);
  return (
    <a href={props.url}>
      <div className="rounded-md flex flex-col gap-2 p-4 sm:p-6  w-full h-full bg-foreground cursor-pointer ">
        <div className=" text-lg sm:text-2xl font-normal">{props.smallText}</div>
        <div className="font-semibold text-2xl sm:text-4xl">
          {props.bigText}
        </div>
      </div>
    </a>
  );
}
