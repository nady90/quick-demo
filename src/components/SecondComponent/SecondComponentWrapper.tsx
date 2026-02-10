import TextSide from "../TextSide/TextSide";
import CodeContainer from "./CodeContainer";

export default function SecondComponentWrapper() {
  return (
    <div className="max-w-7xl gap-x-24 w-ful items-center flex flex-row ">
      <div className="basis-1/2">
        <CodeContainer />
      </div>
      <div className="basis-1/2">
        <TextSide
          text="AI agents & workflows"
          subText="Integrate presentation generation into your agentic workflows and autonomous systems. Let AI create presentations on demand."
        />
      </div>
    </div>
  );
}
