import Carousel from "react-bootstrap/Carousel";

function Karuzela() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/z3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Kubek</h3>
          <p>Z nadrkiem</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="./Images/z1.jpg"
          alt="Third slide"
        /> */}

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Karuzela;
