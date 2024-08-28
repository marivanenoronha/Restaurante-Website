import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from "react-bootstrap";
import "./Reviews.css";
import Person1 from "../fotos//img/person1.jpg";
import Person2 from "../fotos/img/person2.jpg";
import Person3 from "../fotos//img/person3.jpg";
import Person4 from "../fotos/img/person4.jpg";

export function Reviews() {
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-upercase fw-bold fs-1">Avaliações</h2>
            <div className="row g-4">
                <div className="col-lg-6"> 
                    <Card className="h-100 shadow">
                       <CardBody>
                       <div className="p-4 ">
                            <CardText>
                               O melhor restaurante de frutos do mar, 
                               com amplo espaço, a comida maravilosa e o 
                               atendimento diferenciado.
                            </CardText>
                        </div>
                       </CardBody>
                       <CardFooter className="d-flex align-items-center">
                        <img src={Person1} className="img-fluid rounded-circule mx-3 shadow" alt="" />
                        <CardTitle className="text-dark">Lara  Farias</CardTitle>
                       </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6"> 
                    <Card className="h-100 shadow">
                       <CardBody>
                       <div className="p-4">
                            <CardText>
                               A comida e o atendimento maravilhoso,
                                com certeza o melhor restaurante de frutos do mar.
                            </CardText>
                        </div>
                       </CardBody>
                       <CardFooter className="d-flex align-items-center">
                        <img src={Person2} className="img-fluid rounded-circule mx-3 shadow" alt="" />
                        <CardTitle className="text-dark">Junior Lemes</CardTitle>
                       </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6"> 
                    <Card className="h-100 shadow">
                       <CardBody>
                       <div className="p-4">
                            <CardText>
                               Amplo espaço com a comida e atendimento maravilhoso, amei!!!
                            </CardText>
                        </div>
                       </CardBody>
                       <CardFooter className="d-flex align-items-center">
                        <img src={Person3} className="img-fluid rounded-circule mx-3 shadow" alt="" />
                        <CardTitle className="text-dark">Maria Jordani</CardTitle>
                       </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6"> 
                    <Card className="h-100 shadow">
                       <CardBody>
                       <div className="p-4">
                            <CardText>
                              Muito boa a comida, restaurante  com o melhor atendimento.
                            </CardText>
                        </div>
                       </CardBody>
                       <CardFooter className="d-flex align-items-center">
                        <img src={Person4} className="img-fluid rounded-circule mx-3 shadow" alt="" />
                        <CardTitle className="text-dark">Lucas Ribeiro</CardTitle>
                       </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}