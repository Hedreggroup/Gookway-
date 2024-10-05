import { Icon } from "@iconify/react/dist/iconify.js";

const ShippingAddressItem = ({
  address = "",
  selectedAddress = "",
  onClick = () => {},
}) => {
  const name = address?.split(" ").slice(0, 2).join(" ");
  const phoneNumber = address?.split(" ")[2];
  const words = address?.split(" ");
  const remainingWords = words?.slice(3).join(" ");
  return (
    <>
      <Icon icon="fxemoji:radiobutton" className={`${"text-blue-200"}`} />
      <div
        className="border border-1 border-gray-100 rounded-lg p-2 flex flex-col gap-4"
        onClick={onClick}
      >
        <div className="flex items-start justify-between">
          <div className="">
            <span className="font-medium text-lg">{name ?? ""}</span>
            <p className="text-gray-400 text-sm">{phoneNumber ?? ""}</p>
          </div>
          {/* <span>
          {selectedAddress === address && (
            <Icon icon="emojione-v1:check-mark-button" />
          )}
        </span> */}
        </div>
        <div className="font-light text-gray-500">{remainingWords ?? ""}</div>
      </div>
      {selectedAddress === address && (
        <Icon
          icon="teenyicons:tick-circle-solid"
          className={`${"text-green-300 text-3xl"}`}
        />
      )}
    </>
  );
};
export default ShippingAddressItem;
