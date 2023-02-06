import React from "react";
import error from "../../imagenes/404-error-lost-in-space.jpg";

export default function Error() {
    return (
        <div>
            <center> <h1>Error 404</h1></center>
            <center><img src={error} alt="error" border="6px" height="400px" width="400px" /></center>
            <center><h2>Route not found</h2></center>
        </div>
    )
}