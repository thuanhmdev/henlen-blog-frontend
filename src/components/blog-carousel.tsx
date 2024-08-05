"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

import Slider, { Settings } from "react-slick";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="bg-blue-500/50 p-1 rounded-md absolute left-10 top-[120px] z-10"
      onClick={onClick}
    >
      <ChevronLeft className="text-neutral-50" />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="bg-blue-500/50 p-1 rounded-md absolute right-10 top-[120px]"
      onClick={onClick}
    >
      <ChevronRight className="text-neutral-50" />
    </button>
  );
};

const BlogCarousel = () => {
  const router = useRouter();
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleNavigate = (slug: string, title: string) => {
    router.push(`/blog/${slug}?title=${title}`, { scroll: false });
  };
  return (
    <div className="overflow-hidden rounded-lg">
      <Slider {...settings}>
        <div
          className="w-full h-[300px] bg-red-500 p-2 cursor-pointer "
          onClick={() => handleNavigate("abc", "asfff-ffff")}
        >
          <div className="h-full flex flex-col justify-center items-center ">
            <h3 className="text-3xl font-bold">
              Top 5 cách trị mụn hiệu quả 1
            </h3>
            <div className="flex">
              <p>Tuyen</p> {` * `} <p>31/7/2024</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] bg-red-500 p-2">
          <div className="h-full flex flex-col justify-center items-center ">
            <h3 className="text-3xl font-bold">
              Top 5 cách trị mụn hiệu quả 2
            </h3>
            <div className="flex">
              <p>Tuyen</p> {` * `} <p>31/7/2024</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BlogCarousel;
