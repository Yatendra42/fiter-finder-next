export default function HeroSection() {
  return (
    <section className="search-section">
        <div className="container">
            <h1 className="heading">Browse <span className="color-red">Categories</span></h1>
            <p className="sub-heading">Discover thousands of high-quality fetish images across all your favourite 
categories. Find exactly what you're looking for from verified sellers.</p>
   <div className="form-container">
        <form className="contact-form" >
      
      
        <input type="text" name="name" placeholder="Search Categories..." className="search-bar" />

        <select name="category" className="select-category">
          <option value="all">Trending</option>
          <option value="fetish">Fetish</option>
          <option value="kink">Kink</option>
          <option value="bdsm">BDSM</option>
          <option value="roleplay">Roleplay</option>
        </select>
     
    
      </form>
   </div>
        </div>
    </section>
  );
}