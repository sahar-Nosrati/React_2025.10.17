import("../App.css");

export default function Header() {
  return (
    <>
      <header className="header-container">
        <img
          className="world-icon"
          src="/img/vecteezy_serene-creative-globe-with-stand-angled-view-cutout-premium_60061845.png"
        alt = 'world-icon'/>
        <h2 className="site-header">Travel Journal</h2>
      </header>
    </>
  );
}
