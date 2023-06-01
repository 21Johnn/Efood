import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { DadosRestaurante, MenuItem, getDescription } from "../../Components/CardRestaurants";
import Product from "../../Components/Product";
import { Close, List, Modal, ModalContainer, ModalContent } from "./styles";

import close from '../../Assets/images/close 1.png'

type ModalState = {
    isVisible: boolean
}

type Props = {
    image: string
    nome: string
    descricao: string
    porcao: string
    preco: number
}

const ProductList = () => {
    
    const { id } = useParams()

    const [currentRest, setCurrentRest] = useState<DadosRestaurante>()
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
    })
    const [selectedProduct, setSelectedProduct] = useState<MenuItem[]>([]);
    
    useEffect(()=> {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => setCurrentRest(res))

    }, [id])

    if (!currentRest) {
        return <h3>Carregando...</h3>
    }
    
    const openModal = (product: MenuItem) => {
        setSelectedProduct([product]);
        setModal({
            isVisible: true,
        });
        console.log([product])
    };
    

    return(
        <>
            <div className="container">
                <List>
                    {currentRest.cardapio?.map((item) =>(
                        <li key={item.id} onClick={() => openModal(item)}>
                            <Product foto={item.foto} nome={item.nome} descricao={getDescription(item.descricao)} id={item.id}/>
                        </li>
                    ))}
                
                </List>
            </div>
            <Modal className={modal.isVisible ? 'active' : ''}>
                <ModalContent className="container">
                    <ModalContainer>
                        <img src={selectedProduct[0].foto} alt="" />
                        <div>
                            <h4>{selectedProduct[0].nome}</h4>
                            
                            <p>{selectedProduct[0].descricao}</p>
                            <span>{selectedProduct[0].porcao}</span>
                            <button>Adicionar ao carrinho {`R$ ${selectedProduct[0].preco}0`}</button>
                            
                        </div>
                    </ModalContainer>
                        <Close src={close} alt="fechar" onClick={() => {
                            setModal({
                            isVisible: false,
                            })}} />
                </ModalContent>
            </Modal>
        </>
    )
}


export default ProductList
