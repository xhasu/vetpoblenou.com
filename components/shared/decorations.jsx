export const DecorLeft = () => {
  return (
    <div className="relative -z-10 hidden lg:block select-none pointer-events-none">
      <div className="absolute top-0 left-0 -translate-y-1/3">
        <picture>
          <img src="/images/decor-left.png" alt="" />
        </picture>
      </div>
    </div>
  );
};

export const DecorRight = () => {
  return (
    <div className="relative -z-10 hidden lg:block select-none pointer-events-none">
      <div className="absolute top-0 right-0 -translate-y-1/3">
        <picture>
          <img src="/images/decor-right.png" alt="" />
        </picture>
      </div>
    </div>
  );
};
