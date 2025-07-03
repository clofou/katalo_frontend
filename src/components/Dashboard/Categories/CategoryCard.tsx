type CategoryCardProps = {
  name: string;
  img: string;
};

export function CategoryCard({ name, img }: CategoryCardProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white dark:bg-[#18181b] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow transition min-w-[220px]">
      <img
        src={img}
        alt={name}
        className="w-12 h-12 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
      />
      <span className="text-lg font-medium text-gray-800 dark:text-gray-100">{name}</span>
    </div>
  );
}