import React, { useEffect } from "react";
import "./style.css";
import Steper from "../Steper";
import { useSelector, useDispatch } from "react-redux";
import { loadCities } from "../../redux/actions/citiesActions.js";
import { getAllCities } from "../Services/citiesQueries";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NavTop from "../NavTop";
import Carousel from "../Carousel";

function Main() {
  const citiesStore = useSelector((store) => store.cities);
  const dispatch = useDispatch();
  const { innerHeight } = window;
  const getRatio = (el) => innerHeight / (innerHeight + el.offsetHeight);

  useEffect(() => {
    getAllCities().then((cities) => dispatch(loadCities(cities)));
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("section").forEach((section, i) => {
      section.bg = section.querySelector(".bg");

      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);
  return (
    <>
      <NavTop />
      <section>
        <div className="bg" style={{ backgroundImage: "url(esquel.png)" }} />
        <div className="row">
          <div className="col">
            <h1 className="display-1 text-white">Welcome to Argentina</h1>
            <h2 className="display-5 text-white">
              The next place for your journey
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="bg" style={{ backgroundColor: `#fff` }} />
        
        <div className="carousel-main">
          <ol className="carousel__viewport">
            {citiesStore.allCities.map((city) => (
              <Carousel key={city._id} infoCity={city} />
            ))}
          </ol>
        </div>
      </section>
      <section>
        <div
          className="bg"
          style={{ backgroundImage: `url(puerto-madryn.jpg)` }}
        />
        <h1>Nice, right?</h1>
      </section>
    </>
  );
}
export default Main;
