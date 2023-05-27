import Product from "../../Components/Product";
import { List } from "./styles";

const ProductList = () => (
    <div className="container">
        <List>
            <li>
                <Product></Product>
            </li>
            <li>
                <Product></Product>
            </li>
            <li>
                <Product></Product>
            </li>
            <li>
                <Product></Product>
            </li>
            <li>
                <Product></Product>
            </li>
            <li>
                <Product></Product>
            </li>
        </List>
    </div>
)

export default ProductList