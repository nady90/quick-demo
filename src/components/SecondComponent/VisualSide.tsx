import Image from "next/image";
import CodeContainer from "./CodeContainer";

export default function VisualSide() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-[85%] left-0 top-0 border-8  shadow-lg border-gray-50 rounded-3xl ">
        <Image
          src="/images/img-1.png"
          width={460}
          height={259}
          alt="product showcase"
        />
      </div>
      <div className="absolute right-0 w-[85%] top-[31%] z-10 ">
        <CodeContainer />
      </div>
    </div>
  );
}
