import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./Home.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import Image1 from "../fotos/img/gallery7.jpg";
import Image2 from "../fotos/img/gallery2.jpg";
import Image3 from "../fotos/img/drink-img.jpg";
import { MenuBtn } from "../components/menu.Btn";
import AboutImg from "../fotos/img/about-chef2.jpg";
import { ImageGallery } from "../components/imageGalery";
import { ContactInfo } from "../components/ContactInfo";
import { Reviews } from "../components/Reviews";


function Home() {

    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcomeMessage(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);



    const alacarte = [
        {
            id: 1,
            category: "frutos do mar",
            name: "Frutos do mar",
            description: "Camarao a milanesa, Ridizio de frutos do mar, ensopado de camarão"
        },
        {
            id: 2,
            category: "peixes",
            name: "Peixes",
            description: "Salmão grelhado, Linguado belle meuniere, taínha grelhada"
        },
        {
            id: 3,
            category: "drinks",
            name: "Drinks",
            description: "Caipiras, Aperol spritz, Sensação tropical, Negroni  "
        },

    ]

    return (
        <div className="home-page">
            <header className="h-100 min-vh-100 d-flex align-items-center text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 d-flex d-sm-block flex-column align-items-left">
                            <h2 className="mb-0 text-dark fw-bold slide-in-left" >Restaurante e Petiscaria</h2>
                            <h1 className="mb-5 text-primary fw-bold text-center text-sm-start slide-in-left"><span style={{ color: "#fd7e14" }}>Camarão e</span> Cia</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg d-flex flex-column align-items-center justify-content-center">
                        <h2 className="fs-3 mb-5 text-uppercase fw-bold">Conheça nossa história</h2>
                        <p>Restaurante especializado em frutos do mar, sempre com produtos e ingredientes fresquinhos, selecionados por quem entende do assunto.</p>
                        <p className="mb-5"> No Restaurante e Petiscaria Camarão e Cia, nosso cardápio variado é elaborado com critério e zelo.
                            Complementamos sua experiência gastronômica com uma seleção de vinhos nacionais e importados, mantidos
                            em adega climatizada. Também oferecemos coquetéis exclusivos e sobremesas irresistíveis, tornando sua
                            visita memorável do começo ao fim.</p>

                    </div>
                    <div className="col-lg-6 d-flex justify-content-center position-relative  d-lg-flex zoom">
                        <img src={AboutImg} className="main-img img-fluid" alt="Sobre nós imagem 1" />
                        <img src={Image2} className="img-fluid position-absolute overlay-img overlay-img-left" alt="Sobre nós imagem 2" />
                        <img src={Image3} className="img-fluid position-absolute overlay-img overlay-img-right" alt="Sobre nós imagem 3" />
                    </div>
                </div>
            </div>

            <div className="container my-4 zoom-group">
                <div className="row position-relative">

                </div>
            </div>
            <div className="container my-5">
                <div className="alacarte  text-dark py-5">
                    <div className="container ">
                        <div className="row flex-column flex-lg-row ">
                        <div className="col-lg-4 d-none d-lg-flex flex-column align-items-center justify-content-center">
                                    <img src={Image1} className="img-fluid mb-3 rounded" alt="Frutos do Mar Image" />
                                    <img src={Image2} className="img-fluid mb-3 rounded" alt="Peixes Image" />
                                    <img src={Image3} className="img-fluid mb-3 rounded" alt="Drinks Image" />
                                </div>
                            <div className="col-lg-8 d-flex flex-column justify-content-around">
                                <h2 className="text-center fs-2 mb-4 mb-lg-5  text-dark">Alguns de nossos pratos e drinks</h2>
                                <div className="menu-group">
                                    {alacarte.filter(item => item.category === 'frutos do mar').map((item) => (
                                        <Card className="border-0" key={item.id}>
                                            <CardBody>
                                                <CardTitle className="text-center fs-4 text-dark">
                                                    {item.name}
                                                </CardTitle>
                                                <CardText className="text-center fs-5">
                                                    {item.description}
                                                </CardText>

                                            </CardBody>
                                        </Card>
                                    ))}
                                    <img src={Image1} className="img-fluid mb-3 w-100 d-lg-none rounded" alt="Frutos do Mar Image" />
                                </div>
                                <div className="menu-group">
                                    {alacarte.filter(item => item.category === 'peixes').map((item) => (
                                        <Card className="border-0" key={item.id}>
                                            <CardBody>
                                                <CardTitle className="text-center fs-4 text-">
                                                    {item.name}
                                                </CardTitle>
                                                <CardText className="text-center fs-5">
                                                    {item.description}
                                                </CardText>

                                            </CardBody>
                                        </Card>
                                    ))}
                                    <img src={Image2} className="img-fluid mb-3 w-100 d-lg-none rounded" alt="Peixes Image" />
                                </div>


                                <div className="menu-group">
                                    {alacarte.filter(item => item.category === 'drinks').map((item) => (
                                        <Card className="border-0" key={item.id}>
                                            <CardBody>
                                                <CardTitle className="text-center fs-4 text-dark">
                                                    {item.name}
                                                </CardTitle>
                                                <CardText className="text-center fs-5">
                                                    {item.description}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    ))}
                                    <img src={Image3} className="img-fluid mb-3 w-100 d-lg-none rounded" alt="Drinks Image" />
                                </div>

                                <div className="btn text-center">
                                    <MenuBtn />
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <ImageGallery />
            <div className=" text-dark py-5">
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
            <ContactInfo />

        </div>
    )
}

export default Home;