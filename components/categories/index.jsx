import Data from "/data/categories.json";

const Categories = () => {
  const ids = [10, 5, 37, 11, 16, 26, 15, 7];

  return (
    <div className="absolute top-full right-0 lg:left-0 lg:right-auto p-0">
      <div className="mt-4 lg:bg-white rounded-2xl lg:p-4">
        {Data.map((category) => {
          if (!ids.includes(category.id)) {
            return null;
          }

          return (
            <a
              key={category.id}
              href={`/blog/categories/${category.id}`}
              className="block mb-2 last:mb-0"
            >
              <h3 className="lg:text-primary text-base font-circular lg:font-semibold whitespace-nowrap">
                {category.name}
              </h3>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
