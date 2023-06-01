import { BannerDiv, BannerImg, Category, Title } from "./styles";

import bannerImg from '../../Assets/images/image2.png'

type Props = {
    capa:string
    tipo: string
    titulo: string
}

const Banner = ({capa, tipo, titulo}: Props) => (
    <BannerImg style={{ backgroundImage: `url(${capa})` }}>
        <BannerDiv className="container">
            <Category>{tipo}</Category>
            <Title>{titulo}</Title>
        </BannerDiv>
    </BannerImg>
)

export default Banner