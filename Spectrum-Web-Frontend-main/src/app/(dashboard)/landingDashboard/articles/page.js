import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      articles
      <Link
        href="/landingDashboard/articles/create_articles"
        className="hover:text-blue-500"
      >
        {" "}
        create articles
      </Link>
    </div>
  );
}
