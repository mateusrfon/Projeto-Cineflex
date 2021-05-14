import { Link } from 'react-router-dom';
import '../styles/success.css'

export default function Success({ success }) {
    return (
        <>
            <h1 className='title success'>Pedido feito<br/>com sucesso!</h1>
            <div className='success-info'>
                <h1 className='info-title'>Filme e sessão</h1>
                <p>{success.movie}<br/>{success.date} {success.time}</p>
                <h1 className='info-title'>Ingressos</h1>
                <p>{success.tickets.map((e) => <>Assento {e}<br/></>)}</p>
                <h1 className='info-title'>Comprador</h1>
                <p>Nome: {success.buyer}<br/>CPF: {success.cpf}</p>
            </div>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className='btn'>Voltar pra Home</div>
            </Link>
        </>
    );
}