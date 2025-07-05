const list = [
  { name: "Adorable" },
  { name: "Adult" },
  { name: "African" },
  { name: "Age play" },
  { name: "Agent" },
  { name: "Alien Fantasy" },
  { name: "Amateur" },
  { name: "Amazing" },
  { name: "American" },
  { name: "Amish" },
  { name: "Amputee" },
  { name: "Age play" },
  { name: "Agent" },
  { name: "Alien Fantasy" },
  { name: "Amateur" },
  { name: "Age Amazing" },
  { name: "Adorable" },
  { name: "Adult" },
  { name: "African" },
  { name: "Age play" },
  { name: "Agent" },
  { name: "Alien Fantasy" },
  { name: "Amateur" },
  { name: "Amazing" },
  { name: "American" },
  { name: "Amish" },
  { name: "Amputee" },
  { name: "Age play" },
  { name: "Agent" },
  { name: "Alien Fantasy" },
  { name: "Amateur" },
  { name: "Age Amazing" },
  { name: "Agent" },
  { name: "Alien Fantasy" },
];

export default function CategorySection() {
  return (
    <section className="categories-section">
      <div className="container ">
        
        <div className="categories-container">
           <h2 className="heading">Browse All Categories</h2>

        <div className="categories-list-wrapper">
          <span className="list-number">A</span>
          <ul className="categories-list">
            {list.map((item, index) => (
              <li className="category-item" key={index}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="categories-list-wrapper">
          <span className="list-number">B</span>
          <ul className="categories-list">
            {list.map((item, index) => (
              <li className="category-item" key={index}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="categories-list-wrapper">
          <span className="list-number">C</span>
          <ul className="categories-list">
            {list.map((item, index) => (
              <li className="category-item" key={index}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="categories-list-wrapper">
          <span className="list-number">D</span>
          <ul className="categories-list">
            {list.map((item, index) => (
              <li className="category-item" key={index}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        </div>

       

      </div>
    </section>
  );
}
