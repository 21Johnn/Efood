import { BannerDiv, BannerImg, Category, Title } from "./styles";

import bannerImg from '../../Assets/images/image2.png'

const Banner = () => (
    <BannerImg style={{ backgroundImage: `url(${bannerImg})` }}>
        <BannerDiv className="container">
            <Category>Italiana</Category>
            <Title>La Dolce Vita Trattoria</Title>
        </BannerDiv>
    </BannerImg>
)

export default Banner