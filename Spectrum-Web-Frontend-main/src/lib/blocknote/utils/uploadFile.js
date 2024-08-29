export async function uploadFile(file) {
  try {
    const body = new FormData();
    body.append("contentFile", file);

    // Call the /file/upload API
    const res = await fetch(
      "https://landing-pages-shoshin-tech.onrender.com/api/v1/articals/getImgURL",
      {
        method: "POST",
        body: body,
      }
    );

    // Parse the JSON response
    const data = await res.json();

    // Return the modified URL
    return data.data;
  } catch (error) {
    console.log("Error:", error);
  }
}
