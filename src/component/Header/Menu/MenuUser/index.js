// image
import logoBlueExchange from "image/iconMenu/adidas.png";
import logoOwen from "image/iconMenu/nike.png";
import logoNinomaxx from "image/iconMenu/Vans.png";
import logoCanifa from "image/iconMenu/newBalance.png";
import logoRoutine from "image/iconMenu/puma.png";
import logoEvadeEva from "image/iconMenu/converse.png";
export default function MenuUser({ list_menu, onClickCloseMenu, Link }) {
    const { BlueExchange } = list_menu.listMenu;
    const { Owen } = list_menu.listMenu;
    const { Ninomaxx } = list_menu.listMenu;
    const { NewBalance } = list_menu.listMenu;
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
                        BlueExchange
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
                        new balance <i className="fa fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                        {NewBalance &&
                            NewBalance.map((menu, key) => (
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
                        puma <i className="fa fa-caret-down" />
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
                        converse <i className="fa fa-caret-down" />
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
