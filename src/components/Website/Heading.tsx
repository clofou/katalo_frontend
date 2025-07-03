type HeadingProps = {
  id: string,
  title: string;
  children: string;
  className?: string;
};

function Heading({ id, title, children, className = ""}: HeadingProps) {
  const fragments = children.match(/[^:.]+[:.]?/g) || [];

  return (
    <div className="flex gap-4 mt-8 md:mt-25 mb-10 scroll-mt-24" id={id}>
      <h2 className={"flex-1/3 highlight text-xl md:text-2xl " + className}>{title}</h2>
      <div className="flex-2/3">
        {fragments.map((frag, idx) => (
          <div key={idx}>{frag.trim()}</div>
        ))}
      </div>
    </div>
  );
}

export default Heading;
