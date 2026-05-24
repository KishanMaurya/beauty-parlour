import Image from "next/image";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header fade-in">
        <div className="section-label">Our Work</div>
        <h2 className="section-title">
          Beauty <em>Gallery</em>
        </h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          Every look tells a story. Explore our portfolio of transformations
          that celebrate beauty in every form.
        </p>
      </div>
      <div className="gallery-grid fade-in">
        {galleryItems.map((item) => (
          <div key={item.label} className="gallery-item">
            <Image
              src={item.image}
              alt={item.label}
              width={600}
              height={800}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div className="gallery-overlay">
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
