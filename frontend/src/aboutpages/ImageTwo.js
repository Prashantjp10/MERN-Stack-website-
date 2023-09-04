import { Parallax } from "react-parallax";
import CodingImg from "../aboutpages/images/CodingImg.jpg";

const ImageTwo = () => {
  return (
    <>
      <Parallax
        className="AboutImage"
        blur={0}
        bgImage={CodingImg}
        strength={800}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        <div className="content">
          {/* <span className="img-txt">Our SKills</span> */}
        </div>
      </Parallax>
    </>
  );
};

export default ImageTwo;
