import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import myImage from "../../../../../public/images/hum/humHome.jpg";

const hum = () => {
  return (
    <div>
      <div className="text-foreground/65 flex justify-center">
        <div className="max-w-[1050px] border-t border-black/25  md:p-12 sm:p-8 p-4 w-full flex lg:flex-row flex-col justify-center items-center bg-foreground/5 lg:gap-24 md:gap-12 gap-7 rounded-b-lg">
          <div className="">
            <p className="lg:w-[450px] mt-5 md:text-lg text-foreground/55 ">
              <span className="text-lg font-bold">
                SELF-EXPLORATION (DAY 1-7) <br />
              </span>
              Watch daily video lessons, engage in journal prompts, fasting,
              breathwork, meditation. Utilize worksheets, readings, mindmaps.{" "}
              <br />
              <br />
              <span className="text-lg font-bold">
                HARMONIZE YOUR BEING (Day 8-14) <br />
              </span>
              Continue being immersed in fasting, video lessons, breathwork,
              meditation and Yoga. Manage stress, anxiety with our NOW method.{" "}
              <br />
              <br />
              <span className="text-lg font-bold">
                AWAKEN YOUR SPIRIT (DAYS 15-21)
                <br />
              </span>
              Conduct a sacred ceremony with either psychedelics of cocoa
              ceremony in the privacy of your home to begin heading from the
              past. <br />
              <br />
              <span className="text-lg font-bold">
                INTEGRATE AND EVOLVE (DAY 22-31)
                <br />
              </span>
              Navigage the integratioin phase of your psychedelic journey with
              grace, supported by our integration coach and other resources.{" "}
              <br />
              <br />
            </p>{" "}
            <Button
              asChild
              className="text-xl py-6 sm:w-auto w-full mt-3"
            >
              <Link href="/all-courses">PURCHASE NOW</Link>
            </Button>
          </div>
          <div className=" relative flex flex-col lg:gap-10 gap-5">
            <p className="md:text-5xl text-3xl lg:text-start text-center font-bold text-foreground/20">
              CURATED
              <span className=""> COLLECTION</span>
            </p>
            <div className="relative w-full aspect-square overflow-hidden rounded-md hover:shadow-md transition-all">
              <Image
                src={myImage}
                fill
                alt="image"
                className="lg:rounded-none rounded-lg overflow-hidden object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hum;
