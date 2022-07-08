import { Parallax } from "react-parallax";
import Nasa2 from "../images/Nasa2.jpg";

const StepOne = () => (
  <Parallax className="step1" bgImage={Nasa2} strength={800}>
    <div className="content">
      <span className="img-text">A Space Trip</span>
    </div>
  </Parallax>
);

export default StepOne;
