import Restaurant from "../../Components/CardRestaurants";
import { List, ListContainer } from "./styles";



const RestList = () =>(
    <ListContainer className="container">
        <List>
            <li>
                <Restaurant title="Hioki Sushi" category="Japonesa" rate="1"></Restaurant>
            </li>
            <li>
                <Restaurant title="Hioki Sushi" category="Japonesa" rate="1"></Restaurant>
            </li>
            <li>
                <Restaurant title="Hioki Sushi" category="Japonesa" rate="1"></Restaurant>
            </li>
            <li>
                <Restaurant title="Hioki Sushi" category="Japonesa" rate="1"></Restaurant>
            </li>
            <li>
                <Restaurant title="Hioki Sushi" category="Japonesa" rate="1"></Restaurant>
            </li>
            <li>
                <Restaurant title="Hioki Sushi" category="Japonesa" rate="1"></Restaurant>
            </li>
        </List>
    </ListContainer>
)


export default RestList