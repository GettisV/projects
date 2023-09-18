type image = { img: string | undefined };

export default function Image({ img }: image): JSX.Element {
  return <div className={`${img} mx-auto my-8`}></div>;
}
