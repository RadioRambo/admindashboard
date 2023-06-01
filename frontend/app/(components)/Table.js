export default function Table({ data }) {
  return (
    <div className="overflow-x-scroll">
      <table className="min-w-full">
        <thead className="bg-foreground">
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                scope="col"
                className="px-6 py-2 text-base font-semibold tracking-widest text-left text-black uppercase"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map((row) => (
            <tr
              key={Object.values(row)[0]}
              className={row.customer_id % 2 === 1 ? "bg-neutral-100" : ""}
            >
              {Object.values(row).map((value, index) => (
                <td
                  key={index}
                  className="px-6 py-3 text-base whitespace-nowrap"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
