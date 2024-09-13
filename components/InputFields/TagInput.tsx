import React, { useEffect, useState } from "react";

const TagsInput = ({ onTagsChange }: any) => {
  const [tags, setTags] = useState(["T-Shirt", "Men Clothes"]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && inputValue) {
      e.preventDefault();
      if (!tags.includes(inputValue)) {
        setTags([...tags, inputValue]);
        setInputValue("");
      }
    }
  };
  useEffect(() => {
    onTagsChange?.(tags);
  }, [tags]);
  const handleDelete = (indexToRemove: any) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col">
      <h4 className="mb-2">Tags</h4>
      <div className="flex flex-wrap border border-gray-300 p-2 rounded-md">
        {tags.map((tag, index) => (
          <div
            className="bg-gray-200 rounded-md px-2 py-1 mr-2 mb-2 flex items-center"
            key={index}
          >
            {tag}
            <span
              className="ml-2 cursor-pointer"
              onClick={() => handleDelete(index)}
            >
              x
            </span>
          </div>
        ))}
        <input
          className="border-none outline-none flex-1"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter tag name"
        />
      </div>
    </div>
  );
};

export default TagsInput;
