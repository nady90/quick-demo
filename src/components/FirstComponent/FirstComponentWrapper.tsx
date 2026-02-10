import TextSide from "../TextSide/TextSide";
import VisualSide from "./VisualSide";

export default function FirstComponentWrapper() {
  return (
    <div className="max-w-7xl gap-x-24 w-full items-center flex flex-row ">
      <div className="basis-1/2">
        <TextSide
          text="Automated reporting"
          subText="Generate recurring reports as presentations using structured data or prompts. Ideal for analytics, BI, and internal reporting."
        />
      </div>
      <div className="basis-1/2 h-120.5">
        <VisualSide />
      </div>
    </div>
  );
}
