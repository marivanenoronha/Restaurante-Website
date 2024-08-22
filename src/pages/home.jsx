import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { MenuBtn } from "../components/menu.Btn";
import AboutImg from "../fotos/img/about-chef2.jpg";
import { ImageGallery } from "../components/imageGalery";
import { ContactInfo } from "../components/ContactInfo";
import contactImage from "../fotos/img/contact-img.jpg";


function Home() {
    return (
        <div className="home-page">
            <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
                            <h2 className="mb-0 text-dark fw-bold"> </h2>
                            <h1 className="mb-5 text-dark fw-bold text-center text-sm-start">
                                </h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
                        <img src={AboutImg} className="img-fluid w-52" alt="about img" />
                    </div>
                    <div className="col-lg d-flex flex-column align-items-center justify-content-center">
                        <h2 className="fs-1 mb-5 text-uppercase fw-bold">Sobre nós</h2>
                        <p>Restaurante especializado em frutos do mar, sempre com produtos e
                            ingredientes fresquinhos, selecionados por quem entende do assunto.</p>
                        <p className="mb-5">O almoço inclui camarão alho e óleo, camarão empanado, casquinha de siri, bolinho de peixe,
                            isca de peixe, lula empanada, risoto de camarão, pirão de peixe,
                            filé de peixe empanado, peixe frito, salada e fritas.
                        </p>
                        <Link to="/about">
                            <button type="button" className="btn btn-outline-dark btn-lg">Mais sobre nós</button>
                        </Link>
                    </div>
                </div>

                <div className="menu-section py-5 text-light shadow">
                    <div className="container d-flex flex-column align-items-center">
                        <h2 className="fs-1 mb-5 text-uppercase fw-bold">Nossos favoritos</h2>
                        <div className="row mb-5 w-100">
                            <div className="col-lg d-flex flex-column align-items-center mb-5 mb-lg-0">
                                <h3 className="fs-2 mb-5">Pratos</h3>
                                <ul className="px-0">
                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Rodízio de frutos do mar</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>

                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Salmão grelhado</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>

                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Camarão a milanesa</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>

                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Camarão a parmegiana</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg d-flex flex-column align-items-center mb-5 mb-lg-0">
                                <h3 className="fs-2 mb-5">Bebidas</h3>
                                <ul className="px-0">
                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Caipiras</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>

                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Sucos naturais</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>

                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Gin tropical</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>

                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Coquetel de frutas</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <MenuBtn />
                    </div>
                </div>
            </div>
            <ImageGallery />

            <div className="bg-dark text-light py-5 shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-o">
                            <ContactInfo />
                        </div>

                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={contactImage} className="img-fluid w-50" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;