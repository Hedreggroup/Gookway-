import whiteLogo from "@/app/assets/white-logo.png";

const GlassCard = ({ value, isGlassy }: any) => {
  return (
    <div className="flex justify-center space-x-2 mt-4 relative">
      <div className="atm-card atm-card-normal p-2 bg-red-500"></div>
      <div className="atm-card glassy duration-300 flex flex-col justify-between p-2 text-white">
        <div className="flex justify-between text-sm ">
          <div>
            <span>{"Account Balance"}</span>
            <div className="text-2xl font-bold">{value}</div>
          </div>
          <img src={`${whiteLogo}`} style={{ height: "40px" }} alt="" />
        </div>
        <div className="flex justify-between text-xs w-full " style={{}}>
          <p>{"Gookway Ltd."}</p>
          <p>
            {/* {<TimeFormatter.WithDateOnly time={new Date().toISOString()} />} */}
          </p>
        </div>
      </div>
    </div>
  );
};
export default GlassCard;
