import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Seats from './Seats';

import '../styles/seats.css';

export default function Session({ success, setSuccess }) {
    const { sessionId } = useParams();
    const [session, setSession] = useState('');
    const [checkout, setCheckout] = useState( {ids: [], name: '', cpf: ''} );
    let history = useHistory();

    useEffect(() => {
        const requirement = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`);
        requirement.then((answer) => {
            setSession(answer.data);
        });
    }, [])

    if (session === '') {
        return <div className='title'>Carregando...</div>
    }

    function reserve() {
        success.movie = session.movie.title;
        success.date = session.day.date;
        success.time = session.name;
        success.tickets = checkout.ids.map((e) => {
            const seat = session.seats.filter((t) => t.id === e);
            return seat[0].name;
        });
        success.buyer = checkout.name;
        success.cpf = checkout.cpf;
        setSuccess({...success});

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many', checkout);
        promise.then(() => history.push("/sucesso"));
    }

    return (
        <>
            <div className='title'>Selecione o(s) assento(s)</div>

            <div className='seats'>
                {session.seats.map((e,i) => {
                    return (
                        <Seats key={i} available={e.isAvailable} number={e.name} id={e.id} 
                        checkout={checkout} setCheckout={setCheckout}/>
                    );
                })}
            </div>
            

            <div className='description'>
                <div><div className='selected-seat'></div>Selecionado</div>
                <div><div className='available-seat'></div>Disponível</div>
                <div><div className='unavailable-seat'></div>Indisponível</div>
            </div>

            <div className='buyer'>
                <div className='input-title'>Nome do comprador(a):</div>
                <input placeholder='Digite seu nome...' onChange={e => setCheckout({...checkout, name: e.target.value})} value={checkout.name}/>
                <div className='input-title'>CPF do comprador(a):</div>
                <input placeholder='Digite seu CPF...' onChange={e => setCheckout({...checkout, cpf: e.target.value})} value={checkout.cpf}/>
            </div>

            <div className='btn' onClick={reserve}>Reservar assento(s)</div>

            <div className='selected'>
                <div className='frame'>
                    <img src={session.movie.posterURL} />
                </div>
                <div className='info'>
                    <p>{session.movie.title}</p>
                    <p>{session.day.weekday} - {session.name}</p>
                </div>
            </div>
        </>
    );
}