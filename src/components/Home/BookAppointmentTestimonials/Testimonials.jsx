import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import starIcon from "../../../assets/star.svg";

const Testimonials = () => {
  return (
    <div className="w-full pt-6 md:w-1/2">
      <div className="flex flex-col items-center mb-10">
        <h2 className="mb-3 text-center text-3xl text-[#333] font-bold uppercase md:text-4xl">
          Testimonials
        </h2>
        <div className="w-10 h-[3px] bg-[#f97729]" />
      </div>

      <div className="mb-16 px-7 md:px-0 md:mb-24">
        <div className="flex justify-center space-x-1 mb-2">
          <img
            className="w-4 h-4 md:w-6 md:h-6"
            src={starIcon}
            alt="Five Stars"
          />
          <img
            className="w-4 h-4 md:w-6 md:h-6"
            src={starIcon}
            alt="Five Stars"
          />
          <img
            className="w-4 h-4 md:w-6 md:h-6"
            src={starIcon}
            alt="Five Stars"
          />
          <img
            className="w-4 h-4 md:w-6 md:h-6"
            src={starIcon}
            alt="Five Stars"
          />
          <img
            className="w-4 h-4 md:w-6 md:h-6"
            src={starIcon}
            alt="Five Stars"
          />
        </div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          preventMovementUntilSwipeScrollTolerance={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
        >
          <div className="relative mx-3 px-4 pb-10 text-center">
            <p className="mb-8 text-lg">
              I was completely satisfied with my experience at Imageplus. The
              Staff and Doctors were not just kind but also professional. Thank
              you so much for saving my vision, Imageplus
            </p>
            <p>Mathew Peter Okon</p>
          </div>

          <div className="relative mx-3 px-4 pb-10 text-center">
            <p className="mb-8 text-lg">
              I love the check ups in terms of making sure everything is fine by
              asking questions for better understanding of the eyes issue.
            </p>
            <p>Henry Kalu</p>
          </div>

          <div className="relative mx-3 px-4 pb-10 text-center">
            <p className="mb-8 text-lg">
              Simply the best and affordable eye clinic I've ever been to with
              competent Doctors and state-of-the-art equipment. The quality of
              glasses and customer service is excellent.
            </p>
            <p>Ikenna O. Elliot</p>
          </div>
        </Carousel>
      </div>

      <a className="flex justify-center text-2xl underline" href="/">
        View More Testimonials
      </a>
    </div>
  );
};

export default Testimonials;
