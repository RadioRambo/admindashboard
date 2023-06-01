"use client";

export default function Tiles(props) {
  return (
    <a href={props.url}>
      <div className="flex flex-col gap-2 p-4 w-full h-full rounded-md cursor-pointer sm:p-6 bg-foreground">
        <div className="text-lg font-normal  sm:text-2xl">
          {props.smallText}
        </div>
        <div className="text-2xl font-semibold sm:text-4xl">
          {props.bigText}
        </div>
      </div>
    </a>
  );
}
