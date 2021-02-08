import styled from "styled-components";

function PortfolioItem({ title, links, imgsrc, tech, desc }) {
  return (
    <div className='port_out'>
      <Header>
        <h5>{title}</h5>
      </Header>
      <MiddleContent className='port-middle-content'>
        <LeftColumn className='port-left-col'>
          <Image src={imgsrc}></Image>
          <Tech>
            {tech.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </Tech>
        </LeftColumn>
        <RightColumn className='port-right-col'>{desc}</RightColumn>
      </MiddleContent>

      <div className="port-links">
        {Object.keys(links).map((key) => (
          <a href={links[key]} key={links[key]} target="_blank" rel="noopener noreferrer">
            <i className={`fa fa-${key}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

const Header = styled.div`
  padding: 1rem 1rem;
  border-bottom: 2px solid rgb(200,200,200);
  display: flex;
  justify-content: space-between;
  h5 {
    font-size: 1.3rem;
  }
`;

const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    min-width: 24%;
    margin: 1rem 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: rgba(245, 108, 109, 1);
    display: inline-block;
    border-radius: 10px;
    font-weight: bolder;
    box-shadow: inset -3px -3px 7px #ffffff73,
      inset 3px 3px 5px rgba(18, 18, 19, 0.288);
  }
`;
const MiddleContent = styled.div`
  padding: 1rem 1rem;
  display: flex;
  border-bottom: 1px solid rgb(200,200,200);
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

const PortOut = styled.div`
  margin-bottom: 8%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: inset -3px -3px 7px #ffffff73,
    inset 3px 3px 5px rgba(18, 18, 19, 0.288);
`;


export default PortfolioItem;
