import React from "react";
import "./Contact.css";
import { ContactInfo } from "../components/ContactInfo";
import { Form } from "react-bootstrap";
import { Reviews } from "../components/Reviews";

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
                        <Form action="https://api.staticforms.xyz/submit" method="POST">
                                <input type="hidden" name="accessKey" value="552d9b19-0434-44b2-a666-e0c9037b5a77" />
                                <input type="hidden" name="redirectTo" value="https://restaurante-website-steel.vercel.app/home.jsx"></input>
                                <Form.Group className="row mb-6">
                                    <div className="col-md-6">
                                        <Form.Label htmlFor="Primeiro-nome" className="text-dark" >Primeiro nome</Form.Label>
                                        <Form.Control type="text" id="primeiro-nome" />
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label htmlFor="segundo-nome" className="text-dark">Segundo nome</Form.Label>
                                        <Form.Control type="text" id="segundo-nome" />
                                    </div>
                                </Form.Group>
                                <Form.Group className="row mb-6">
                                    <div className="col-md-6">
                                        <Form.Label htmlFor="email" className="text-dark" >E-mail</Form.Label>
                                        <Form.Control type="text" id="email" />
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label htmlFor="numero-telefone" className="text-dark" >Número telefone</Form.Label>
                                        <Form.Control type="text" id="numero-telefone" />
                                    </div>
                                </Form.Group>
                                <Form.Group className="row mb-6">
                                    <div className="col-md-6">
                                        <Form.Label htmlFor="date" className="text-dark">Data</Form.Label>
                                        <Form.Control type="date" id="date" />
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label htmlFor="guests-number" className="text-dark" >Número de convidados</Form.Label>
                                        <Form.Control type="number" id="guests-number" />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label htmlFor="comments" className="text-dark">Comentarios</Form.Label>
                                    <Form.Control type="textarea" id="comments" />
                                </Form.Group>
                                <button type="submit" className="btn bg-dark text-white btn-lg">Enviar</button>
                        </Form>

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
        </div>
    )
}

export default Contact;