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
                        <Form>
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
                                <Form.Label htmlFor="comments"  className="text-dark">Comentarios</Form.Label>
                                <Form.Control type="textarea" id="comments" />
                            </Form.Group>
                            <button type="submit" className="btn   bg-dark text-white btn-lg">Enviar</button>
                        </Form>
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