import { Parallax } from "react-parallax";
import ResponsiveImg from "../aboutpages/images/ResponsiveImg.jpg";


const ImageThree=()=>{
    return (
      <>
        <Parallax
          className="AboutImage"
          blur={0}
          bgImage={ResponsiveImg}
          strength={800}
          bgImageStyle={{ minHeight: "100vh" }}
        >
          <div className="content">
            {/* <span className="img-txt">Our Vision</span> */}
          </div>
        </Parallax>
      </>
    );
  }

  export default ImageThree;
