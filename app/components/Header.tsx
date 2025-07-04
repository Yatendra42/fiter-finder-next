import Logo from '../../public/images/logo.svg';

export default function Header() {
  return (
    <header className='container'>
        <a href="/" target="_blank" >
        <img src={Logo.src} alt="Next.js Logo" width={180} height={37} />
      </a>

      <nav>
        <a href="/" >SELLERS </a>
        <a href="/about" >HOW IT WORKS</a>
        <a href="/contact">FAQ</a>
        <a href="/">BLOGS</a>
        <a href="/">CELEBRITIES</a>
        <a href="/formus"> FORUMS</a>
      </nav>
    </header>
  );
}