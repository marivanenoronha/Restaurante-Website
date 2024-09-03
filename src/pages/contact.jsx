import React from "react";
import "./Contact.css";
import { ContactInfo } from "../components/ContactInfo";

import { Reviews } from "../components/Reviews";
import contactImage from "../fotos/img/contact-img.jpg";


function Contact() {

    return (
        <div className="contact-page">
            <header className="mt-5">
                <div className="container h-100 d-flex align-items-center justify-content-center">
                    <h1 className="text-light">Contato</h1>
                </div>
            </header>


            <div className="  container my-5">
                <div className="row">
                    <div className=" col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-o">
                        <ContactInfo />
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                            <img src={contactImage} className="img-fluid w-52" alt="" />
                        </div>

                    <div className="container my-5">
                        <div className="row">
                            <div className="col-12 d-flex align-items-left justify-content-center flex-column">
                                <h2>Localização</h2>
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        className="embed-responsive-item"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.136417862331!2d-49.37183408495774!3d-28.924780882351507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952137d5b9e1f0fd%3A0x4f6a5d5f03af0e39!2sR.%20Caxias%2C%2015%20-%20Morro%20dos%20Conventos%2C%20Ararangu%C3%A1%20-%20SC%2C%2088911-320%2C%20Brazil!5e0!3m2!1spt-BR!2sus!4v1691243027432!5m2!1spt-BR!2sus"
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-light bg-dark py-5">
                <Reviews />
            </div>
            <a
                href="https://wa.me/5548991740401"
                className="whatsapp-icon position-fixed"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp fa-3x text-success"></i>
            </a>
        </div>
    )
}

export default Contact;