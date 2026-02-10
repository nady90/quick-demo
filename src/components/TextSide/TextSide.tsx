export default function TextSide({
  text,
  subText,
}: {
  text: string;
  subText: string;
}) {
  return (
    <div className="flex flex-col gap-y-4">
      <h3 className="text-4xl text-gray-900 font-semibold leading-11 tracking-tight">
        {text}
      </h3>
      <p className="font-normal text-gray-600 text-lg tracking-normal ">
        {subText}
      </p>
    </div>
  );
}
