import Image from "next/image";
import Scarecrow from "../../public/Scarecrow.png";

import { Inconsolata, Space_Mono, Montserrat } from "@next/font/google";

const inconsolata = Inconsolata({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

const space_mono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const montserrat = Montserrat({ subsets: ["latin"] });

export default function notFoundChallenge() {
  return (
    <div className="flex h-screen flex-col justify-between px-6 md:px-20">
      <div className={`${inconsolata.className} mt-5 text-2xl md:mt-10`}>
        404 NOT FOUND
      </div>
      <div className="flex grow flex-col pt-6 md:grow-0 md:flex-row md:gap-[120px] md:pt-0">
        <Image
          src={Scarecrow}
          alt={"scarecrow 404 not found"}
          className={"mx-auto h-auto w-[286px] md:w-[540px]"}
        />
        <div className="flex grow flex-col justify-evenly md:grow-0 md:justify-between">
          <div
            className={`${space_mono.className} text-5xl font-bold md:text-[64px]`}
          >
            I have bad news for you
          </div>
          <div className={`${space_mono.className} text-[18px]`}>
            The page you are looking for might be removed or is temporarily
            unavailable
          </div>
          <button
            className={`${space_mono.className} w-52 bg-[#333] px-8 py-6 text-sm text-white`}
          >
            BACK TO HOMEPAGE
          </button>
        </div>
      </div>
      <div
        className={`${montserrat.className} pb-6 text-center text-sm font-medium text-[#BDBDBD]`}
      >
        created by <span className="font-bold underline">jiantengtoo</span> -
        devChallenges.io
      </div>
    </div>
  );
}
