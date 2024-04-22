import Image from "next/image";
import founder from "../../../../public/images/ourValues/founder.png";

const humHuming = () => {
  return (
    <div className="lg:p-20">
      <div className="flex justify-center items-center flex-col h-full w-full px-5 z-10">
        <div className="text-center text-foreground/65 max-w-3xl mx-auto bg-white z-20lg:px-12 py-12 ">
          <p className="md:text-4xl text-3xl font-semibold">
            About the Founder
          </p>

          <p className="md:text-lg mt-4">
            Vessels embodies what I needed during my battle with anxiety and
            deep depression years ago—a brand that understands your process to
            wholeness. Through self-inquiry, I've realized the profound power of
            inner healing and realized, in the universal truth of oneness. I’m
            deeply passionate about sharing the NOW Method with the world.{" "}
            <br /> Now, as a Meditation teacher, Breathwork Facilitator and
            Integration Coach, I aim to hold space for others as they discover
            this truth within themselves. Acknowledging the self, plant
            medicine, meditation, fasting and breathwork have been pivotal in my
            personal journey, and I believe in their potential for global
            healing.
          </p>
        </div>
        <Image src={founder} width={520} height={520} />
      </div>
    </div>
  );
};

export default humHuming;
