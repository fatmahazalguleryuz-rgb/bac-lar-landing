import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="#top" className="brand" aria-label="bacılar ana sayfa">bacılar<span>.</span></Link>
        <nav aria-label="Ana menü" className="nav-links">
          <Link href="#topluluklar">Topluluklar</Link>
          <Link href="#etkinlikler">Etkinlikler</Link>
          <Link href="#nasil-calisir">Nasıl Çalışır?</Link>
          <Link href="#sss">SSS</Link>
        </nav>
        <a className="button button-small" href="#indir">Uygulamayı indir</a>
      </div>
    </header>
  );
}
