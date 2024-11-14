// image
import logoBlueExchange from "image/iconMenu/BlueExchange.png";
import logoOwen from "image/iconMenu/Owen.png";
import logoNinomaxx from "image/iconMenu/Ninomaxx.png";
import logoCanifa from "image/iconMenu/Canifa.png";
import logoRoutine from "image/iconMenu/Routine.png";
import logoEvadeEva from "image/iconMenu/EvadeEva.png";
export default function MenuUser({ list_menu, onClickCloseMenu, Link }) {
    const { BlueExchange } = list_menu.listMenu;
    const { Owen } = list_menu.listMenu;
    const { Ninomaxx } = list_menu.listMenu;
    const { Canifa } = list_menu.listMenu;
    const { Routine } = list_menu.listMenu;
    const { EvadeEva } = list_menu.listMenu;
    return (
        <nav>
            <ul className="menu">
                <li style={{ "--i": "1" }}>
                    <Link to="/" className="active" onClick={onClickCloseMenu}>
                        trang chủ
                    </Link>
                </li>
                <li className="active-menu" style={{ "--i": "2" }}>
                    <a rel="noreferrer noopener">
                        <div className="icon-menu">
                            <img
                                src={logoBlueExchange}
                                alt="logoBlueExchange"
                            />
                        </div>
                        Blue Exchange
                        <i className="fa fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                        {BlueExchange &&
                            BlueExchange.map((menu, key) => (
                                <li key={key}>
                                    <Link
                                        to={`/product-type?nsx=${menu.replace(
                                            / /g,
                                            "-"
                                        )}`}
                                        onClick={onClickCloseMenu}
                                    >
                                        {menu}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </li>
                <li className="active-menu" style={{ "--i": "3" }}>
                    <a rel="noreferrer noopener">
                        <div className="icon-menu">
                            <img src={logoOwen} alt="logoOwen" />
                        </div>
                        Owen
                        <i className="fa fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                        {Owen &&
                            Owen.map((menu, key) => (
                                <li key={key}>
                                    <Link
                                        to={`/product-type?nsx=${menu.replace(
                                            / /g,
                                            "-"
                                        )}`}
                                        onClick={onClickCloseMenu}
                                    >
                                        {menu}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </li>
                <li className="active-menu" style={{ "--i": "4" }}>
                    <a rel="noreferrer noopener">
                        <div className="icon-menu">
                            <img src={logoNinomaxx} alt="logoNinomaxx" />
                        </div>
                        Ninomaxx <i className="fa fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                        {Ninomaxx &&
                            Ninomaxx.map((menu, key) => (
                                <li key={key}>
                                    <Link
                                        to={`/product-type?nsx=${menu.replace(
                                            / /g,
                                            "-"
                                        )}`}
                                        onClick={onClickCloseMenu}
                                    >
                                        {menu}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </li>
                <li className="active-menu" style={{ "--i": "5" }}>
                    <a rel="noreferrer noopener">
                        <div className="icon-menu">
                            <img src={logoCanifa} alt="logoCanifa" />
                        </div>
                        Canifa <i className="fa fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                        {Canifa &&
                            Canifa.map((menu, key) => (
                                <li key={key}>
                                    <Link
                                        to={`/product-type?nsx=${menu.replace(
                                            / /g,
                                            "-"
                                        )}`}
                                        onClick={onClickCloseMenu}
                                    >
                                        {menu}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </li>
                <li className="active-menu" style={{ "--i": "6" }}>
                    <a rel="noreferrer noopener">
                        <div className="icon-menu">
                            <img src={logoRoutine} alt="logoRoutine" />
                        </div>
                        Routine <i className="fa fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                        {Routine &&
                            Routine.map((menu, key) => (
                                <li key={key}>
                                    <Link
                                        to={`/product-type?nsx=${menu.replace(
                                            / /g,
                                            "-"
                                        )}`}
                                        onClick={onClickCloseMenu}
                                    >
                                        {menu}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </li>
                <li className="active-menu" style={{ "--i": "7" }}>
                    <a rel="noreferrer noopener">
                        <div className="icon-menu">
                            <img src={logoEvadeEva} alt="logoEvadeEva" />
                        </div>
                        EvadeEva <i className="fa fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                        {EvadeEva &&
                            EvadeEva.map((menu, key) => (
                                <li key={key}>
                                    <Link
                                        to={`/product-type?nsx=${menu.replace(
                                            / /g,
                                            "-"
                                        )}`}
                                        onClick={onClickCloseMenu}
                                    >
                                        {menu}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
