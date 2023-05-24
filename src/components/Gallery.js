import { Carousel } from 'react-carousel-minimal';
import { data } from "../databases/ImgBase";

const Gallery =()=> {

  // const captionStyle = {
  //   fontSize: '2em',
  //   fontWeight: 'bold',
  // }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px 30px 20px"
        }}>
          <Carousel
            data={data}
            time={5000}
            width="850px"
            height="500px"
            // captionStyle={captionStyle}
            // radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            // captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            // slideBackgroundColor="black"
            // slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
