import FirstComponentWrapper from "@/components/FirstComponent/FirstComponentWrapper";
import SecondComponentWrapper from "@/components/SecondComponent/SecondComponentWrapper";

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full p-20 items-center flex gap-y-16 flex-col">
      <FirstComponentWrapper />
      <SecondComponentWrapper />
    </div>
  );
}
