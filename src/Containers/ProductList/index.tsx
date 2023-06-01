import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { DadosRestaurante, MenuItem, getDescription } from "../../Components/CardRestaurants";
import Product from "../../Components/Product";
import { Close, List, Modal, ModalContainer, ModalContent } from "./styles";

import close from '../../Assets/images/close 1.png'

type ModalState = {
    isVisible: boolean
}


const ProductList = () => {
    
    const { id } = useParams()

    const [currentRest, setCurrentRest] = useState<DadosRestaurante>()
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
    })
    const [selectedProduct, setSelectedProduct] = useState<MenuItem>();
    
    useEffect(()=> {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => setCurrentRest(res))

    }, [id])

    if (!currentRest) {
        return <h3>Carregando...</h3>
    }
    
    const openModal = (product: MenuItem) => {
        setSelectedProduct(product);
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
            { 
                selectedProduct &&
                <Modal className={modal.isVisible ? 'active' : ''}>
                    <ModalContent className="container">
                        <ModalContainer>
                            <img src={selectedProduct.foto} alt="" />
                            <div>
                                <h4>{selectedProduct.nome}</h4>
                                
                                <p>{selectedProduct.descricao}</p>
                                <span>{selectedProduct.porcao}</span>
                                <button>Adicionar ao carrinho {`R$ ${selectedProduct.preco}0`}</button>
                                
                            </div>
                        </ModalContainer>
                            <Close src={close} alt="fechar" onClick={() => {
                                setModal({
                                isVisible: false,
                                })}} />
                    </ModalContent>
                    <div className="overlay" onClick={() => {
                                setModal({
                                isVisible: false,
                                })}}></div>
                </Modal>
            }
        </>
    )
}


export default ProductList
