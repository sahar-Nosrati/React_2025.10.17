import("../App.css");

export default function Location() {
  return (
    <article className="locations">
      <div className="location">
          <div className="country">
          <img
            src="https://scrimba.com/links/travel-journal-japan-image-url"
            alt="Japan"
            className="country_image"
          />
            <span className="country_name">
              <img
                src="/img/—Pngtree—3d location icon clipart in_9095284.png"
                alt="location_icon"
                className="location_icon"
              />
              Japan{" "}
              <a className="website" href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9">
                {" "}
                View on Google map{" "}
              </a>
        <h1 className="location_title"> Mount Fuji </h1>
        <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="main_text">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
            </span>
          </div>

      </div>
    </article>
  );
}
