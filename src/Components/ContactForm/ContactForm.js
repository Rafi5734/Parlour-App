import React from "react";
import { Container } from "react-bootstrap";
import "./contactForm.css";
import { useForm } from "react-hook-form";
import Footer from "../Components/Footer";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    console.log(watch("example"));
    return (
        <>
            <div className="contact-main-section">
                <h1 className="text-center fw-bold mb-5 contact-heading">
                    Let us handle your project, professionally.
                </h1>
                <Container
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        className="contact-message"
                        style={{
                            marginTop: "100px",
                        }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <div>
                                <input
                                    placeholder="Full Name"
                                    {...register("example")}
                                    className="lead"
                                    style={{
                                        padding: "10px",
                                        width: "350px",
                                        marginRight: "30px",
                                        marginBottom: "30px",
                                    }}
                                />
                                <input
                                    placeholder="Last Name"
                                    {...register("exampleRequired", {
                                        required: true,
                                    })}
                                    className="lead"
                                    style={{
                                        padding: "10px",
                                        width: "350px",
                                        marginRight: "30px",
                                    }}
                                    s
                                />
                            </div>

                            {/* include validation with required or other standard HTML validation rules */}
                            <div>
                                <input
                                    placeholder="Email Address"
                                    {...register("exampleRequired", {
                                        required: true,
                                    })}
                                    className="lead"
                                    style={{
                                        padding: "10px",
                                        width: "350px",
                                        marginRight: "30px",
                                        marginBottom: "30px",
                                    }}
                                />
                                <input
                                    placeholder="Phone Number"
                                    {...register("exampleRequired", {
                                        required: true,
                                    })}
                                    className="lead"
                                    style={{
                                        padding: "10px",
                                        width: "350px",
                                        marginRight: "30px",
                                        marginBottom: "30px",
                                    }}
                                />
                            </div>

                            <div>
                                <input
                                    placeholder="Your Message"
                                    {...register("exampleRequired", {
                                        required: true,
                                    })}
                                    className="lead"
                                    style={{
                                        padding: "10px",
                                        width: "730px",
                                        height: "230px",
                                        marginRight: "30px",
                                        marginBottom: "30px",
                                    }}
                                />
                            </div>

                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <div class="btn-div">
                                <button type="submit" className="glow-on-hover">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ContactForm;
