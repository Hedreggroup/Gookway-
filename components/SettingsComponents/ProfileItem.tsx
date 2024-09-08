import StatusComponent from "../StatusComponent";

export const ProfileItem = (name: string, value: string, isGrey = true) => {
  console.log("BOOL", typeof value === "boolean");
  return (
    <div
      className={`rounded-lg py-4 px-3 w-full items-center grid grid-cols-3 justify-evenly ${
        isGrey ? "bg-gray-50" : "bg-white"
      }`}
    >
      <span className="uppercase text-gray-500">{name}</span>
      <span>|</span>
      <span className="font-medium">
        {typeof value === "boolean" ? <StatusComponent value={value} /> : value}
      </span>
    </div>
  );
};
