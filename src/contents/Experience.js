import { ExperienceData } from "../data";

const About = () => {
  return (
    <div className="condiv">
      <div className="education">
        <School
          year={ExperienceData[4].year}
          insti={ExperienceData[4].insti}
          image={ExperienceData[4].image}
          desc={ExperienceData[4].desc}
          experience={ExperienceData[4].experience}
        />
        <div className="school-outline rm-mobile"></div>
        <div className="rm-mobile"></div>
        <School
          line={true}
          year={ExperienceData[3].year}
          insti={ExperienceData[3].insti}
          image={ExperienceData[3].image}
          desc={ExperienceData[3].desc}
          experience={ExperienceData[3].experience}
        />
        <School
          year={ExperienceData[2].year}
          insti={ExperienceData[2].insti}
          image={ExperienceData[2].image}
          desc={ExperienceData[2].desc}
          experience={ExperienceData[2].experience}
        />
        <div className="school-outline rm-mobile"></div>
        <div className="rm-mobile"></div>
        <School
          line={true}
          year={ExperienceData[1].year}
          insti={ExperienceData[1].insti}
          image={ExperienceData[1].image}
          desc={ExperienceData[1].desc}
          experience={ExperienceData[1].experience}
        />
        <School
          year={ExperienceData[0].year}
          insti={ExperienceData[0].insti}
          image={ExperienceData[0].image}
          desc={ExperienceData[0].desc}
          experience={ExperienceData[0].experience}
        />
        <div className="school-outline rm-mobile"></div>
      </div>
    </div>
  );
};

const School = ({ line = false, year, insti, image, desc, experience }) => {
  return (
    <div className={`${line ? "school-outline" : ""} school-in`}>
      <div className="blue-box">{desc}</div>
      <div className="meta-info">
        <i class="fa fa-map-marker"></i>
        <p>{insti}</p>
        <i class="fa fa-calendar"></i>
        <p>{year}</p>
      </div>
      <p>{experience}</p>
    </div>
  );
};

export default About;
