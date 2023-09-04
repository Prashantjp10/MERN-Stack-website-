import { Parallax } from "react-parallax";
import GrowthImg from "../aboutpages/images/GrowthImg.jpg";

const ImageFour = () => {
  return (
    <>
      <Parallax
        className="AboutImage"
        blur={0}
        bgImage={GrowthImg}
        strength={800}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        <div className="content">
          {/* <span className="img-txt">Our Mission</span> */}
        </div>
      </Parallax>
    </>
  );
};

export default ImageFour;
