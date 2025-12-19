import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="capabilities"
      className="py-16 lg:py-20 border-b border-abbey-800"
    >
      <div className="container mx-auto px-[5%] flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div className="lg:w-[40%]">
          <h2 className="title mb-3 lg:mb-5">What I do</h2>
          <p className="xl:w-[85%]">
            I create modern, responsive, and accessible web interfaces with a
            strong focus on usability and performance. I enjoy turning designs
            into clean, scalable code and continuously expanding my technical
            skill set.
          </p>
        </div>
        <ul className="flex flex-col gap-3 xl:gap-5 lg:w-[55%]">
          {skills.map(({ category, items }) => (
            <li key={category}>
              <h3 className="font-bold mb-3 xl:mb-5">{category}</h3>

              <ul className="flex gap-3 flex-wrap">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="px-5 py-3 border border-abbey-800 rounded-full text-white font-medium text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
