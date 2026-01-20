import Image from "next/image";
import homeImg from "@/public/images/home.jpg";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Homepage</h1>
      <div className="absolute -z-10 inset-0">
        <Image
          src={homeImg}
          alt="Home Image"
          fill
          style={{objectFit: 'cover'}}
          className="mt-4 rounded-lg"
        />
      </div>
    </div>
  );
}
