import React, { useState, useEffect } from "react";
import { getLinkPreview } from "link-preview-js";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Skeleton,
  CardMedia,
  Link,
} from "@mui/material";
import CustomTypography from "../common/CustomTypography";

const TitleDescriptionLink = ({ title, description, url, showUrl }) => (
  <>
    <CustomTypography variant="h6" fontWeight={"bold"}>
      {title}
    </CustomTypography>
    <CustomTypography variant="body1" color="text.secondary">
      {description}
    </CustomTypography>
    {showUrl && (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textWrap: "wrap" }}
      >
        {url}
      </Link>
    )}
  </>
);

const PreviewImage = ({ image, title, variant }) => (
  <>
    {variant === "standard" && image && (
      <CardMedia component="img" height="140" image={image} alt={title} />
    )}
    {variant === "side-by-side" && image && (
      <CardMedia
        component="img"
        className="h-auto object-cover"
        style={{ maxWidth: "100px" }}
        image={image}
        alt={title}
      />
    )}
  </>
);

const LinkPreviewSkeleton = ({ variant }) => {
  switch (variant) {
    case "side-by-side":
      return (
        <Card className="w-full max-w-md rounded-lg shadow-lg mt-4 flex">
          <CardContent className="flex-1">
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="80%" />
          </CardContent>
          <Skeleton variant="rectangular" width={100} height={100} />
        </Card>
      );
    case "text-only":
      return (
        <Card className="w-full max-w-md rounded-lg shadow-lg mt-4">
          <CardContent>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="80%" />
          </CardContent>
        </Card>
      );
    case "standard":
    default:
      return (
        <Card className="w-full max-w-md rounded-lg shadow-lg mt-4">
          <Skeleton variant="rectangular" height={140} />
          <CardContent>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="100%" />
          </CardContent>
        </Card>
      );
  }
};

const LinkPreview = ({ url, variant = "standard", showUrl = false }) => {
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchPreview = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getLinkPreview(url);
        setPreviewData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPreview();
  }, [url]);

  if (loading) return <LinkPreviewSkeleton variant={variant} />;
  if (error)
    return (
      <Card className="w-full max-w-md rounded-lg shadow-lg mt-4">
        <CardContent>
          <CustomTypography
            variant="h6"
            fontWeight={"bold"}
            color="error"
          >
            Error loading link preview
          </CustomTypography>
          <CustomTypography variant="body2" color="text.secondary">
            {error?.replace("link-preview-js", "")}
          </CustomTypography>
        </CardContent>
      </Card>
    );
  if (!previewData) return null;

  return (
    <Card className="w-full max-w-md rounded-lg shadow-lg mt-4">
      <Box
        className={`flex ${
          variant === "side-by-side" ? "flex-row" : "flex-col"
        }`}
      >
        {variant === "side-by-side" && (
          <Box className="flex-1 p-4">
            <TitleDescriptionLink
              title={previewData.title}
              description={previewData.description}
              url={previewData.url}
              showUrl={showUrl}
            />
          </Box>
        )}
        <PreviewImage
          image={previewData.images?.[0]}
          title={previewData.title}
          variant={variant}
        />
        {variant !== "side-by-side" && (
          <CardContent>
            <TitleDescriptionLink
              title={previewData.title}
              description={previewData.description}
              url={previewData.url}
              showUrl={showUrl}
            />
          </CardContent>
        )}
      </Box>
    </Card>
  );
};

export default LinkPreview;
