import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Components
import Trademark from "./Trademark/index";
import SliderHome from "./Slider/index";
import ProductsType from "./ProductsType/index";
import LatestProduct from "./LatestProduct/index";
// API
import {
    getProductType,
    getProductSlider,
    getProductAll,
} from "features/Product/pathAPI";
export default function HomePage() {
    document.querySelector("title").innerHTML = "Phuong Shop";
    const dispatch = useDispatch();
    // dispatch API
    const actionGetProductAll = (params) => dispatch(getProductAll(params));
    const actionGetProductSlider = (params) =>
        dispatch(getProductSlider(params));
    const actionGetProductType = (params) => dispatch(getProductType(params));
    //Slider
    const dataSlider = useSelector((state) => state.slider.listProductSlider);
    const loadingSlider = useSelector((state) => state.slider.loading);
    // ProductsType
    const dataProductsType = useSelector(
        (state) => state.type.listProductSlider
    );
    const loadingProductsType = useSelector((state) => state.type.loading);
    // list Product
    const dataProductsList = useSelector((state) => state.ListProduct.data);
    const loadingProductsList = useSelector(
        (state) => state.ListProduct.loading
    );
    //useEffect
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        if (
            dataProductsList.length === 0 ||
            dataProductsType.length === 0 ||
            dataSlider.length === 0
        ) {
            actionGetProductType({
                name: "BlueExchange",
                page: 1,
                sort_price: 0,
            });
            actionGetProductSlider({ name: "Owen", items: 12 });
            actionGetProductAll({ page: "1", limit: "24" });
        }
    }, []);
    return (
        <div className="group-home">
            <div className="home">
                <Trademark />
                <ProductsType
                    data={dataProductsType}
                    loading={loadingProductsType}
                />
                <SliderHome data={dataSlider} loading={loadingSlider} />
                <LatestProduct
                    data={dataProductsList}
                    loading={loadingProductsList}
                />
            </div>
        </div>
    );
}
