import styled from "styled-components";

function PortfolioItem({ title, links, imgsrc, tech, desc }) {
  return (
    <div className="port_out">
      <Header>
        <h5>{title}</h5>
      </Header>
      <MiddleContent className="port-middle-content">
        <LeftColumn className="port-left-col">
          <Image src={imgsrc}></Image>
          <div className="tech">
            {tech.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </LeftColumn>
        <RightColumn className="port-right-col">{desc}</RightColumn>
      </MiddleContent>

      <div className="port-links">
        {Object.keys(links).map((key) => (
          <a
            href={links[key]}
            key={links[key]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fa fa-${key}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

const Header = styled.div`
  padding: 1rem 1rem;
  border-bottom: 2px solid rgb(200, 200, 200);
  display: flex;
  justify-content: space-between;
  h5 {
    font-size: 1.3rem;
  }
`;

const MiddleContent = styled.div`
  padding: 1rem 1rem;
  display: flex;
  border-bottom: 1px solid rgb(200, 200, 200);
`;

const RightColumn = styled.div`
  line-height: 1.5rem;
`;
const LeftColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60%;
  flex-direction: column;
`;
const Image = styled.img`
  height: 10vh;
  width: 80%;
  border-radius: 1rem;
  object-fit: cover;
  padding-bottom: 3%;
`;

export default PortfolioItem;
