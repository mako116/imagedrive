import { Link } from "react-router-dom";

import aboutUs from "../../assets/about-us.jpg";

const About = () => {
  return (
    <section>
      <div className="py-56 bg-pages-heroBg bg-no-repeat bg-cover bg-center" />
      <div className="pt-12 pb-14 px-6 sm:px-12 md:px-20 lg:px-16 xl:px-28">
        <div className="flex flex-col items-center mb-10">
          <h2 className="mb-2 text-center text-4xl font-bold uppercase md:text-5xl">
            About Us
          </h2>
          <div className="w-10 h-[3px] bg-[#f97729]" />
        </div>
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0">
          <div className="flex justify-center lg:w-1/2 lg:justify-start">
            <img className="w-96" src={aboutUs} alt="About us" />
          </div>
          <div className="flex flex-col space-y-4 text-xl lg:w-3/4">
            <p>
              Imageplus Eye Clinic was established in 2021 and incorporated
              under the laws of Federal Republic of Nigeria RC nos 3469707 and
              specializes on primary eye care optometry. We offer comprehensive
              eye assessment including vision correction, lens prescription and
              co management of ocular conditions. We achieve this by staying
              current with the latest developments in eye care, and advances in
              ophthalmic and lens technology.
            </p>
            <p>
              We believe in professionalism and bring world class eye care
              services to our patients in an affordable manner without
              compromising standard.
            </p>
            <p>
              At Imageplus Eye Clinic we see you, your unique eyes and your eye
              needs. And we personalize every treatment to offer you the best of
              vision care available today.
            </p>
            <p>
              We take pride in building lasting relationships with our patients
              which is why we take the time to get to know you, your vision
              requirements and your visual lifestyle needs.
            </p>
            <p>
              If you're unhappy with your vision then get in touch today and
              book a vision correction consultation with us. Kindly visit our
              eye care facility to get started.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 px-4 py-6 bg-[#f97729] text-white lg:flex-row lg:justify-around lg:items-center lg:space-y-0 lg:px-0">
        <p className="text-xl text-center md:text-2xl">
          Book an Appointment with our Eye Clinic in Uyo
        </p>
        <div className="flex space-x-6">
          <div className="flex items-center">
            <Link
              to="tel:+2349071259643"
              className="inline-block px-5 py-2 uppercase font-bold border-2 border-white rounded-full transition-all hover:text-white hover:bg-[#045544] md:px-8 md:py-3 md:text-lg"
            >
              Call Now
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/contact-us"
              className="inline-block px-5 py-2 uppercase font-bold border-2 border-white rounded-full transition-all hover:text-white hover:bg-[#045544] md:px-8 md:py-3 md:text-lg"
            >
              Book Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
