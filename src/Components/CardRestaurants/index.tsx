import { Link } from "react-router-dom";

import { Button, Card, CardContainer, Description, Rate, RateDiv, RestaurantBanner, Tag, Title, TitleContainer } from "./styles";
import Restaurant1 from '../../Assets/images/image 1.png'

import star from '../../Assets/images/star_favorite-[#1499].png'



type Props = {
    title: string
    category: string
    description?: string
    rate: string
}

const Restaurant = ({title, category, description, rate}: Props) => (
    <Card>
        <RestaurantBanner src={Restaurant1} alt="" />
        <CardContainer>
            <TitleContainer>
                <Title>titulo</Title>
                <RateDiv>
                    <Rate>nota</Rate><span><img src={star} alt="" /></span>
                </RateDiv>
            </TitleContainer>
            <Description>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</Description>
            <Link to="/restaurant"> <Button>Saiba mais</Button> </Link>
        </CardContainer>
        <Tag>Italiana</Tag>
    </Card>
)

export default Restaurant