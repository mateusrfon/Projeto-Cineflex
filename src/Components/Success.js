import '../styles/success.css'

export default function Success() {
    return (
        <>
        <h1 className='title success'>Pedido feito<br/>com sucesso!</h1>
        <div className='success-info'>
            <h1 className='info-title'>Filme e sessão</h1>
            <p>Enola Holmes<br/>24/06/2021 15:00</p>
            <h1 className='info-title'>Ingressos</h1>
            <p>Assento 15<br/>Assento 16</p>
            <h1 className='info-title'>Comprador</h1>
            <p>Nome: João da Silva Sauro<br/>CPF: 123.456.789.10</p>
        </div>
        <div className='btn'>Voltar pra Home</div>
        </>
    );
}