"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from "react-icons/ai";

const TextArea = ({ label }: any) => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      //   [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      //   ["link", "image", "video"],
      ["clean"],
      [{ align: [] }],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    // "image",
    // "video",
    "align",
  ];

  return (
    <div className="relative my-2">
      {label && (
        <label
          htmlFor={label}
          className="block text-gray-700 text-sm font-light mb-2 capitalize"
        >
          {label + ":"}
        </label>
      )}
      <div className="">
        <ReactQuill
          value={value}
          onChange={setValue}
          modules={modules}
          //   formats={formats}
          theme="snow"
          placeholder="Write something amazing..."
          className="border border-gray-100 rounded-md shadow-sm"
        />
      </div>
    </div>
  );
};

export default TextArea;
