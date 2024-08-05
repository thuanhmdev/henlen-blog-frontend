"use client";
import React from "react";
import Pagination, { PaginationProps } from "rc-pagination";

const BlogPagination = () => {
  const countPerPage = 10;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  //   const [collection, setCollection] = React.useState(
  //     cloneDeep(allData.slice(0, countPerPage))
  //   );

  const updatePage = (p: number) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    // setCollection(cloneDeep(allData.slice(from, to)));
  };

  return (
    <>
      <Pagination pageSize={1} onChange={updatePage} current={1} total={10} />
    </>
  );
};

export default BlogPagination;
