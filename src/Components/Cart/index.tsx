import {
    Button,
    CartContainer,
    CartItem,
    Overlay,
    Prices,
    Sidebar
} from './styles'
  
import img from '../../Assets/images/image 1.png'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import {close} from '../../store/reducers/cart'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
  
const Cart = () => {

  const {isOpen, items} = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const getTotal = () => {
      return items.reduce((acumulador, valorAtual) => {
        return (acumulador += valorAtual.preco)
      }, 0)
    }
  
    return (
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart}/>
        <Sidebar>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome}/>
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formataPreco(item.preco)}</span>
                </div>
                <button/>
              </CartItem>
            ))}
          </ul>
          <Prices>
            {formataPreco(getTotal())}
          </Prices>
          <Button>Continuar com a entrega</Button>
        </Sidebar>
      </CartContainer>
    )
  }
  
  export default Cart