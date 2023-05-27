import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png'
import { Cart, Header, HeaderContainer, LinkHome, Logo } from "./styles";

const ProfileHeader = () => (
    <Header>
        <HeaderContainer className="container">
            <Link to="/">
                <LinkHome>Restaurantes</LinkHome>
            </Link>            
            <Logo src={logo}></Logo>
            <Cart>0 produto(s) no carrinho</Cart>
        </HeaderContainer>
    </Header>
)

export default ProfileHeader