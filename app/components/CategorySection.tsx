export default function CategorySection() {
  const categories = ['Tech', 'Health', 'Finance', 'Travel'];

  return (
    <section style={{ padding: '2rem' }}>
      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
    </section>
  );
}