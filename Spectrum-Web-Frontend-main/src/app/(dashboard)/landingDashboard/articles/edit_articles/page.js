"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector } from "react-redux";

export default function Page() {
  const user = useSelector((state) => state.auth.user);
  const params = useSearchParams();
  const articleId = params?.get("id");
  const [categories, setCategories] = useState([]);
  const [customCat, setCustomCat] = useState("");
  const [editorData, setEditorData] = useState("");
  const [title, setTitle] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [status, setStatus] = useState("");
  const [existingCoverPhoto, setExistingCoverPhoto] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/articals/get-all-categories",
          {
            method: "GET",
            headers: {
              Authorization: `${user?.data?.accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setCategories(result?.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCategories();
  }, [articleId, user?.data?.accessToken]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/v1/articals/artical-details/${articleId}`,
          {
            method: "GET",
            headers: {
              Authorization: `${user?.data?.accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }

        const data = await response.json();
        setTitle(data?.data?.title);
        setSelectedCategory(data?.data?.catId);
        setStatus(data?.data?.status);
        setEditorData(data?.data?.description);
        setExistingCoverPhoto(data?.data?.img); // Set the existing cover photo
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
    if (articleId) {
      fetchArticle();
    }
  }, [articleId]);
  const handleAdd = async () => {
    if (!customCat.trim()) {
      console.error("Category name cannot be empty");
      return;
    }

    const payload = { name: customCat };

    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/articals/create-category",
        {
          method: "POST",
          headers: {
            Authorization: `${user?.data?.accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create category");
      }

      const data = await response.json();
      setCategories([...categories, data]);
      setCustomCat("");
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  const handleEdit = async () => {
    if (!title || !selectedCategory || !status || !editorData) {
      console.error("Please fill in all fields");
      return;
    }

    const payload = {
      title: title,
      catId: selectedCategory,
      status: status,
      description: editorData,
      email: user?.data?.getUser?.email,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));
    if (coverPhoto) {
      formData.append("file", coverPhoto);
    }

    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/articals/edit-artical/${articleId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `${user?.data?.accessToken}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update article");
      }

      const data = await response.json();
      console.log("Article updated successfully:", data);
      // Optionally, reset form or navigate away
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  return (
    <div className="md:px-20">
      <h1 className="text-2xl font-bold">Edit Article</h1>
      <div className="mt-10 grid grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label>Title</label>
          <input
            type="text"
            placeholder="title"
            className="border-2 px-4 py-1 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>Cover photo</label>
          <input
            type="file"
            className="border-2 px-4 py-1 rounded-md"
            onChange={(e) => setCoverPhoto(e.target.files[0])}
          />
        </div>
        <div className="flex flex-col">
          <label>Category</label>
          <select
            className="border-2 py-1 px-2 rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>Select category</option>
            {categories?.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-2 mt-3">
            <input
              type="text"
              placeholder="add category"
              value={customCat}
              onChange={(e) => setCustomCat(e.target.value)}
              className="w-[150px] border-2 px-4 py-1 rounded-md"
            />
            <button
              type="submit"
              onClick={handleAdd}
              className="bg-[#6665DD] text-white px-2 rounded-md py-1 cursor-pointer"
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Status</label>
          <select
            className="border-2 py-1 px-2 rounded-md"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Select Status</option>
            <option value="INACTIVE">Inactive</option>
            <option value="ACTIVE">Active</option>
          </select>
        </div>
      </div>
      <div className="mt-10 mb-5">
        <CKEditor
          editor={ClassicEditor}
          data={editorData ? editorData : ""}
          onChange={handleEditorChange}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
              "imageUpload",
              "undo",
              "redo",
            ],
          }}
        />
      </div>
      <div className="mb-10">
        <button
          className="bg-[#6665DD] text-white px-8 rounded-md py-2"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
