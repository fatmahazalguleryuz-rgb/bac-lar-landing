export default function DownloadLink() {
  const url = process.env.NEXT_PUBLIC_APP_STORE_URL;
  if (!url) return <span className="button" aria-disabled="true">iOS uygulaması yakında</span>;
  return <a href={url} className="button" target="_blank" rel="noopener noreferrer" aria-label="Bacılar iOS uygulamasını App Store’dan indir">Uygulamayı indir</a>;
}
