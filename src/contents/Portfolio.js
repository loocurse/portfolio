import PortfolioItem from "../components/PortfolioItem";
import { SDProjectsData, DAProjectsData } from "../data";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <div className="condiv">
      <PortfolioRange className="portfolio-range">
        <SubtopicHeaderComponent title="Software Development" />
        <PortfolioItems className="portfolio-items">
          {SDProjectsData.map((data) => (
            <PortfolioItem
              title={data.title}
              key={data.title}
              desc={data.desc}
              links={data.links}
              imgsrc={data.imgsrc}
              tech={data.tech}
            />
          ))}
        </PortfolioItems>
        <SubtopicHeaderComponent title="Data Analytics" />
        <PortfolioItems className="portfolio-items">
          {DAProjectsData.map((data) => (
            <PortfolioItem
              title={data.title}
              key={data.title}
              desc={data.desc}
              links={data.links}
              imgsrc={data.imgsrc}
              tech={data.tech}
            />
          ))}
        </PortfolioItems>
      </PortfolioRange>
    </div>
  );
};

const SubtopicHeaderComponent = ({ title }) => {
  return (
    <div className="port-subtopic-header">
      <h3 className="port-title">{title}</h3>
      <div className="hr_line line2">
        <div className="inner2 inner3"></div>
      </div>
    </div>
  );
};

const PortfolioItems = styled.div`
  padding: 5% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PortfolioRange = styled.div`
  padding: 1rem 0rem;
  height: 90%;
  overflow-y: scroll;
`;
export default Portfolio;
