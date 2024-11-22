import React from "react";
import { useState, useRef, useEffect } from "react";
import "./menu.css";
import MenuImg from "../fotos/img/gallery3.jpg"
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import Image1 from "../fotos/img/gallery7.jpg";
import Image2 from "../fotos/img/gallery8.jpg";
import Image3 from "../fotos/img/gallery5.jpg";
import Image4 from "../fotos/img/gallery28.jpg";
import Image5 from "../fotos/img/gallery.jpg";
import Image6 from "../fotos/img/gallery27.jpg";
import Image7 from "../fotos/img/gallery24.jpg";
import Image8 from "../fotos/img/gallery31.png";
import Image9 from "../fotos/img/gallery34.png";
import Image10 from "../fotos/img/gallery38.png";
import Image11 from "../fotos/img/gallery39.jpg";
import Image12 from "../fotos/img/gallery9.jpg";
import Image13 from "../fotos/img/gallery29.jpg";
import Image14 from "../fotos/img/gallery4.jpg";
import Image15 from "../fotos/img/gallery33.jpg";
import Image16 from "../fotos/img/gallery32.jpg";
import Image17 from "../fotos/img/gallery36.png";
import Image18 from "../fotos/img/gallery35.png";
import Image19 from "../fotos/img/gallery45.jpg";
import Image20 from "../fotos/img/gallery46.jpg";
import Image21 from "../fotos/img/gallery9.jpg";
import Image22 from "../fotos/img/gallery17.jpg";
import Image23 from "../fotos/img/gallery18.jpg";
import Image24 from "../fotos/img/gallery19.jpg";
import Image25 from "../fotos/img/gallery20.jpg";
import Image26 from "../fotos/img/gallery21.jpg";
import Image27 from "../fotos/img/gallery47.jpg";
import Image28 from "../fotos/img/gallery48.jpg";
import Image29 from "../fotos/img/gallery39.jpg";
import Image30 from "../fotos/img/gallery40.jpg";
import Image31 from "../fotos/img/gallery41.jpg";
import Image32 from "../fotos/img/gallery49.jpg";
import Image33 from "../fotos/img/gallery38.png";
import Image34 from "../fotos/img/gallery50.jpg";
import Image35 from "../fotos/img/gallery11.jpg";
import Image36 from "../fotos/img/appetizers6.jpg";
import Image37 from "../fotos/img/appetizers5.jpg";
import Image38 from "../fotos/img/appetizers8.jpg";
import Image39 from "../fotos/img/appetizers12.jpg";
import Image40 from "../fotos/img/appetizers13.jpg";
import Image41 from "../fotos/img/appetizers2.jpg";
import Image42 from "../fotos/img/appetizers16.jpg";
import Image43 from "../fotos/img/appetizers17.jpg";
import Image44 from "../fotos/img/appetizers18.jpg";
import Image45 from "../fotos/img/appetizers1.jpg";
import Image46 from "../fotos/img/appetizers19.jpg";
import Image47 from "../fotos/img/appetizers20.jpg";
import Image48 from "../fotos/img/appetizers21.jpg";
import Image49 from "../fotos/img/appetizers22.jpg";
import Image50 from "../fotos/img/appetizers3.jpg";
import Image51 from "../fotos/img/dessert-img.jpg";
import Image52 from "../fotos/img/desserts3.jpg";
import Image53 from "../fotos/img/desserts2.jpg";
import Image54 from "../fotos/img/desserts1.jpg";
import gallery1 from '../fotos/img/gallery12.jpg';
import gallery2 from '../fotos/img/gallery9.jpg';
import gallery3 from '../fotos/img/gallery16.jpg';
import gallery4 from '../fotos/img/gallery36.jpg';
import gallery5 from '../fotos/img/gallery11.jpg';
import gallery6 from '../fotos/img/dessert-img.jpg';
import gallery7 from '../fotos/img/drinks1.jpg';
import gallery8 from '../fotos/img/drinks2.jpg';
import gallery9 from '../fotos/img/drink3.jpg';
import gallery10 from '../fotos/img/drinks8.jpg';
import gallery11 from '../fotos/img/drinks7.jpg';
import gallery12 from '../fotos/img/drinks11.png';
import gallery13 from '../fotos/img/drinks5.jpg';



const alacarte = [
    {
        id: 1,
        name: "Rodízio de frutos do mar",
        category: "Frutos do mar",
        description: "Camarão a milanesa, camarão alho e oléo, linguado grelhado, camarão ensopado, camarão ao molho branco, bolinho de peixe e casquinha de siri,",
        price: (
            <ul className="list-unstyled text-center">
                <li>Criança: <strong>R$69,90</strong></li>
                <li>Adulto: <strong>R$139,90</strong></li>
            </ul>
        ),
        image: Image1
    },
    {
        id: 2,
        name: "Camarão a milanesa",
        category: "Frutos do mar",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$85,90</strong></li>
                <li>2 pessoas: <strong>R$155,90</strong></li>
                <li>4 pessoas: <strong>R$265.90</strong></li>
                <li>6 pessoas: <strong>R$329,90</strong></li>
            </ul>
        ),
        image: Image2
    },
    {
        id: 3,
        name: "Strogonoff de camarão",
        category: "Frutos do mar",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$89,90</strong></li>
                <li>2 pessoas: <strong>R$159,90</strong></li>
                <li>4 pessoas: <strong>R$279,90</strong></li>
                <li>6 pessoas: <strong>R$329,90</strong></li>
            </ul>
        ),
        image: Image3
    },
    {
        id: 4,
        category: "Frutos do mar",
        name: "Camarão ao catupiry",
        category: "Frutos do mar",
        description: "camarões suculentos, envovidos no molho de queijo catupiry",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$89,90</strong></li>
                <li>2 pessoas: <strong>R$159,90</strong></li>
                <li>4 pessoas: <strong>R$259,90</strong></li>
                <li>6 pessoas: <strong>R$329,90</strong></li>
            </ul>
        ),
        image: Image4
    },
    {
        id: 5,
        name: "Camarão alho e oléo",
        category: "Frutos do mar",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$75,90</strong></li>
                <li>2 pessoas: <strong>R$145,90</strong></li>
                <li>4 pessoas: <strong>R$259,90</strong></li>
                <li>6 pessoas: <strong>R$315,90</strong></li>
            </ul>
        ),
        image: Image5
    },
    {
        id: 6,
        name: "Camarão ao bafo",
        category: "Frutos do mar",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$134,90</strong></li>
                <li>4 pessoas: <strong>R$234,90</strong></li>
                <li>6 pessoas: <strong>R$284,90</strong></li>
            </ul>
        ),
        image: Image6
    },
    {
        id: 7,
        name: "Mista da casa",
        category: "Frutos do mar",
        description: "camarão, bolinho de peixe, isca de tilápia, batata frita",
        price: (
            <ul className="list-unstyled text-center">
                <li>2 pessoas: <strong>R$159,90</strong></li>


            </ul>
        ),
        image: Image7
    },
    {
        id: 8,
        name: "Moda da casa",
        category: "Frutos do mar",
        description: "Camarões servidos sobre arroz cremoso com ervilhas e presunto, envolvidos com molho branco. Finalizando com queijo muçarela e coberto com batata palha",
        price: (
            <ul className="list-unstyled text-center">
                <li>2 pessoas: <strong>R$159,90</strong></li>
                <li>4 pessoas: <strong>R$272,90</strong></li>
            </ul>
        ),
        image: Image8
    },
    {
        id: 9,
        name: "Ensopado de camarão",
        category: "Frutos do mar",
        description: "camarões suculentos, envovidos no molho de queijo catupiry",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$89,90</strong></li>
                <li>2 pessoas: <strong>R$159,90</strong></li>
                <li>4 pessoas: <strong>R$279,90</strong></li>
                <li>6 pessoas: <strong>R$329,90</strong></li>
            </ul>
        ),
        image: Image9
    },
    {
        id: 10,
        name: "Camarão a parmegiana",
        category: "Frutos do mar",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$89,90</strong></li>
                <li>2 pessoas: <strong>R$159,90</strong></li>
                <li>4 pessoas: <strong>R$279,90</strong></li>
                <li>6 pessoas: <strong>R$329,90</strong></li>
            </ul>
        ),
        image: Image10
    },
    {
        id: 11,
        name: "Lasanha de camarão",
        description: "Camadas de massas intercaladas com recheio cremoso de camarões refogados ao  molho especial, finalizado com queijo muçarela gratinado",
        category: "Frutos do mar",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$89,90</strong></li>
                <li>2 pessoas: <strong>R$159,90</strong></li>
                <li>4 pessoas: <strong>R$259,90</strong></li>
                <li>6 pessoas: <strong>R$309,90</strong></li>
            </ul>
        ),
        image: Image11
    },
    {
        id: 12,
        name: "Salmão grelhado",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$50,00</strong></li>
                <li>2 pessoas: <strong>R$95,00</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image12
    },
    {
        id: 13,
        name: "Belle meuniere",
        category: "Peixes",
        description: " Linguado, camarões, molho de alcaparras e champignons. ",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$89,90</strong></li>
                <li>2 pessoas: <strong>R$165,90</strong></li>
                <li>4 pessoas: <strong>R$292,90</strong></li>
                <li>6 pessoas: <strong>R$342,90</strong></li>
            </ul>
        ),
        image: Image13
    },
    {
        id: 14,
        name: "Tainha grelhada",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$59,90</strong></li>
                <li>2 pessoas: <strong>R$98,90</strong></li>
                <li>4 pessoas: <strong>R$172,90</strong></li>
                <li>6 pessoas: <strong>R$225,90</strong></li>
            </ul>
        ),
        image: Image14
    },
    {
        id: 15,
        name: "Tainha ou papa terra frita",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$48,90</strong></li>
                <li>2 pessoas: <strong>R$98,90</strong></li>
                <li>4 pessoas: <strong>R$172,90</strong></li>
                <li>6 pessoas: <strong>R$225,90</strong></li>
            </ul>
        ),
        image: Image15
    },
    {
        id: 16,
        name: "Anchova grelhada",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$52,90</strong></li>
                <li>2 pessoas: <strong>R$98,90</strong></li>
                <li>4 pessoas: <strong>R$172,90</strong></li>
                <li>6 pessoas: <strong>R$225,90</strong></li>
            </ul>
        ),
        image: Image16
    },
    {
        id: 17,
        name: "Linguado grelhado",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$79,90</strong></li>
                <li>2 pessoas: <strong>R$148,90</strong></li>
                <li>4 pessoas: <strong>R$258,90</strong></li>
                <li>6 pessoas: <strong>R$299,90</strong></li>
            </ul>
        ),
        image: Image17
    },
    {
        id: 18,
        name: "Linguado a milanesa",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoas: <strong>R$79,90</strong></li>
                <li>2 pessoas: <strong>R$148,90</strong></li>
            </ul>
        ),
        image: Image18
    },
    {
        id: 19,
        name: "Tilápia grelhada",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image19
    },
    {
        id: 20,
        name: "Adicionais",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>molho à belle meuniere: <strong>R$25,00</strong></li>
                <li>Molho de alcaparras: <strong>R$10,00</strong></li>
                <li>molho de camarão: <strong>R$20,00</strong></li>
                <li>Molho de maracjá: <strong>R$15,00</strong></li>
                <li>buffet adulto: <strong>R$20,00</strong></li>
                <li>buffet Criança: <strong>R$10,00</strong></li>
            </ul>
        ),
        image: Image20
    },

    {
        id: 21,
        name: "Picanha grelhada",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image21
    },
    {
        id: 22,
        name: "Picanha a parmegiana",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image22
    },
    {
        id: 23,
        name: "Filé mingon grelhado",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image23
    },
    {
        id: 24,
        name: "Filé mingon a parmegiana",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image24
    },
    {
        id: 25,
        name: "Frando grelhado",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image25
    },
    {
        id: 26,
        name: "Frango a milanesa",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image26
    },
    {
        id: 27,
        name: "Lasanha de frango",
        description: "Camadas de massas intercaladas com recheio cremoso de frango desfiado, acompanhado de milho, ervilha e um molho especial.",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$84,90</strong></li>
                <li>2 pessoas: <strong>R$154,90</strong></li>
                <li>4 pessoas: <strong>R$254,90</strong></li>
                <li>6 pessoas: <strong>R$304,90</strong></li>
            </ul>
        ),
        image: Image27
    },
    {
        id: 28,
        name: "Misto de picanha e frango ",
        description: "Acompanha batata frita.",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$139,90</strong></li>
            </ul>
        ),
        image: Image28
    },
    {
        id: 29,
        name: "Abobrinha a milanesa",
        category: "Vegetariano/Vegano",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$22,90</strong></li>
                <li>2 pessoas: <strong>R$45,90</strong></li>
            </ul>
        ),
        image: Image29
    },
    {
        id: 30,
        name: "Abobrinha à parmegiana",
        category: "Vegetariano/Vegano",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$22,90</strong></li>
                <li>2 pessoas: <strong>R$69,90</strong></li>
            </ul>
        ),
        image: Image30
    },
    {
        id: 31,
        name: "Lasanha de proteina de soja",
        category: "Vegetariano/Vegano",
        description: "Opção de escolha entre molhos de tomate caseiro ou molho branco. Contém queijo. ",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$42,90</strong></li>
                <li>2 pessoas: <strong>R$49,90</strong></li>
            </ul>
        ),
        image: Image31
    },
    {
        id: 32,
        name: "Proteina de soja ao molho sugo",
        category: "Vegetariano/Vegano",
        description: "Proteina refogada com pimentão, cebola, tomate, molho sugo e pimenta do reino. ",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$45,90</strong></li>
                <li>2 pessoas: <strong>R$69,90</strong></li>
            </ul>
        ),
        image: Image32
    },
    {
        id: 33,
        name: "Beringela à parmegiana",
        category: "Vegetariano/Vegano",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$22,90</strong></li>
                <li>2 pessoas: <strong>R$45,90</strong></li>
            </ul>
        ),
        image: Image33
    },
    {
        id: 34,
        name: "Beringela à milanesa",
        category: "Vegetariano/Vegano",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$22,90</strong></li>
                <li>2 pessoas: <strong>R$45,90</strong></li>
            </ul>
        ),
        image: Image34
    },
    {
        id: 35,
        name: "Misto de frutos do mar",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>2 pessoas: <strong>R$139,90</strong></li>
                <li>4 pessoas: <strong>R$249,90</strong></li>
            </ul>
        ),
        image: Image35
    },
    {
        id: 36,
        name: "Pestisco da casa",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Porção: <strong>R$109,90</strong></li>
            </ul>
        ),
        image: Image36
    },
    {
        id: 37,
        name: "Camarao a milanesa",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Porção: <strong>R$72,90</strong></li>
            </ul>
        ),
        image: Image37
    },
    {
        id: 38,
        name: "Camarao alho e oleo",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Com casca: <strong>R$65,90</strong></li>
                <li>Sem casca: <strong>R$72,90</strong></li>
            </ul>
        ),
        image: Image38
    },
    {
        id: 39,
        name: "Camarao e batata frita",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Porção: <strong>R$65,90</strong></li>
            </ul>
        ),
        image: Image39
    },
    {
        id: 40,
        name: "Linguado em tiras",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Porção: <strong>R$65,90</strong></li>
            </ul>
        ),
        image: Image40
    },
    {
        id: 41,
        name: "Tilapia em tiras",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Porção: <strong>R$62,90</strong></li>
            </ul>
        ),
        image: Image41
    },
    {
        id: 42,
        name: "Lula a milanesa",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Porção: <strong>R$52,90</strong></li>
            </ul>
        ),
        image: Image42
    },
    {
        id: 43,
        name: "Tainha frita ou papa terra",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>porção: <strong>R$145,90</strong></li>
            </ul>
        ),
        image: Image43
    },
    {
        id: 44,
        name: "Ostra gratinada",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Porção: <strong>R$12,90</strong></li>
            </ul>
        ),
        image: Image44
    },
    {
        id: 45,
        name: "Casquinha de siri",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Porção: <strong>R$15,90</strong></li>
            </ul>
        ),
        image: Image45
    },
    {
        id: 46,
        name: "Picanha em tiras",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Porção: <strong>R$75,90</strong></li>
            </ul>
        ),
        image: Image46
    },
    {
        id: 47,
        name: "Frango em tiras",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Porção: <strong>R$39,90</strong></li>
            </ul>
        ),
        image: Image47
    },
    {
        id: 48,
        name: "polenta frita",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Porção: <strong>R$19,90</strong></li>
            </ul>
        ),
        image: Image48
    },
    {
        id: 49,
        name: "Mandioca noisete",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>Porção: <strong>R$21,90</strong></li>
            </ul>
        ),
        image: Image49
    },
    {
        id: 50,
        name: "Batata frita",
        category: "Aperitivos",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$25,90</strong></li>
                <li>2 pessoas: <strong>R29,90</strong></li>
                <li>4 pessoas: <strong>R$52,90</strong></li>
            </ul>
        ),
        image: Image50
    },
    {
        id: 51,
        name: "Petit gateau",
        category: "Sobremesas",
        description: "Delicioso Petit gateau de chocolate servido com sorvete de baunilha.",
        price: (
            <ul className="list-unstyled text-center">
                <li><strong>R$20,00</strong></li>
            </ul>
        ),
        image: Image51
    },
    {
        id: 52,
        name: "Taça de sorvete",
        category: "Sobremesas",
        description: "Taça de sorvete com três bolas: baunilha, chocolate e morango.",
        price: (
            <ul className="list-unstyled text-center">
                <li><strong>R$16,00</strong></li>
            </ul>
        ),
        image: Image52
    },
    {
        id: 53,
        name: "Mousses",
        category: "Sobremesas",
        description: "Mousse de maracujá, morango, limão e mamão.",
        price: (
            <ul className="list-unstyled text-center">
                <li><strong>R$20,00</strong></li>
            </ul>
        ),
        image: Image53
    },
    {
        id: 54,
        name: "Creme de mamão papaia",
        category: "Sobremesas",
        price: (
            <ul className="list-unstyled text-center">
                <li><strong>R$20,00</strong></li>
            </ul>
        ),
        image: Image54
    },
]


const drinks = [
    /*Refriger*/
    { id: 1, name: "Coca cola 600ml", category: "Refrigerantes", price: "R$ 9,90" },
    { id: 2, name: "Coca cola zero 600ml", category: "Refrigerantes", price: "R$ 9,90" },
    { id: 3, name: "Coca cola lata", category: "Refrigerantes", price: "R$ 6,90" },
    { id: 4, name: "Coca cola zero lata", category: "Refrigerantes", price: "R$ 6,90" },
    { id: 5, name: "Guaraná 600ml", category: "Refrigerantes", price: "R$ 9,90" },
    { id: 6, name: "Guaraná zero 600ml", category: "Refrigerantes", price: "R$ 9,90" },
    { id: 7, name: "Guaraná lata", category: "Refrigerantes", price: "R$ 6,90" },
    { id: 8, name: "Guaraná zero lata", category: "Refrigerantes", price: "R$ 6,90" },
    { id: 9, name: "H20", category: "Refrigerantes", price: "R$ 9,90" },
    { id: 10, name: "Tônica lata ", category: "Refrigerantes", price: "R$ 6,90" },
    { id: 11, name: "Soda lata", category: "Refrigerantes", price: "R$ 6,90" },
    { id: 12, name: "Schwerppes citrus lata", category: "Refrigerantes", price: "R$ 6,90" },
    /*Sucos*/
    { id: 13, name: "Jarra de suco", description: "Laranja, abacaxi, maracujá, kiwi, limão e morango", category: "Sucos", price: "R$ 24,90" },
    { id: 14, name: "Jarra de suco", description: "Abacaxi com hortelã ou limonada suíça", category: "Sucos", price: "R$ 26,90" },
    { id: 15, name: "Copo de suco", description: "Limonada suíça, maracujá, morango e kiwi", category: "Sucos", price: "R$ 11,90" },
    { id: 16, name: "Copo de suco", description: "Laranja , abacaxi e limão", category: "Sucos", price: "R$ 9,90" },
    /*Cervejas*/
    { id: 17, name: "Original", category: "Cervejas", price: "R$ 18,00" },
    { id: 18, name: "Heineken", category: "Cervejas", price: "R$ 19,00" },
    { id: 19, name: "Heineken long neck", category: "Cervejas", price: "R$ 11,90" },
    { id: 20, name: "S/álcool long neck", category: "Cervejas", price: "R$ 11,90" },
    { id: 21, name: "Malzebier 350ml", category: "Cervejas", price: "R$ 9,90" },
    { id: 22, name: "Pilsen 600ml", category: "Cervejas", price: "R$ 19,90" },
    { id: 23, name: "Belgian 600ml", category: "Cervejas", price: "R$ 19,90" },
    { id: 24, name: "In natura 600ml", category: "Cervejas", price: "R$ 19,90" },
    { id: 25, name: "Ipa", category: "Cervejas", price: "R$ 19,90" },
    { id: 26, name: "Weiss 600ml", category: "Cervejas", price: "R$ 19,90" },
    { id: 27, name: "Chopp pilsen 750ml", category: "Cervejas", price: "R$ 32,00" },
    { id: 28, name: "Chopp belgian 750ml", category: "Cervejas", price: "R$ 32,00" },
    /*Caipiras*/
    { id: 29, name: "Absolut", description: "Morango, abacaxi, limão, maracujá, kiwi e uva", category: "Caipiras", price: "R$ 26,90" },
    { id: 30, name: "Smirnoff", description: "Morango, abacaxi, limão, maracujá, kiwi e uva", category: "Caipiras", price: "R$ 21,90" },
    { id: 31, name: "Caipicorona", category: "Caipiras", price: "R$ 30,00" },
    { id: 32, name: "Bacardi", description: "Morongo, abacaxi, limão, maracujá, kiwi e uva", category: "Caipiras", price: "R$ 20,90" },
    { id: 33, name: "Steinhager", description: "Morango, abacaxi, limão, maracujá, kiwi e uva", category: "Caipiras", price: "R$ 20,90" },
    { id: 34, name: "Ypióca", description: "Morango, abacaxi, limão, maracujá, kiwi e uva", category: "Caipiras", price: "R$ 16,90" },
    { id: 35, name: "Cachaça", description: "Morango, abacaxi, limão, maracujá e uva", category: "Caipiras", price: "R$ 14,90" },
    { id: 36, name: "Vinho", category: "Caipiras", price: "R$ 16,90" },
    /*Drinks*/
    { id: 37, name: "Alexander", description: "Licor de cacau, conhaque, creme de leite e canela", category: "Drinks", price: "R$ 19,90" },
    { id: 38, name: "Aperol spritz", description: "aperol, espumante prosseco e água com gás", category: "Drinks", price: "R$ 29,90" },
    { id: 49, name: "Campari tropical", description: "Campari e red bull tropical", category: "Drinks", price: "R$ 29,90" },
    { id: 40, name: "Clericot", description: "Vinho branco água tônica e frutas", category: "Drinks", price: "R$ 29,90" },
    { id: 41, name: "Fusca azul", description: "Corote e fanta uva", category: "Drinks", price: "R$ 29,90" },
    { id: 42, name: "Fusca azul", description: "Corote e fanta uva", category: "Drinks", price: "R$ 29,90" },
    { id: 43, name: "Gin citrus", description: "Gin, schweppes citrus e laranja", category: "Drinks", price: "R$ 28,90" },
    { id: 44, name: "Gin de melancia e horteã", description: "Gin, melancia , hortelã e água", category: "Drinks", price: "R$ 29,90" },
    { id: 45, name: "Gin mágico", description: "Gin, curaçau blue, monster ultra violet", category: "Drinks", price: "R$ 29,90" },
    { id: 46, name: "Gin morango e kiwi", description: "Gin, fanta strawberry e kiwi", category: "Drinks", price: "R$ 29,90" },
    { id: 47, name: "Gin tônica", description: "Gin, água tônica, limão siciliano e alecrim", category: "Drinks", price: "R$ 28,90" },
    { id: 48, name: "Martini", description: "Gin, vermute seco", category: "Drinks", price: "R$ 29,90" },
    { id: 49, name: "Mogito", description: "Rum, soda, limão e hprtelã", category: "Drinks", price: "R$ 22,90" },
    { id: 50, name: "Negroni", description: "Gin, campari e vermute", category: "Drinks", price: "R$ 29,90" },
    { id: 51, name: "Pinã colada", description: "Suco de abacaxi, leite de coco, rum, creme de leite e leite condensado", category: "Drinks", price: "R$ 29,90" },
    { id: 52, name: "Sensação tropical", description: "Corote e energético de melancia", category: "Drinks", price: "R$ 29,90" },
    { id: 53, name: "Coquetel de fruas sem/álcool", description: "Água co gás e duas opções de frutas: morango, maracujá, laranja, limão, kiwi e abacaxi", category: "Drinks", price: "R$ 19,90" },
    { id: 54, name: "Lagoa azul sem/álcool", description: "Isotômico azul, água com gás e hortelã", category: "Drinks", price: "R$ 19,90" },
    { id: 55, name: "Mogito sem/álcool", description: "Água com gás, limão e hortelã", category: "Drinks", price: "R$ 19,90" },
    /*Vinhos*/
    { id: 56, name: "Vinho branco seco", category: "Taça de vinho", price: "R$ 16,90" },
    { id: 57, name: "Vinho branco suave", category: "Taça de vinho", price: "R$ 16,90" },
    { id: 58, name: "Vinho tinto seco", category: "Taça de vinho", price: "R$ 16,90" },
    { id: 69, name: "Vinho tinto suave", category: "Taça de vinho", price: "R$ 16,90" },
    /*Doses*/
    { id: 60, name: "Bacardi", category: "Doses", price: "R$ 9,00" },
    { id: 61, name: "Smirnoff", category: "Doses", price: "R$ 10,00" },
    { id: 62, name: "Ypióca", category: "Doses", price: "R$ 9,00" },
    { id: 63, name: "Campari", category: "Doses", price: "R$ 9,00" },
    { id: 64, name: "Underberg", category: "Doses", price: "R$ 8,00" },
    { id: 65, name: "Martini", category: "Doses", price: "R$ 14,00" },
    { id: 66, name: "Red label", category: "Doses", price: "R$ 20,00" },
    { id: 67, name: "Passaport", category: "Doses", price: "R$ 14,00" },
    { id: 68, name: "Licor 43", category: "Doses", price: "R$ 23,00" },
    { id: 79, name: "Amarula", category: "Doses", price: "R$ 15,00" },
    { id: 70, name: "Redbull", category: "Doses", price: "R$ 16,00" }
];


const Menu = () => {



    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryDrinks, setcategoryDrinks] = useState(null);

    const categoryRefs = useRef({});
    const itemsRef = useRef(null);
    const drinksItemsRef = useRef(null);


    const scrollToItems = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };


    const scrollToCategory = (category) => {
        if (categoryRefs.current[category]) {
            categoryRefs.current[category].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };


    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setTimeout(() => scrollToItems(itemsRef), 300);
    };


    const handleDrinksClick = (category) => {
        setcategoryDrinks(category);
        setTimeout(() => scrollToItems(drinksItemsRef), 300);
    };


    const handleCloseClick = () => {
        scrollToCategory(selectedCategory);
        setSelectedCategory(null);
    };

    const handleDrinksCloseClick = () => {
        scrollToCategory(categoryDrinks);
        setcategoryDrinks(null);
    };

    useEffect(() => {
        if (selectedCategory) {
            scrollToItems();
        }
    }, [selectedCategory]);



    const categoryImages = {
        "Frutos do mar": gallery1,
        "Peixes": gallery2,
        "Carnes": gallery3,
        "Vegetariano/Vegano": gallery4,
        "Aperitivos": gallery5,
        "Sobremesas": gallery6,
    };

    const categoryImgDrinks = {
        "Refrigerantes": gallery7,
        "Sucos": gallery8,
        "Cervejas": gallery9,
        "Caipiras": gallery10,
        "Drinks": gallery11,
        "Taça de vinho": gallery12,
        "Doses": gallery13
    }


    const categories = ["Frutos do mar", "Peixes", "Carnes", "Vegetariano/Vegano", "Aperitivos", "Sobremesas"];

    const categoriesDrinks = ["Refrigerantes", "Sucos", "Cervejas", "Caipiras", "Drinks", "Taça de vinho", "Doses"];

    function useFixedBackground() {
        useEffect(() => {
            const menuPage = document.querySelector('.menu-page');

            const handleScroll = () => {
                const scrollY = window.scrollY;
                if (menuPage) {
                    menuPage.style.setProperty('--scrollY', `${scrollY * 0.5}px`);
                }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
    }

    useFixedBackground();

    return (

        <div
            style={{
                backgroundImage: `url(${MenuImg})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
            }}
        >

            <div className="menu-page" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', minHeight: '100vh',
                  '--scrollY': '0px', // Valor inicial para scroll
                  backgroundPosition: `center var(--scrollY)`,
             }}

            >
                <div className="alacarte text-light py-5">
                    <div className="container">
                        <h2 className=" menu text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-light">Cardápio</h2>
                        <div className="text-center mb-5 d-flex justify-content-center flex-wrap category-grid">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="mx-3 category-item"
                                    ref={(el) => {
                                        if (el) {
                                            categoryRefs.current[category] = el;
                                        }
                                    }}
                                >
                                    <img
                                        src={categoryImages[category]}
                                        alt={category}
                                        className="img-fluid mb-3 rounded"
                                        style={{ width: "100%", height: "120px", objectFit: "cover" }}
                                    />


                                    <button
                                        className={`category-button btn btn-outline-light  w-100 ${selectedCategory === category ? "active" : ""} `}
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        {category}
                                    </button>
                                </div>
                            ))}
                        </div>
                        {selectedCategory && (
                            <div ref={itemsRef}>
                                <h3 className=" menu text-center fs-2 mb-4 fw-bold text-light">{selectedCategory}</h3>
                                <div className="row">
                                    {alacarte
                                        .filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase())
                                        .map((item) => (
                                            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
                                                <Card className="border-0 h-100">
                                                    <div className="d-flex justify-content-center">
                                                        <img
                                                            src={item.image}
                                                            className="img-fluid w-75 mt-3 mb-3 rounded"
                                                            alt={item.name}
                                                        />
                                                    </div>
                                                    <CardBody>
                                                        <CardTitle className=" menu-name text-center fs-4 fw-bold text-dark">{item.name}</CardTitle>
                                                        <CardText className="text-center fs-6 text-dark">{item.description}</CardText>
                                                        <CardText className="text-center fs-6 text-dark">{item.price}</CardText>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        ))}
                                </div>
                                <div className="text-center mt-4">
                                    <button className="btn btn-light" onClick={handleCloseClick}>
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="drink   my-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h2 className=" menu text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-light">Drinks</h2>
                            <div className="text-center mb-5 d-flex justify-content-center flex-wrap category-grid">
                                {categoriesDrinks.map((category, index) => (
                                    <div
                                        key={index}
                                        className="mx-3 category-item"
                                        ref={(el) => {
                                            if (el) categoryRefs.current[category] = el;
                                        }}
                                    >
                                        <img
                                            src={categoryImgDrinks[category]}
                                            alt={category}
                                            className="img-fluid mb-3 rounded"
                                            style={{ width: "100%", height: "120px", objectFit: "cover" }}
                                        />
                                        <button
                                            className={`category-button btn btn-outline-light w-100 ${categoryDrinks === category ? "active" : ""}`}
                                            onClick={() => handleDrinksClick(category)}
                                        >
                                            {category}
                                        </button>
                                    </div>
                                ))}
                            </div>
                            {categoryDrinks && (
                                <div ref={drinksItemsRef}>
                                    <h3 className=" menu text-center fs-2 mb-4 text-light">{categoryDrinks}</h3>
                                    <ul className="list-group">
                                        {drinks
                                            .filter((item) => item.category.toLowerCase() === categoryDrinks.toLowerCase())
                                            .map((item) => (
                                                <li key={item.id} className="list-group-item">
                                                    <CardBody className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                            <div className="d-flex flex-column">
                                                                <CardTitle className="fs-6 text-dark">{item.name}</CardTitle>
                                                                <CardText className="text-muted mt-1">{item.description}</CardText>
                                                            </div>
                                                            <CardText className="fs-6 text-dark">{item.price}</CardText>
                                                        </div>
                                                    </CardBody>
                                                </li>
                                            ))}
                                    </ul>
                                    <div className="text-center mt-4">
                                        <button className="btn btn-light" onClick={handleDrinksCloseClick}>
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className="whatsapp-container position-fixed d-flex align-items-center">
                    <a
                        href="https://wa.me/5548991606536"
                        className="whatsapp-icon ms-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-whatsapp fa-3x text-success"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Menu;