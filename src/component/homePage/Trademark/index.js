import BlueExchange from "image/BlueExchange.png";
import Owen from "image/Owen.png";
import Ninomaxx from "image/Ninomaxx.png";
import Canifa from "image/Canifa.png";
import Routine from "image/Routine.png";
import { Link } from "react-router-dom";
import EvadeEva from "image/EvadeEva.png";
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
