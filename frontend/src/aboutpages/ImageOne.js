import { Parallax } from "react-parallax";
import AboutImg from "../aboutpages/images/AboutImg.jpg";

const ImageOne = () => {
  return (
    <>
      <Parallax
        className="AboutImage"
        blur={0}
        bgImage={AboutImg}
        strength={800}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        <div className="aboutus-title">
          <span className="img-txt">About Us</span>
        </div>
      </Parallax>
    </>
  );
};

export default ImageOne;
