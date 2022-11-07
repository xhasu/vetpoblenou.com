export const Headline = ({ children }) => {
  return (
    <h2 className="text-current font-wulkan text-3xl lg:text-6xl xl:text-8xl mb-6">
      {children}
    </h2>
  );
};

export const Description = ({ children }) => {
  return <p className="text-current text-xl lg:text-3xl">{children}</p>;
};