import { Parallax } from "react-parallax";
import Nasa3 from "../images/Nasa3.jpg";

const StepOne = () => (
  <Parallax className="step1" bgImage={Nasa3} strength={800}>
    <div className="content">
      <span className="img-text">A Space Trip</span>
    </div>
  </Parallax>
);

export default StepOne;
