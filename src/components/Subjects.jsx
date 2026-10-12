import { useState } from "react";
import subjectsData from "../data/subjects.json";
import levelsData from "../data/levels.json";
import "../App.css";

function Subjects() {
  const [setOpen, setIsOpen] = useState(false)  
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjects = subjectsData.subjects;

  const selectedLevels = selectedSubject
    ? levelsData[selectedSubject.slug] || []
    : [];

  return (
    <section id="subject" className="subjects-con">
      {!selectedSubject ? (
        <>
          <h1>Fanlar</h1>

          <p className="subjects-subtitle">
            O‘zingizga yoqqan fanni tanlang va bilimingizni sinab ko‘ring.
          </p>

          <div className="subjects-row1">
            {subjects.map((subject) => (
              <button
                className="subject"
                key={subject.id}
                onClick={() => setSelectedSubject(subject)}
              >
                <svg
                  className="subject-icon"
                  role="img"
                  aria-label={subject.title}
                >
                  <use href={subject.icon} />
                </svg>

                <h2>{subject.title}</h2>

                <p>{subject.description}</p>

                <span className="subject-open">
                  Kurslarni ko‘rish →
                </span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <button
            className="back-to-subjects"
            onClick={() => setSelectedSubject(null)}
          >
            ← Barcha fanlar
          </button>

          <h1>{selectedSubject.title}</h1>

          <p className="subjects-subtitle">
            O‘zingizga mos kurs yoki darajani tanlang.
          </p>

          <div className="levels-grid">
            {selectedLevels.map((level) => (
              <button className="level-card" key={level.id}>
                {level.icon && (
                  <span className="level-icon">{level.icon}</span>
                )}

                <h2>{level.title}</h2>

                <p>{level.description}</p>

                <span className="level-open">
                  Boshlash →
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Subjects;