export async function uploadFile(file) {
  try {
    const body = new FormData();
    body.append("file", file);

    // TO DO: call the /file/upload api
    const ret = await fetch("https://tmpfiles.org/api/v1/upload", {
      method: "POST",
      body: body,
    });
    return (await ret.json()).data.url.replace(
      "tmpfiles.org/",
      "tmpfiles.org/dl/"
    );
  } catch (error) {
    console.log(error);
  }
}
