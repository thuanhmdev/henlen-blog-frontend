"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <header className="sticky top-0 z-[11] bg-white shadow-md py-4">
        <div className="container flex justify-between">
          <Image
            width={120}
            height={120}
            src={"/images/example.png"}
            alt="facebook"
            className="hover:scale-[1.1] transition-all ease-in-out duration-250"
          />
          <ul className="flex flex-wrap items-center gap-4 m-0 text-lg lg:text-xl xl:text-2xl">
            <li>
              <a href="#">
                <Image
                  width={25}
                  height={25}
                  src={"/images/facebook.svg"}
                  alt="facebook"
                  className="hover:scale-[1.1] transition-all ease-in-out duration-250"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  width={25}
                  height={25}
                  src={"/images/instagram.svg"}
                  alt="instagram"
                  className="hover:scale-[1.1] transition-all ease-in-out duration-250"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  width={25}
                  height={25}
                  src={"/images/zalo.svg"}
                  alt="zalo"
                  className="hover:scale-[1.1] transition-all ease-in-out duration-250"
                />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
