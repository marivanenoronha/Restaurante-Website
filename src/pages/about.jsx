import React from "react";
import "./About.css";
import { useState, useEffect } from 'react';
import AboutChef3 from "../fotos/img/About-chef4.jpg";
import AboutChef4 from "../fotos/img/about-chef2.jpg";
import { ImageGallery } from "../components/imageGalery";
import { Reviews } from "../components/Reviews";

function About() {

    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcomeMessage(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="about-page">
            <header className="mt-5">
                <div className="container h-100 d-flex align-items-center justify-content-center">
                    <h1 className="text-light slide-in-down">Sobre nós</h1>
                </div>
            </header>
            <div className="container my-5">
                <p>Opções para todos os gostos, desde á la carte,
                    pratos aperitivos e frutos do mar.Trabalhamos com a execução dos mais variados pratos,
                    Todos nossos pratos são preparados e supervisionados por chefs renomados.
                </p>
                <p>O gosto pela pescaria inspirou a família  a abrir, em 2014, um restaurante de peixes e frutos do mar.
                    Desde a sua fundação,
                    o Restaurante-Website prima por um cardápio variado, preparado com critério e zelo.
                    Acrescido a isso uma carta de vinhos com rótulos bastante selecionados: nacionais e importados,
                    mantidos em adega climatizada, coquetéis exclusivos e sobremesas de “tirar o fôlego”.
                    È um dos melhores restaurante de frutos do mar da região, o que tem lhe rendido
                    notório reconhecimento e confiança por parte de seus clientes.</p>

                <div className="row">
                    <div className="col-lg-6">
                        <img src={AboutChef3} className="img-fluid my-4" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <img src={AboutChef4} className="img-fluid my-4" alt="" />
                    </div>
                </div>
                <p>Temos uma das melhores sequência de camarão da região.
                    Além de outros pratos deliciosos como o Polvo à Timoneiro. Também temos pratos vegetarianos, pratos sem glúten e sem lactose, consulte o garçom. Temos pratos de carnes e frangos. Petiscos para um happy hour delicioso com uma vista maravilhosa. Temos espaço para eventos de finais de ano,
                    aniversários formaturas.</p>
            </div>
            <div className="bg-dark text-light">
                <ImageGallery />
            </div>
            <div className="my-5">
                <Reviews />
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
            <div className="whatsapp-container position-fixed d-flex align-items-center">
                {showWelcomeMessage && (
                    <span className="text-light bg-success p-2 rounded">Faça sua reserva</span>
                )}
                <a
                    href="https://api.whatsapp.com/send?phone=SEU_NUMERO&text=Olá!%20Gostaria%20de%20saber%20mais%20informações."
                    className="whatsapp-icon ms-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-whatsapp fa-3x text-success"></i>
                </a>
            </div>

        </div>
    )
}

export default About;