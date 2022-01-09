import React from "react";
import { Container } from "react-bootstrap";
import "./testimonial.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";
import FemaleImage from "../../Female.png";
import Male1 from "../../male1.png";
import Male2 from "../../male2.png";
import Rating from "react-rating";
import ContactForm from "../ContactForm/ContactForm";
SwiperCore.use([Pagination, Navigation]);

const Testimonials = () => {
    return (
        <>
            <div className="mb-5">
                <Container>
                    <h1 className="mt-5 mb-5 text-center fw-bold">
                        Testimonials
                    </h1>
                    <div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            // navigation={true}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="test-intro">
                                    <img
                                        src={FemaleImage}
                                        className="test-img"
                                    ></img>
                                    <div className="test-name">
                                        <h4>Nash Patrik</h4>
                                        <p className="lead">CEO, Manpal</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Itaque ex culpa minus
                                        deserunt ipsam iste aperiam quasi
                                        debitis. Eius quidem accusantium illo
                                        accusamus sapiente veritatis voluptate
                                        cumque nisi itaque magnam!
                                    </p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        placeholderSymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        fullSymbol={<i class="far fa-star"></i>}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="test-intro">
                                    <img src={Male1} className="test-img"></img>
                                    <div>
                                        <h4>Miriam Barron</h4>
                                        <p className="lead">CEO, Manpal</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Itaque ex culpa minus
                                        deserunt ipsam iste aperiam quasi
                                        debitis. Eius quidem accusantium illo
                                        accusamus sapiente veritatis voluptate
                                        cumque nisi itaque magnam!
                                    </p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        placeholderSymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        fullSymbol={<i class="far fa-star"></i>}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="test-intro">
                                    <img src={Male2} className="test-img"></img>
                                    <div>
                                        <h4>Bria Malane</h4>
                                        <p className="lead">CEO, Manpal</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Itaque ex culpa minus
                                        deserunt ipsam iste aperiam quasi
                                        debitis. Eius quidem accusantium illo
                                        accusamus sapiente veritatis voluptate
                                        cumque nisi itaque magnam!
                                    </p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        placeholderSymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        fullSymbol={<i class="far fa-star"></i>}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="test-intro">
                                    <img
                                        src={FemaleImage}
                                        className="test-img"
                                    ></img>
                                    <div className="test-name">
                                        <h4>Nash Patrik</h4>
                                        <p className="lead">CEO, Manpal</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Itaque ex culpa minus
                                        deserunt ipsam iste aperiam quasi
                                        debitis. Eius quidem accusantium illo
                                        accusamus sapiente veritatis voluptate
                                        cumque nisi itaque magnam!
                                    </p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        placeholderSymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        fullSymbol={<i class="far fa-star"></i>}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="test-intro">
                                    <img src={Male1} className="test-img"></img>
                                    <div>
                                        <h4>Miriam Barron</h4>
                                        <p className="lead">CEO, Manpal</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Itaque ex culpa minus
                                        deserunt ipsam iste aperiam quasi
                                        debitis. Eius quidem accusantium illo
                                        accusamus sapiente veritatis voluptate
                                        cumque nisi itaque magnam!
                                    </p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        placeholderSymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        fullSymbol={<i class="far fa-star"></i>}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="test-intro">
                                    <img src={Male2} className="test-img"></img>
                                    <div>
                                        <h4>Bria Malane</h4>
                                        <p className="lead">CEO, Manpal</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Itaque ex culpa minus
                                        deserunt ipsam iste aperiam quasi
                                        debitis. Eius quidem accusantium illo
                                        accusamus sapiente veritatis voluptate
                                        cumque nisi itaque magnam!
                                    </p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        placeholderSymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        fullSymbol={<i class="far fa-star"></i>}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="test-intro">
                                    <img
                                        src={FemaleImage}
                                        className="test-img"
                                    ></img>
                                    <div className="test-name">
                                        <h4>Nash Patrik</h4>
                                        <p className="lead">CEO, Manpal</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Itaque ex culpa minus
                                        deserunt ipsam iste aperiam quasi
                                        debitis. Eius quidem accusantium illo
                                        accusamus sapiente veritatis voluptate
                                        cumque nisi itaque magnam!
                                    </p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        placeholderSymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        fullSymbol={<i class="far fa-star"></i>}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="test-intro">
                                    <img src={Male1} className="test-img"></img>
                                    <div>
                                        <h4>Miriam Barron</h4>
                                        <p className="lead">CEO, Manpal</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Itaque ex culpa minus
                                        deserunt ipsam iste aperiam quasi
                                        debitis. Eius quidem accusantium illo
                                        accusamus sapiente veritatis voluptate
                                        cumque nisi itaque magnam!
                                    </p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        placeholderSymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        fullSymbol={<i class="far fa-star"></i>}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="test-intro">
                                    <img src={Male2} className="test-img"></img>
                                    <div>
                                        <h4>Bria Malane</h4>
                                        <p className="lead">CEO, Manpal</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Itaque ex culpa minus
                                        deserunt ipsam iste aperiam quasi
                                        debitis. Eius quidem accusantium illo
                                        accusamus sapiente veritatis voluptate
                                        cumque nisi itaque magnam!
                                    </p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        placeholderSymbol={
                                            <i class="far fa-star"></i>
                                        }
                                        fullSymbol={<i class="far fa-star"></i>}
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Container>
            </div>
            <ContactForm></ContactForm>
        </>
    );
};

export default Testimonials;
