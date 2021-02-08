import styled from "styled-components";

function ProjectDescription() {
  return (
      <Info>
        <Header>
          <div className="title">Hello</div>×
        </Header>
        <MiddleContent>
          <LeftColumn>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        aliquam, totam delectus minus hic perferendis ipsam et iste dolorum
        repudiandae maxime impedit consequatur? Rem dolorum expedita nam quos
        eaque porro!</LeftColumn>
          <div className="right-col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        aliquam, totam delectus minus hic perferendis ipsam et iste dolorum
        repudiandae maxime impedit consequatur? Rem dolorum expedita nam quos
        eaque porro!</div>
        </MiddleContent>
        
      </Info>
  );
}

const Info = styled.div`
  position: absolute;
  top: 40%;
  opacity: 1;
  left: 30%;
  background: rgba(230, 231, 238, 1);
  width: 40%;
  display: flex;
  flex-direction: column;
  border: 1px solid #d1d9e6;
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  z-index: 11;
`;

const Header = styled.div`
  padding: 1rem 1rem;
  border-bottom: 0.01rem solid black;
  display: flex;
  justify-content: space-between;
`;

const MiddleContent = styled.div`
  padding: 1rem 1rem;
  display: flex;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export default ProjectDescription;
