type typeTitle = {
  title: string | undefined;
};

export default function TitleAnswer({ title }: typeTitle): JSX.Element {
  return (
    <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-700 my-8">
      {title}
    </h3>
  );
}
