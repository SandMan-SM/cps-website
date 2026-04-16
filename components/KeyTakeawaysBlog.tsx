interface Props {
  items: string[];
}

/**
 * Key Takeaways box for blog posts.
 */
export default function KeyTakeawaysBlog({ items }: Props) {
  return (
    <div className="bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)] overflow-hidden shadow-sm my-8">
      <div className="bg-[var(--cps-blue)] px-6 py-4">
        <h2 className="text-sm font-bold text-[var(--cps-white)] uppercase tracking-wider">
          Key Takeaways
        </h2>
      </div>
      <ul className="divide-y divide-[var(--cps-gray-100)]">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-4 px-6 py-4 text-sm text-[var(--cps-gray-700)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--cps-blue)] mt-2 shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
