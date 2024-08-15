"use client"
import NextLink from "next/link";
import Link from "@mui/material/Link";

const CustomLink = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Link component="span"  {...props}>
        {children}
      </Link>
    </NextLink>
  );
};

export default CustomLink;
