import { Parallax } from "react-parallax";
import Nasa1 from "../images/Nasa1.jpg";

const StepOne = () => (
  <Parallax className="step1" bgImage={Nasa1} strength={800}>
    <div className="content">
      <span className="img-text">A Space Trip</span>
    </div>
  </Parallax>
);

export default StepOne;
