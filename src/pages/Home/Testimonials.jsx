import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="my-16">
      <SectionTitle
        heading={"TESTIMONIALS"}
        SubHeading={"---What Our Clients Say---"}
      />

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>

              <div className="flex flex-col items-center space-y-4 mt-20">
                <Rating style={{ maxWidth: 180 }} value={review?.rating} readOnly />
                
                <p className="text-center w-[70%]">{review?.details}</p>
                <h3 className="text-4xl text-orange-500">{review?.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
