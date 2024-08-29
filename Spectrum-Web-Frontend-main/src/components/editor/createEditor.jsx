"use client";
import BlocknoteEditor from "@/lib/blocknote/components/BlocknoteEditor";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function CreateEditor() {
  const user = useSelector((state) => state.auth.user);
  const [categories, setCategories] = useState([]);
  const [customCat, setCustomCat] = useState("");
  const [editorData, setEditorData] = useState("");
  const [title, setTitle] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [status, setStatus] = useState("");
  const [cardDes, setCardDes] = useState("");
  const [loading, setLoading] = useState(false);
  const [coverPhotoPreview, setCoverPhotoPreview] = useState(null);

  const hanldeText = (text) => {
    setCardDes(text);
  };
  const handleChangeHtml = (html) => {
    setEditorData(html);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://landing-pages-shoshin-tech.onrender.com/api/v1/articals/get-all-categories",
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
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };

    fetchData();
  }, [user?.data?.accessToken]);

  const handleAdd = async () => {
    if (!customCat.trim()) {
      console.error("Category name cannot be empty");
      return;
    }

    const payload = {
      name: customCat,
    };

    try {
      const response = await fetch(
        "https://landing-pages-shoshin-tech.onrender.com/api/v1/articals/create-category",
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

  const handleSubmit = async () => {
    if (!title || !coverPhoto || !selectedCategory || !status || !editorData) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    const payload = {
      title: title,
      catId: selectedCategory,
      status: status,
      cardDesc: cardDes,
      description: editorData,
      linkedin: linkedIn,
      email: user?.data?.getUser?.email,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));
    formData.append("file", coverPhoto);

    try {
      const response = await fetch(
        "https://landing-pages-shoshin-tech.onrender.com/api/v1/articals/create-artical",
        {
          method: "POST",
          headers: {
            Authorization: `${user?.data?.accessToken}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create article");
      }

      const data = await response.json();
      toast.success("Article created successfully:");
      setLoading(false);
      setTitle("");
      setLinkedIn("");
      setCoverPhoto(null);
      setSelectedCategory("");
      setStatus("");
      setEditorData("");
      setCoverPhotoPreview("");
    } catch (error) {
      toast.error("Error creating article");
      setLoading(false);
    }
  };
  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPhoto(file);
        setCoverPhotoPreview(reader.result); // Set the preview URL
      };
      reader.readAsDataURL(file);
    }
  };
  const initialContent = [
    {
      content: [
        {
          type: "text",
          text: "Hello",
          styles: {},
        },
      ],
      children: [],
    },
  ];

  return (
    <div>
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-[#6665DD]"></div>
        </div>
      ) : (
        <div className="md:px-20">
          <h1 className="text-2xl font-bold">Create Article</h1>
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
                <option value="INACTIVE">In Active</option>
                <option value="ACTIVE">Active</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>LinkedIn </label>
              <input
                type="text"
                placeholder="linkedin"
                className="border-2 px-4 py-1 rounded-md"
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Cover photo</label>
              {coverPhotoPreview && (
                <Image
                  src={coverPhotoPreview}
                  alt="cover preview"
                  className="rounded-2xl mb-2"
                  width={300}
                  height={10}
                />
              )}
              <input
                type="file"
                className="border-2 px-4 py-1 rounded-md"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="mt-10 mb-5">
            <BlocknoteEditor
              initialContent={initialContent}
              onChangeText={hanldeText}
              onChangeHtml={handleChangeHtml}
              showToolbar={true}
              onSave={() => console.log("Save clicked")}
            />
          </div>
          <div className="mb-10">
            <button
              className="bg-[#6665DD] text-white px-8 rounded-md py-2"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
