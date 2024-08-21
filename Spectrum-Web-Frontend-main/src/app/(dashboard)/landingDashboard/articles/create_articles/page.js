"use client";
import React, { useState, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import { TextField } from "@mui/material";

// Register the image resize module with Quill
Quill.register("modules/imageResize", ImageResize);

function imageHandler() {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = () => {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const quill = this.quill;
      const range = quill.getSelection();
      quill.insertEmbed(range.index, "image", e.target.result);
      quill.setSelection(range.index + 1);
    };

    reader.readAsDataURL(file);
  };
}

export default function Page() {
  const [value, setValue] = useState("");

  return (
    <div className="md:px-20">
      <h1 className="text-2xl font-bold">Create Article</h1>
      <div className="mt-10 grid grid-cols-2 gap-5">
        <div className="flex flex-col ">
          <label>Title</label>
          <input
            type="text"
            placeholder="title"
            className="border-2 px-4 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col ">
          <label>Cover photo</label>
          <input
            type="file"
            placeholder="upload file"
            className="border-2 px-4 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col ">
          <label>Category</label>
          <select className="border-2 py-1 px-2 rounded-md">
            <option>Select category</option>
          </select>
          <div className="flex items-center gap-2 mt-3">
            <input
              type="text"
              placeholder="add category"
              className="border-2 px-4 py-1 rounded-md"
            />
            <button className="bg-[#6665DD] text-white px-2 rounded-md py-1">
              Add
            </button>
          </div>
        </div>
        <div className="flex flex-col ">
          <label>Status</label>
          <select className="border-2 py-1 px-2 rounded-md">
            <option>Select Status</option>
          </select>
        </div>
      </div>
      <div className="mt-10 mb-20">
        <ReactQuill
          className="h-[60vh]"
          theme="snow"
          value={value}
          onChange={setValue}
          modules={{
            toolbar: {
              container: [
                [
                  { header: [1, 2, 3, 4, 5, 6] }, // All heading levels
                  { font: [] },
                ],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["link", "image", "video"],
                [{ align: [] }],
                ["clean"],
              ],
              handlers: {
                image: imageHandler,
              },
            },
            imageResize: { modules: ["Resize", "DisplaySize", "Toolbar"] },
          }}
          formats={[
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
            "indent",
            "link",
            "image",
            "video",
            "align",
          ]}
          placeholder="Write something awesome..."
        />
      </div>
      <div className="mb-10">
        <button className="bg-[#6665DD] text-white px-8 rounded-md py-2">
          Create
        </button>
      </div>
    </div>
  );
}
