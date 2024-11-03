import Image from "next/image";
export default function Gameinfo() {
  return (
    <div className="pt-5">
      <div className="flex mb-4">
        <div className="flex-none pl-3">
          <Image
            className="rounded-full size-12"
            src="/taco.jpg"
            width={500}
            height={500}
            alt="tacotuesday"
          />
        </div>
        <div className="flex-initial pl-7 text-wrap">
          <div className="font-semibold text-lg">Game Company Name</div>
          <div className="font-light text-sm">Company Tagline </div>
        </div>
      </div>

      <Image
        className="mb-5 w-full h-52"
        src="/taco.jpg"
        width={500}
        height={500}
        alt="tacotuesday"
      />
      <div className="flex-initial pl-7 text-wrap">
        <div className="font-semibold text-lg">Game Name</div>
        <div className="font-light text-sm">Genre or Tagline </div>
      </div>

      <div className="flex-initial text-wrap">
        <div className="px-7 pt-5 font-medium text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 py-5 pr-4">
        <button className="border-night px-8 py-4 border rounded-full">
          + Basket
        </button>
        <button className="border-night bg-night px-8 py-4 border rounded-full text-opnig">
          Play Now
        </button>
      </div>
    </div>
  );
}
