import Logo from '../public/images/logo.svg';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';




export default function Home() {
  return (
    <main>
       <HeroSection />
       <ProductList />
       <CategorySection />
    </main>
  );
}
