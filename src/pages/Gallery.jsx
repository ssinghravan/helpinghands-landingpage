const galleryItems = [
  { image: "/education-programs.jpg", cls: "g1", title: "Education Programs", desc: "Empowering children through quality education" },
  { image: "/healthcare-services.jpg", cls: "g2", title: "Healthcare Services", desc: "Medical camps in rural communities" },
  { image: "/women-empowerment.jpg", cls: "g3", title: "Women Empowerment", desc: "Supporting women entrepreneurs" },
  { image: "/sports-activities.jpg", cls: "g4", title: "Sports", desc: "Promoting healthy lifestyles" },
  { image: "/community-development.jpg", cls: "g5", title: "Community Development", desc: "Building stronger communities" },
  { image: "/literacy-program.jpg", cls: "g6", title: "Literacy Program", desc: "After-school education for children" },
  { image: "/stitching-sewing.jpg", cls: "g1", title: "Stitching Batches", desc: "Women learning tailoring skills" },
  { image: "/drawing-art.jpg", cls: "g3", title: "Drawing Classes", desc: "Art & creative expression" },
  { image: "/computer-course.jpg", cls: "g5", title: "Computer Training", desc: "Digital literacy sessions" },
];

const Gallery = () => {
  return (
    <>
      <div className="page-hero">
        <h1>Our Gallery</h1>
        <p>Capturing moments of hope, transformation, and community impact through our lens.</p>
      </div>

      <section className="gallery-page">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Moments in Time</span>
            <h2 className="section-title">Stories Told Through Images</h2>
            <div className="divider-bar"></div>
          </div>

          <div className="gallery-full-grid">
            {galleryItems.map((item, i) => (
              <div className={`gallery-item gallery-full-item ${item.cls}`} key={i}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                  />
                ) : (
                  <div className="gallery-thumb" style={{ fontSize: "4rem" }}>{item.emoji}</div>
                )}
                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
