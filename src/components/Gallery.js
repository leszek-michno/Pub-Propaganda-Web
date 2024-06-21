import { Carousel } from 'react-carousel-minimal';
import { data } from "../databases/ImgBase";

const Gallery =()=> {

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
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            automatic={true}
            dots={true}
            loading="lazy"
            // pauseIconColor="white"
            // pauseIconSize="40px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
              loading: "lazy",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
