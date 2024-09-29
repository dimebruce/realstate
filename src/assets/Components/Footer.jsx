import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer className="container mt-5 text-white text">
            <div className="d-flex flex-wrap justify-content-between align-items-center py-3 mx-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a
                        href="/"
                        className="mb-3 me-2 mb-md-0 text-white text-decoration-none"
                    >
                        {/* Puedes agregar un logo aquí si es necesario */}
                    </a>
                    <span className="mb-3 mb-md-0 text-white">
                        @dimebruce
                    </span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://github.com/dimebruce">
                            <i className="bi bi-github"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/devadriangarcia/">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://instagram.com/dimebruce">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
