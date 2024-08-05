import React from "react";

interface TProps {
  params: {
    slug: string;
  };
}
const page = ({ params }: TProps) => {
  return <div className="container">{params.slug}</div>;
};

export default page;
