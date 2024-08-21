import React from "react";
import { Link } from "react-router-dom";

export function MenuBtn() {
    return (
        <div>
            <Link to="/menu">
                <button type="button" className="btn btn-success btn-lg">Nosso cardápio completo</button>
            </Link>
        </div>
    )
}