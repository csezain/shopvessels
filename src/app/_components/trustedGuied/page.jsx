"use client";
import Trustedguied from "./trustedguied";
import videoData from "../../../data/video.json";

const page = () => {
  return (
    <div>
      {videoData.map((videoo, index) => (
        <Trustedguied video={videoo.video} key={index} />
      ))}
    </div>
  );
};

export default page;
