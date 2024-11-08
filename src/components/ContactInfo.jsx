import React from "react";

export function ContactInfo() {
    return (
        <div className="text-light  py-5 shadow">
        <div className="row">
            <div className="col-12  col-lg-6 mb-4 mb-lg-0 d-flex flex-column align-items-center">
                <h3 className="mb-3  fw-bold text-dark">Onde nos encontrar</h3>
                <p className="mb-4 text-dark text-center">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-map-marker-alt me-2"></i>
                        Rua Caxias, 15, Morro do Conventos, SC
                    </div>
                    <div className="d-flex align-items-center mt-2">
                        <i className="fas fa-envelope me-2"></i>
                        restaurantewebsite@gmail.com
                    </div>
                    <div className="d-flex align-items-center mt-2">
                        <i className="fab fa-whatsapp me-2"></i>
                        48 99165-5586
                    </div>
                </p>

                <div className="contact-icons mt-3 d-flex justify-content-around w-50">
                    <a href="https://www.instagram.com/mundodocamarao/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram text-dark fa-2x"></i>
                    </a>
                    <a href="https://wa.me/5548991606536" target="_blank" rel="noreferrer">
                        <i className="fab fa-whatsapp text-dark fa-2x"></i>
                    </a>
                    <a href="mailto:mundodocamarao1@gmail.com">
                        <i className="fas fa-envelope text-dark fa-2x"></i>
                    </a>
                </div>
            </div>

            <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                <h3 className="mb-3  text-dark fw-bold">Horário de Funcionamento</h3>
                <p className="mb-4 text-dark text-center">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-calendar-day me-2 text-dark"></i>
                        Quarta - Domingo
                    </div>
                    <div className="d-flex align-items-center mt-2">
                        <i className="fas fa-utensils me-2 text-dark"></i>
                        Almoço: <span className="fw-bold">11:30 - 15:00</span>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                        <i className="fas fa-moon me-2 text-dark"></i>
                        Janta: <span className="fw-bold">19:00 - 23:00</span>
                    </div>
                </p>
            </div>
        </div>
    </div>

    )
}