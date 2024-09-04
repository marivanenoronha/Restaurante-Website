import React from "react";
import "./menu.css";
import { useState, useEffect } from 'react';
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import AlacarteImg from "../fotos/img/menu-alacarte.jpg";
import AperitivoImg from "../fotos/img/dessert.jpg";
import DrinkImg from "../fotos/img/drink-img.jpg";
import DessertImg from "../fotos/img/dessert-img.jpg";



const alacarte = [
    {
        id: 1,
        name: "Rodizio de frutos do mar",
        description: "camarao a milanesa, bolinho de peixe, casquinha de siri, linguado grelhado, camarão alho e oleo, lula",
        price: "R$139,90 adulto R$69,90 criança"
    },
    {
        id: 2,
        name: "Combinados",
        description: "Camarão a milanesa e anchova grelhada, camarão a milanesa e tainha grelhada, camarão a milanesa e papa-terra",
        price: "R$129,90 serve 2 pessoas"
    },
    {
        id: 3,
        name: "Peixes",
        description: "Salmão grelhado, Taínha Grelhada, Linguado grelhado, Papa-terra em postas",
        price: "Apartir R$52.90 ",
    }
]

const aperitivo = [
    {
        id: 1,
        name: "Camarão",
        description: "Aperitivo camarão a milanesa",
        price: "R$69,90"
    },
    {
        id: 2,
        name: "Batata frita",
        description: "aperitivo bata frita",
        price: "R$25,00"
    },
    {
        id: 3,
        name: "Casquinha de siri",
        description: "aperitivo casquinha de siri",
        price: "R$15,00 unid"
    },
]

const dessert = [
    {
        id: 1,
        name: "Petit gateau",
        description: "Petit gateau com chocolate e sorvete sabor baunilha",
        price: "R$20,00"
    },
    {
        id: 2,
        name: "Taça de sorvete",
        description: "Taça de sorvete com duas bolas, sabores de baunilha e chocolate",
        price: "R$16,00"
    },
    {
        id: 3,
        name: "Mousses",
        description: "Mousses de marcujá, Morango, mamão, limão",
        price: "R$15,00"
    },
]

const drink = [
    {
        id: 1,
        name: "Sucos",
        description: "Sucos de morango, laranja, limão, ortelã, kiwi",
        price: "Apartir R$9,90"
    },
    {
        id: 2,
        name: "Cervejas",
        description: "Original, Heinkenn, pilsen",
        price: "Apartir R$18,00"
    },
    {
        id: 3,
        name: "Caipiras",
        description: "Caipiras de smirnof, steinhaeger, bacardi, cachaça",
        price: "Apartir R$16,00"
    },
]


function Menu() {

    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcomeMessage(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="menu-page">
            <header className="mt-5">
                <div className="container h-100 d-flex align-items-center justify-content-center">
                    <h1 className="text-light slide-in-down">Cardápio</h1>
                </div>
            </header>

            <div className="alacarte text-light py-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-primary">Á la Carte</h2>
                    <div className="row ">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={AlacarteImg} className="img-fluid w-80 mt-4 mt-lg-0" alt="" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {alacarte.map((item) => (
                                <div key={item.id}>
                                    <Card className="border-0">
                                        <CardBody>
                                            <CardTitle className="text-center fs-3 text-primary">
                                                {item.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-5">
                                                {item.description}
                                            </CardText>
                                            <CardText className="text-center fs-5 fw-bold text-primary">
                                                {item.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <div className="aperitivo  bg-dark text-light my-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text- " style={{ color: "orange" }}>Aperitivos</h2>
                    <div className="row ">
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {aperitivo.map((item) => (
                                <div key={item.id}>
                                    <Card className="border-0">
                                        <CardBody>
                                            <CardTitle className="text-center fs-3" style={{ color: "orange" }}>
                                                {item.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-5">
                                                {item.description}
                                            </CardText>
                                            <CardText className="text-center fs-5 fw-bold "  style={{ color: "orange" }}>
                                                {item.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={AperitivoImg} className="img-fluid w-85 mt-4 mt-lg-0" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="aperitivo   my-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-primary">Sobremesas</h2>
                    <div className="row ">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={DessertImg} className="img-fluid w-80 mt-4 mt-lg-0" alt="" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {dessert.map((item) => (
                                <div key={item.id}>
                                    <Card className="border-0">
                                        <CardBody>
                                            <CardTitle className="text-center fs-3 text-primary">
                                                {item.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-5">
                                                {item.description}
                                            </CardText>
                                            <CardText className="text-center fs-5 fw-bold text-primary">
                                                {item.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="drink bg-dark  my-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold " style={{ color: "orange" }}>Bebidas</h2>
                    <div className="row ">
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {drink.map((item) => (
                                <div key={item.id}>
                                    <Card className="border-0">
                                        <CardBody>
                                            <CardTitle className="text-center fs-3" style={{ color: "orange" }}>
                                                {item.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-5">
                                                {item.description}
                                            </CardText>
                                            <CardText className="text-center fs-5 fw-bold " style={{ color: "orange" }}>
                                                {item.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={DrinkImg} className="img-fluid w-80 mt-4 mt-lg-0" alt="" />
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

export default Menu;