import styled from "styled-components";

function PortfolioItem({ title, links, imgsrc, tech, desc }) {
  return (
    <div className="port_out">
      <div className="port-item-header">
        <h5>{title}</h5>
      </div>
      <div className="port-middle-content">
        <img src={imgsrc}></img>
        <div className="tech">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p>{desc}</p>
      </div>

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



export default PortfolioItem;
