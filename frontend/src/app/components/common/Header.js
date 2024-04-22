import {Pacifico} from 'next/font/google'
import { Fredoka } from 'next/font/google'
import Link from 'next/link'
const pacifico = Pacifico({subsets:['latin'], weight:'400'})
const fredoka = Fredoka({subsets:['latin'], weight:'400'})


export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg hms-bg-normal" data-bs-theme="dark">
            <div className="container">
                <Link className={`navbar-brand ${pacifico.className} fs-4 hms-color-light`} href="/">HMS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${fredoka.className}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-3">
                            <Link className="nav-link text-white fw-bold" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-white fw-bold" href="#">Gallery</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-white fw-bold" href="#">Services</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-white fw-bold" href="#">About</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-white fw-bold" href="#">Contact</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="btn btn-sm mt-1 text-white fw-bold hms-bg-dark" href="#">Book Event</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="btn btn-danger btn-sm mt-1" href="#">Book Room</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}