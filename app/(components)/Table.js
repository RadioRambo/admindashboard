export default function Table({ data }) {
  return (
    <div className="overflow-x-scroll">
      <table className="">
        <thead className="bg-foreground">
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                scope="col"
                className="px-6 py-2 text-left text-base font-semibold text-black uppercase tracking-widest"
              >
                {key}
              </th>
            ))}
            <th
              scope="col"
              className="px-6 py-2 text-left text-base font-semibold text-black uppercase tracking-widest"
            >
              Modal
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-neutral-100" : ""}>
              {Object.values(row).map((value) => (
                <td
                  key={value}
                  className="px-6 py-3 whitespace-nowrap font-medium text-base"
                >
                  {value}
                </td>
              ))}
              <td className="px-6 py-3 whitespace-nowrap font-medium text-base">
                <button>Open</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

