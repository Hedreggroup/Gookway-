
export const formatDropdownOptions = (
  items: any[],
  defaultLabel: string = "Select Option",
  valueFrom = ''
) => {

  if (!items) return;
  return [
    { label: defaultLabel, value: "" }, // Default option
    ...items.map((item: any) => {
      if (typeof item === "string") {
        return { label: item, value: item }; // Use the string itself as label and value
      }
      return {
        label: item.name,
        value: valueFrom ? item[valueFrom] : item._id ?? item?.id, // Handle object case
      };
    }),
  ];
};