import React from "react";

export function ContactInfo() {
    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className=" mb-3 text-uppercase fw-bold">Onde nos encontrar</h2>
            <p className="mb-5">Rua Amaro José Pereira, Ararangua-sc<br></br> E-mail: noronhamarivane4@gmail.com<br></br> Contato: 48 991047501
                <div className="contact-icons mt-4 d-flex justify-content-around w-70">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f text-light fa-2x"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram text-light fa-2x"></i>
                    </a>
                    <a href="https://wa.me/5548991740401" target="_blank" rel="noreferrer">
                        <i className="fab fa-whatsapp text-light fa-2x"></i>
                    </a>
                    <a href="mailto:notonhamarivane4@gmail.com">
                        <i className="fas fa-envelope text-light fa-2x"></i>
                    </a>
                </div>
            </p>
            <h3 className="mb-2">Horário de funcionamento</h3>
            <p className="m-0">Segunda - Domingo  Almoço11:00 - 15:00
                Janta19:00 - 23:00 </p>
        </div >
    )
}