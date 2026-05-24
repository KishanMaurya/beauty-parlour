import { courses } from "@/lib/data";

export default function Academy() {
  return (
    <section className="academy" id="academy">
      <div className="academy-inner">
        <div className="academy-img-collage fade-in">
          <div className="collage-main">
            <div
              style={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(160deg, #9b3060, #3d1030, #c9a84c)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "6rem",
              }}
            >
              🎓
            </div>
          </div>
          <div className="collage-secondary">
            <div
              style={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(160deg, #ede0f8, #9b50c0, #f4a7b9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4rem",
              }}
            >
              💄
            </div>
          </div>
          <div className="collage-badge">
            <strong>10+</strong>
            <small>Certified Courses</small>
          </div>
        </div>
        <div className="fade-in">
          <div className="section-label">Beauty Academy</div>
          <h2 className="section-title">
            Turn Your Passion
            <br />
            Into a <em>Career</em>
          </h2>
          <p className="section-sub">
            Glow & Shine is the best makeup academy in Gopiganj — offering
            expert-led, internationally certified courses with small batch sizes
            for personalised learning.
          </p>
          <div className="course-list">
            {courses.map((course) => (
              <div key={course} className="course-item">
                {course}
              </div>
            ))}
          </div>
          <a
            href="#booking"
            className="btn-primary"
            style={{ display: "inline-flex", marginTop: "0.5rem" }}
          >
            Enquire About Courses ✦
          </a>
        </div>
      </div>
    </section>
  );
}
