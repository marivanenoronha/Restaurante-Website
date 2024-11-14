import React from "react";
import  "./imageGalery.css";
import Gallery1 from "../fotos/img/drinks10.jpg";
import Gallery2 from "../fotos/img/gallery2.jpg.webp";
import Gallery3 from "../fotos/img/drink-img.jpg";
import Gallery4 from "../fotos/img/contact-img.jpg";
import Gallery5 from "../fotos/img/gallery5.jpg";
import Gallery6 from "../fotos/img/gallery6.jpg";
import Gallery7 from "../fotos/img/gallery3.jpg";
import Gallery8 from "../fotos/img/gallery4.jpg";



export function ImageGallery() {
    return (
        <div className="container py-5">
        <h2 className="text-center fs-2 mb-5">Veja nossa galeria</h2>
        <div className="row">
            <div className="col-lg-3 col-6 px-2">
                <div className="gallery-item my-3">
                    <img src={Gallery1} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-lg-3 col-6 px-2">
                <div className="gallery-item my-3">
                    <img src={Gallery2} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-lg-3 col-6 px-2">
                <div className="gallery-item my-3">
                    <img src={Gallery3} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-lg-3 col-6 px-2">
                <div className="gallery-item my-3">
                    <img src={Gallery4} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-lg-3 col-6 px-2">
                <div className="gallery-item my-3">
                    <img src={Gallery5} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-lg-3 col-6 px-2">
                <div className="gallery-item my-3">
                    <img src={Gallery6} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-lg-3 col-6 px-2">
                <div className="gallery-item my-3">
                    <img src={Gallery7} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-lg-3 col-6 px-2">
                <div className="gallery-item my-3">
                    <img src={Gallery8} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </div>
    )
}
