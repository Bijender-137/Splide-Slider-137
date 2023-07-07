import React from "react";
import { Container } from "react-bootstrap";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const SplideSlider = () => {
  return (
    <div>
      <section className="d-flex flex-column vh-100 bg-black">
        <Container className="d-flex flex-column flex-grow-1  justify-content-center">
          <Splide
            options={{
              perPage: 5,
              arrows: true,
              type: "loop",
              drag: "free",
              dots: false,
              autoScroll: {
                speed: 1,
                pauseOnHover: false,
              },
              breakpoints: {
                1400: {
                  perPage: 5,
                },
                1200: {
                  perPage: 4,
                },
                992: {
                  perPage: 3,
                },
                768: {
                  perPage: 2,
                },
                576: {
                  perPage: 1,
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <div className="red_box d-flex justify-content-center align-items-center mx-3">
                <p className="text-white fw-bold fs-6">1</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="red_box d-flex justify-content-center align-items-center mx-3">
                <p className="text-white fw-bold fs-6">2</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="red_box d-flex justify-content-center align-items-center mx-3">
                <p className="text-white fw-bold fs-6">3</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="red_box d-flex justify-content-center align-items-center mx-3">
                <p className="text-white fw-bold fs-6">4</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="red_box d-flex justify-content-center align-items-center mx-3">
                <p className="text-white fw-bold fs-6">5</p>
              </div>
            </SplideSlide>
          </Splide>
        </Container>
      </section>
    </div>
  );
};

export default SplideSlider;
