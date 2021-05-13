import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Seats from './Seats';

import '../styles/seats.css';

export default function Session() {
    const { sessionId } = useParams();
    const [session, setSession] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [seats, setSeats] = useState('');

    useEffect(() => {
        const requirement = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`);
        requirement.then((answer) => {
            setSession(answer.data);
        });
    }, [])

    if (session === '') {
        return <div className='title'>Carregando...</div>
    }

    return (
        <>
            <div className='title'>Selecione o(s) assento(s)</div>

            <div className='seats'>
                {session.seats.map((e,i) => {
                    return (
                        <Seats key={i} available={e.isAvailable} number={e.name} id={e.id} 
                        seats={seats} setSeats={setSeats}/>
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
                <input placeholder='Digite seu nome...' onChange={e => setName(e.target.value)} value={name}/>
                <div className='input-title'>CPF do comprador(a):</div>
                <input placeholder='Digite seu CPF...' onChange={e => setCpf(e.target.value)} value={cpf}/>
            </div>

            <div className='btn'>Reservar assento(s)</div>

            <div className='selected'>
                <div className='frame'>
                    <img src={session.movie.posterURL} />
                </div>
                <div className='info'>
                    <p>{session.movie.title}</p>
                    <p>{session.day.weekday} - {session.day.date}</p>
                </div>
            </div>
        </>
    );
}