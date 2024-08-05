import React from "react";

import BlogCarousel from "@/components/blog-carousel";
import BlogList from "@/components/blog-list";
import { sendRequest } from "@/http/http";

const HomePage = async () => {
  // const chills = await sendRequest<TResponse<TBlog>>({
  //   url: "http://localhost:8000/api/v1/blog",
  //   method: "GET",
  //   body: {},
  //   queryParams: {
  //     size: 10,
  //     page: 1,
  //   },
  // });

  return (
    <div className="container py-3">
      <BlogCarousel />
      <BlogList />
    </div>
  );
};

export default HomePage;
