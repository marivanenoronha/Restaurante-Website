import React from "react";
import "./About.css";
import AboutChef3 from "../fotos/img/About-chef4.jpg";
import AboutChef4 from "../fotos/img/about-chef2.jpg";
import { ImageGallery } from "../components/imageGalery";
import { Reviews } from "../components/Reviews";

function About() {
    return (
        <div className="about-page">
            <header className="mt-5">
                <div className="Container h-100 d-flex align-items-center justify-content-center">
                    <h1 className="text-light">Sobre nós</h1>
                </div>
            </header>
            <div className="Container my-5">
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
        </div>
    )
}

export default About;