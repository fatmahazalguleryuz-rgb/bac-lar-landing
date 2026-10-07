const features = [
  {id:'topluluklar', title:'Topluluklar', text:'45 kategori altında kadınların kurduğu topluluklar.', tone:'rose', visual:'community'},
  {id:'anonim', title:'Sormaya Çekindiklerin', text:'Adın ve profilin görünmeden soru sorabildiğin bölüm.', tone:'violet', visual:'anonymous'},
  {id:'etkinlikler', title:'Etkinlikler', text:'Şehir bazlı buluşmalar: Kahve, Konser, Spor, Atölye, Yemek. Etkinliğin kesin mekânı yalnız katılanlara gösterilebiliyor.', tone:'amber', visual:'events'},
  {id:'bacilarin', title:'Bacıların', text:'Birebir mesajlaşma, tepkiler, anketler, repost.', tone:'green', visual:'messages'}
];

export default function Features(){
  return <section className="section" aria-labelledby="inside-title">
    <div className="container"><p className="section-kicker">İçeride ne var?</p><h2 id="inside-title">Tek uygulamada, dört temel alan.</h2></div>
    <div className="feature-stack">
      {features.map((f,i)=><article id={f.id} className={`feature-row ${i%2?'reverse':''}`} key={f.id}>
        <div className={`feature-visual ${f.tone}`}>
          <div className={`feature-art ${f.visual}`} aria-hidden="true">
            {f.visual==='community' && <><span className="bubble">Kariyer</span><span className="bubble">Psikoloji</span><span className="bubble">İlişkiler</span></>}
            {f.visual==='anonymous' && <><div className="anon-card">Anonim soru<br/><strong>“Bunu siz yaşadınız mı?”</strong></div><span className="privacy-badge">Adın görünmez</span></>}
            {f.visual==='events' && <><div className="event-photo-card">Kahve</div><div className="event-photo-card">Atölye</div><div className="event-photo-card">Konser</div></>}
            {f.visual==='messages' && <><div className="chat one">Bugün müsün? ☕</div><div className="chat two">Evet, 19:00 iyi 💗</div><div className="poll">Anket · Katılıyor musun?</div></>}
          </div>
        </div>
        <div className="feature-copy"><span className="hex-bullet"/><h3>{f.title}</h3><p>{f.text}</p></div>
      </article>)}
    </div>
  </section>
}
