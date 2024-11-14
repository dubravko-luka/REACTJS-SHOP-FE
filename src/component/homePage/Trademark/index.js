import BlueExchange from "image/adidas.png";
import Owen from "image/converse.jpg";
import Ninomaxx from "image/newBalance.jpg";
import Canifa from "image/nike.jpg";
import Routine from "image/puma.jpg";
import { Link } from "react-router-dom";
import EvadeEva from "image/vans.jpg";
import "./style.css";
export default function Trademark() {
    return (
        <div className="group-trademark">
            <h3>THƯƠNG HIỆU</h3>
            <div className="container-trademark">
                <ul>
                    <li>
                        <Link to="/product?trademark=BlueExchange">
                            <img src={BlueExchange} alt="BlueExchange" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/product?trademark=Owen">
                            <img src={Owen} alt="Owen" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/product?trademark=Ninomaxx">
                            <img src={Ninomaxx} alt="Ninomaxx" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/product?trademark=Canifa">
                            <img src={Canifa} alt="Canifa" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/product?trademark=Routine">
                            <img src={Routine} alt="Routine" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/product?trademark=EvadeEva">
                            <img src={EvadeEva} alt="EvadeEva" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
