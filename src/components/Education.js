import styled from "styled-components";
import { ExperienceData } from "../data";

const Education = () => {
  return (
    <div className="education">
      <School
        year={ExperienceData[0].year}
        insti={ExperienceData[0].insti}
        image={ExperienceData[0].image}
        desc={ExperienceData[0].desc}
      />
      <div className="school-outline"></div>
      <div></div>
      <School
        line={true}
        year={ExperienceData[1].year}
        insti={ExperienceData[1].insti}
        image={ExperienceData[1].image}
        desc={ExperienceData[1].desc}
      />
      <School
        year={ExperienceData[2].year}
        insti={ExperienceData[2].insti}
        image={ExperienceData[2].image}
        desc={ExperienceData[2].desc}
      />
      <div className="school-outline"></div>
      <div></div>
      <School
        line={true}
        year={ExperienceData[3].year}
        insti={ExperienceData[3].insti}
        image={ExperienceData[3].image}
        desc={ExperienceData[3].desc}
      />
      <School
        year={ExperienceData[4].year}
        insti={ExperienceData[4].insti}
        image={ExperienceData[4].image}
        desc={ExperienceData[4].desc}
      />
      <div className="school-outline"></div>
    </div>
  );
};

const School = ({ line = false, year, insti, image, desc }) => {
  return (
    <SchoolIn className={line ? "school-outline" : ""}>
      <h5>{year}</h5>
      <h3>{insti}</h3>
      <p>{desc}</p>
    </SchoolIn>
  );
};

const SchoolIn = styled.div`
  border-radius: 10px;
  box-shadow: 6px 6px 12px #b8b9be, -6px -6px 12px #fff !important;
  /* border: 0.0325rem solid #b8bbc0; */
  p {
    padding: 1rem 1rem;
    margin: 0;
  }
  h5 {
    margin: 1rem 1rem;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    color: rgba(245, 108, 109, 1);
    display: inline-block;
    border-radius: 50px;
    font-weight: bolder;
    box-shadow: inset -3px -3px 7px #ffffff73,
      inset 3px 3px 5px rgba(18, 18, 19, 0.288);
  }
  h3 {
    font-weight: 400;
    padding: 1rem 1rem;
    margin: 0;
  }
`;

export default Education;
