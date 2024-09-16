
export const formatDropdownOptions = (
  items: any[],
  defaultLabel: string = "Select Option",
  valueFrom = ''
) => {

  if (!items) return;
  return [
    { label: defaultLabel, value: "" }, // Default option
    ...items.map((item: any) => ({
      label: item.name,
      value: valueFrom ? item[valueFrom] : item._id ?? item?.id, // assuming '_id' is the unique identifier
    })),
  ];
};