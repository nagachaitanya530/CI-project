import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  {
    title: "Writing Skills",
    level: "CEFR C1 Level Proficiency",
    percent: 85,
<<<<<<< HEAD
    color: "#f97316",
=======
    color: "#f97316", 
>>>>>>> changes_ci
  },
  {
    title: "Grammar Skills",
    level: "CEFR C1 Level Proficiency",
    percent: 90,
    color: "#0ea5e9",
  },
  {
    title: "Speaking Skills",
    level: "CEFR B2 Level Proficiency",
    percent: 82,
<<<<<<< HEAD
    color: "#e11d48",
=======
    color: "#e11d48", 
>>>>>>> changes_ci
  },
  {
    title: "Listening Skills",
    level: "CEFR C1 Level Proficiency",
    percent: 87,
<<<<<<< HEAD
    color: "#a21caf",
=======
    color: "#a21caf", 
>>>>>>> changes_ci
  },
];

export default function Outcome() {
  const [progress, setProgress] = useState(0);
<<<<<<< HEAD

=======
>>>>>>> changes_ci
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 88) {
          clearInterval(timer);
          return 88;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-white to-blue-50" id="outcome">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
            Expected outcome by the end of the course.
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-xl">
            The results may vary depending upon individual's skill set, and the time put in
            practice. This should not be taken as a guarantee, but a general guideline.
          </p>

          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <p className="text-md font-semibold mb-1 text-gray-700">{skill.title}</p>
                <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden relative shadow-inner">
                  <div
                    className="h-full text-white text-xs font-semibold flex items-center justify-between px-3 rounded-full transition-all duration-700 ease-in-out"
                    style={{
                      width: `${skill.percent}%`,
                      background: skill.color,
                    }}
                  >
                    <span className="whitespace-nowrap">{skill.level}</span>
                    <span>{skill.percent}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD

=======
>>>>>>> changes_ci
        <div className="w-52 md:w-72 mx-auto">
          <CircularProgressbar
            value={progress}
            text="C1"
            styles={buildStyles({
              pathColor: "#0ea5e9",
              textColor: "#4b5563",
              trailColor: "#e5e7eb",
              textSize: "18px",
              pathTransitionDuration: 0.5,
            })}
          />
          <p className="text-center mt-4 text-gray-500 font-medium text-lg">CEFR Level</p>
        </div>
      </div>
    </section>
  );
}
