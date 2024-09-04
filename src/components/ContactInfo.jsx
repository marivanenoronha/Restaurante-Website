import React from "react";

export function ContactInfo() {
    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className=" mb-3 text-uppercase fw-bold text-dark">Onde nos encontrar</h2>
            <p className="mb-5 text-dark"><i className="fas fa-map-marker-alt me-2"></i> Rua Amaro José Pereira, Ararngua SC<br></br>
                <i className="fas fa-envelope me-2"></i> noronhamarivane4@gmail.com<br></br>
                <i className="fab fa-whatsapp me-2"></i> 48 991740401
                <div className="contact-icons mt-4 d-flex justify-content-around w-70">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f text-dark fa-2x"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram text-dark fa-2x"></i>
                    </a>
                    <a href="https://wa.me/5548991740401" target="_blank" rel="noreferrer">
                        <i className="fab fa-whatsapp text-dark fa-2x"></i>
                    </a>
                    <a href="mailto:notonhamarivane4@gmail.com">
                        <i className="fas fa-envelope text-dark fa-2x"></i>
                    </a>
                </div>
            </p>
            <div className="operating-hours ">
                <h3 className="mb-3 text-dark fw-bold">Horário de Funcionamento</h3>
                <div className="hours">
                    <p className="day text-dark mb-2">
                        <i className="fas fa-calendar-day me-2 text-dark"></i>
                        Quarta - Domingo
                    </p>
                    <p className="time text-dark">
                        <i className="fas fa-utensils me-2 text-dark"></i>
                        Almoço: <span className="fw-bold">11:00 - 15:00</span>
                    </p>
                    <p className="time text-dark">
                        <i className="fas fa-moon me-2 text-dark"></i>
                        Janta: <span className="fw-bold">19:00 - 23:00</span>
                    </p>
                </div>
            </div>
        </div >
    )
}