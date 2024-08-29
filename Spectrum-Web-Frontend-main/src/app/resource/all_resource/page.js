"use client";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const openSanBold = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});

const openSanRegular = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});

export default function Page() {
  const params = useSearchParams();
  const catId = params?.get("id");
  const [groupedArticles, setGroupedArticles] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (catId) {
      setLoading(true);
      fetch(
        `https://landing-pages-shoshin-tech.onrender.com/api/v1/articals?id=${catId}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const activeArticles = data?.data.filter(
            (article) => article.status === "ACTIVE"
          );
          const grouped = activeArticles?.reduce((acc, article) => {
            const categoryName = article.category.name;
            if (!acc[categoryName]) {
              acc[categoryName] = [];
            }
            acc[categoryName].push(article);
            return acc;
          }, {});
          setLoading(false);
          setGroupedArticles(grouped);
        })
        .catch((error) => {
          setLoading(false);
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);

    // Add ordinal suffix to day
    const day = date.getDate();
    const ordinalSuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${ordinalSuffix(day)} ${formattedDate.replace(day, "")}`;
  };

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  return (
    <div>
      <Header />
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-[#6665DD]"></div>
        </div>
      ) : (
        <div className="min-h-screen py-10 md:px-20">
          <div className="flex flex-col gap-8">
            {Object.entries(groupedArticles).map(([categoryName, articles]) => (
              <div key={categoryName}>
                <div className="flex justify-between items-center px-5 md:px-0 md:pr-12">
                  <h2
                    className={`text-[#595D62] text-[16px] md:text-[20px] ${openSanBold.className}  `}
                  >
                    {categoryName}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 5xl:grid-cols-7 gap-5 mt-8 md:mx-auto">
                  {articles.map((item) => (
                    <Box
                      className="px-5 sm:px-0"
                      key={item.id}
                      sx={{
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <Card
                        sx={{
                          maxWidth: 600,
                          borderRadius: "10px",
                        }}
                        className="shadow-none css-1njj0mv-MuiPaper-root-MuiCard-root"
                      >
                        <Link
                          href={`/resource/resource_details?catId=${item?.catId}&id=${item?.id}`}
                          target="_blank"
                        >
                          <CardMedia
                            sx={{ height: 180 }}
                            image={item.img}
                            title={item.title}
                            className="rounded-xl"
                          />
                        </Link>
                        <CardContent
                          sx={{ padding: "16px" }}
                          className="padding-card"
                        >
                          <Link
                            href={`/resource/resource_details?catId=${item?.catId}&id=${item?.id}`}
                            target="_blank"
                          >
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                              className={`${openSanBold.className} `}
                              sx={{
                                fontSize: "14px",
                                lineHeight: "24px",
                                fontWeight: "700",
                                color: "#262626",
                              }}
                            >
                              <p className="hidden md:flex">
                                {truncateTitle(item?.title, 35)}
                              </p>
                              <p className="flex md:hidden">
                                {truncateTitle(item?.title, 43)}
                              </p>
                            </Typography>
                          </Link>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className={`${openSanRegular.className} whitespace-nowrap`}
                            sx={{
                              fontSize: "12px",
                              lineHeight: "18px",
                              color: "#595D62",
                              marginBottom: "10px",
                            }}
                          >
                            {item?.cardDesc.slice(0, 45)}...
                          </Typography>
                          <Typography
                            variant="caption"
                            display="block"
                            sx={{
                              fontSize: "12px",
                              color: "#9E9E9E",
                            }}
                          >
                            Published on {formatDate(item?.createAt)}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
