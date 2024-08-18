import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Open_Sans } from "next/font/google";
import React from "react";

const openSan = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});
const openSans = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});
export default function page() {
  return (
    <div className="min-h-screen py-10 md:px-20">
      <div className="mb-10">
        <h1
          className={`text-[#262626] text-xl md:text-3xl ${openSan.className} ml-4 md:ml-0`}
        >
          Resources
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center px-5 md:px-0 md:pr-12">
            <h2
              className={`text-[#595D62] text-md md:text-xl ${openSan.className}`}
            >
              Artificial Intelligence for Educators
            </h2>
            <h2
              className={`text-[#6665DD] text-[12px] md:text-sm ${openSan.className}`}
            >
              See all
            </h2>
          </div>
          <div className="flex flex-row gap-7 mx-auto overflow-x-scroll scroll whitespace-nowrap scroll-smooth w-full scrollbar-hide">
            <div className="w-[500px]">
              <Card sx={{ maxWidth: 345 }} className="shadow-none">
                <CardMedia
                  sx={{ height: 180 }}
                  image="/img/resource1.png"
                  title="green iguana"
                  className="rounded-xl"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="w-[500px]">
              <Card sx={{ maxWidth: 345 }} className="shadow-none">
                <CardMedia
                  sx={{ height: 180 }}
                  image="/img/resource1.png"
                  title="green iguana"
                  className="rounded-xl"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="w-[500px]">
              <Card sx={{ maxWidth: 345 }} className="shadow-none">
                <CardMedia
                  sx={{ height: 180 }}
                  image="/img/resource1.png"
                  title="green iguana"
                  className="rounded-xl"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="w-[500px]">
              <Card sx={{ maxWidth: 345 }} className="shadow-none">
                <CardMedia
                  sx={{ height: 180 }}
                  image="/img/resource1.png"
                  title="green iguana"
                  className="rounded-xl"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="w-[500px]">
              <Card sx={{ maxWidth: 345 }} className="shadow-none">
                <CardMedia
                  sx={{ height: 180 }}
                  image="/img/resource1.png"
                  title="green iguana"
                  className="rounded-xl"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="w-[500px]">
              <Card sx={{ maxWidth: 345 }} className="shadow-none">
                <CardMedia
                  sx={{ height: 180 }}
                  image="/img/resource1.png"
                  title="green iguana"
                  className="rounded-xl"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center px-5 md:px-0 md:pr-12">
            <h2
              className={`text-[#595D62] text-md md:text-xl ${openSan.className}`}
            >
              Gig Economy of Educators
            </h2>
            <h2
              className={`text-[#6665DD] text-[12px] md:text-sm ${openSan.className}`}
            >
              See all
            </h2>
          </div>
          <div className="flex flex-row gap-7 mx-auto overflow-x-scroll scroll whitespace-nowrap scroll-smooth w-full scrollbar-hide">
            <div className="w-[500px]">
              <Card sx={{ maxWidth: 345 }} className="shadow-none">
                <CardMedia
                  sx={{ height: 180 }}
                  image="/img/resource1.png"
                  title="green iguana"
                  className="rounded-xl"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="w-[500px]">
              <Card sx={{ maxWidth: 345 }} className="shadow-none">
                <CardMedia
                  sx={{ height: 180 }}
                  image="/img/resource1.png"
                  title="green iguana"
                  className="rounded-xl"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="w-[500px]">
              <Card sx={{ maxWidth: 345 }} className="shadow-none">
                <CardMedia
                  sx={{ height: 180 }}
                  image="/img/resource1.png"
                  title="green iguana"
                  className="rounded-xl"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="w-[500px]">
              <Card sx={{ maxWidth: 345 }} className="shadow-none">
                <CardMedia
                  sx={{ height: 180 }}
                  image="/img/resource1.png"
                  title="green iguana"
                  className="rounded-xl"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="w-[500px]">
              <Card sx={{ maxWidth: 345 }} className="shadow-none">
                <CardMedia
                  sx={{ height: 180 }}
                  image="/img/resource1.png"
                  title="green iguana"
                  className="rounded-xl"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="w-[500px]">
              <Card sx={{ maxWidth: 345 }} className="shadow-none">
                <CardMedia
                  sx={{ height: 180 }}
                  image="/img/resource1.png"
                  title="green iguana"
                  className="rounded-xl"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
