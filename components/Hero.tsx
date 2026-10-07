import Image from 'next/image';
import DownloadLink from './DownloadLink';

const rows = [
  ['Kariyer','Cinsellik','Psikoloji','Seyahat','Şehirler','Girişimcilik','Müzik','Oyun','Aile'],
  ['İlişkiler','Teknoloji','Sınavlar','Arkadaşlık','Dil Öğrenme','Evcil Hayvanlar','Kariyer','Cinsellik'],
  ['Seyahat','Şehirler','Girişimcilik','Müzik','Oyun','Aile','İlişkiler','Teknoloji']
];

function MarqueeRow({ items, reverse=false, speed='28s' }: {items:string[], reverse?:boolean, speed?:string}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row" aria-hidden="true">
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`} style={{'--speed': speed} as React.CSSProperties}>
        {doubled.map((item, i) => <span className="topic-pill" key={`${item}-${i}`}>{item}</span>)}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-marquees">
        <MarqueeRow items={rows[0]} speed="32s" />
        <MarqueeRow items={rows[1]} reverse speed="38s" />
        <MarqueeRow items={rows[2]} speed="34s" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><Image src="/bee-icon.png" width={34} height={34} alt="" /> Sadece kadınlara özel</div>
          <h1>Kadınların <span className="pill-emphasis">kendi aralarında</span> konuştuğu yer.</h1>
          <p className="hero-sub">Topluluklar, anonim sorular, etkinlikler. Her üyelik tek tek onaylanır.</p>
          <div className="hero-actions" id="indir">
            <DownloadLink />
            <span className="platform-chip">iOS uygulaması</span>
          </div>
          <div className="trust-row">
            <span>◈ Sadece kadınlar</span><span>◈ Her üyelik tek tek onaylanır</span><span>◈ Güvenli ve destekleyici ortam</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Bacılar uygulama önizlemesi">
          <div className="hex-photo hex-a"><div className="photo-scene coffee"><span>☕</span></div></div>
          <div className="phone phone-left">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="phone-top"><strong>bacılar<span>.</span></strong><span>⌕ ◌</span></div>
              <div className="mini-tabs"><b>Topluluklar</b><span>Etkinlikler</span><span>Senin için</span></div>
              <div className="mini-chip-row"><span>Kariyer</span><span>Psikoloji</span><span>İlişkiler</span></div>
              <div className="post-card">
                <small>Anonim · 2 saat önce</small>
                <h3>Sizce kariyer değişikliği için çok mu geç?</h3>
                <p>Merak ettiklerini adın görünmeden sor.</p>
              </div>
              <div className="community-card"><b>Kariyer</b><button>Katıl</button><small>Topluluk</small></div>
            </div>
          </div>
          <div className="phone phone-right">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="phone-top"><strong>Etkinlikler</strong><span>İstanbul⌄</span></div>
              <div className="event-image coffee-scene" />
              <div className="event-card"><b>İstanbul Kahve Buluşması</b><small>Kadınlarla samimi sohbet</small></div>
              <div className="event-image workshop-scene" />
              <div className="event-card"><b>Kariyer Atölyesi</b><small>Online</small></div>
            </div>
          </div>
          <div className="hex-photo hex-b"><div className="photo-scene city"><span>⌖</span></div></div>
          <div className="hex-photo hex-c"><div className="photo-scene event"><span>♪</span></div></div>
          <div className="scribble">Aynı ilgi alanları,<br/>daha gerçek sohbetler. ♡</div>
        </div>
      </div>
      <div className="reduced-grid container" aria-label="Öne çıkan kategoriler">
        {rows.flat().slice(0,15).map((item, i)=><span key={i}>{item}</span>)}
      </div>
    </section>
  );
}
