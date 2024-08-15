import React from "react";

type BreadcrumbsProps = {
  items: { [key: string]: string };
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <ul className="w-[90%] m-auto flex gap-2 mt-10">
      {Object.entries(items).map(([key, value], index) => (
        <React.Fragment key={key}>
          <li className="text-gray-400 text-[16px]">{value}</li>
          {index !== Object.keys(items).length - 1 && (
            <li className="flex items-center">
              <div className="w-1 h-6 bg-gray-300 mx-1"></div>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
