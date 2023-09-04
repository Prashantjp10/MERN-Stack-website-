import { Parallax } from "react-parallax";
import OfferingImg from "../aboutpages/images/OfferingImg.jpg";

const ImageFive = () => {
  return (
    <>
      <Parallax
        className="AboutImage"
        blur={0}
        bgImage={OfferingImg}
        strength={800}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        <div className="content">
          {/* <span className="img-txt">Our offerings</span> */}
        </div>
      </Parallax>
    </>
  );
};

export default ImageFive;
