import ReactTypingEffect from "react-typing-effect";
import Social from "../components/Social";

const Home = () => {
  return (
    <div className="condiv home">
      <h1>
        Lucas <mark>Ng</mark>
      </h1>
      <ReactTypingEffect
        className="typingeffect"
        text={[
          "Front-End Engineer",
          "Data Scientist",
          "Educator",
        ]}
        typingDelay={200}
        speed={80}
        eraseDelay={2000}
        eraseSpeed={50}
      />
      <div className="hr_line">
        <div className="hr_inner"></div>
      </div>
      <Social />
    </div>
  );
}

export default Home;
