'use client';
import { useState } from 'react';
const faqs=[
 ['Nasıl üye olunur?','Uygulama üzerinden başvuru yapılır. Her üyelik ekibimiz tarafından tek tek incelenir.'],
 ['Ne kadar sürer?','Ekip incelemesi genellikle birkaç saat sürer.'],
 ['Erkekler giremiyor mu?','Bacılar yalnızca kadınlara açık bir sosyal uygulamadır.'],
 ['Anonim gerçekten anonim mi?','Diğer kullanıcılara karşı adın ve profilin görünmez. Güvenlik için Bacılar moderasyonu paylaşımı yapan kişiyi görebilir.'],
 ['Ücretli mi?','Uygulamanın bu sayfada anlatılan alanları için ücret iddiasında bulunmuyoruz.'],
 ['18 yaş sınırı var mı?','Bacılar 18+ kullanım için tasarlanır.']
];
export default function FAQ(){const [open,setOpen]=useState<number|null>(0);return <section className="section" id="sss"><div className="container faq-wrap"><p className="section-kicker">SSS</p><h2>Sıkça sorulan sorular</h2><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}>{q}<span>{open===i?'−':'+'}</span></button>{open===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div></div></section>}
