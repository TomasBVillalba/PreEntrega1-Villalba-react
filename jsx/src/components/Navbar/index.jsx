import styles from "./navbar.module.scss";
import CartWidget from "../CartWidget"
const Navbar = () => {
    return <div className={styles.container}>
                <nav className="navbar navbar-expand-lg navbar-black bg-light ">
                    <div className="container-fluid">
                        <a class="navbar-brand" href="index.html">
                          <img src="./icono.png" width="110" height="80" className="logo-brand" alt="logo"/>
                        </a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                          <li className="nav-item">
                            <a className="nav-link"  href="#">Home</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Bombillas</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Mates</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#" >Yerbas</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <CartWidget/>
                </nav>
                
          </div>
        

};

export default Navbar;