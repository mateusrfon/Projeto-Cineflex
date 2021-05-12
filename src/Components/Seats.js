import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/seats.css';

export default function Seats() {
    const { sessionId } = useParams();
    const [session, setSession] = useState('');

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
                    return <div>{e.name < 10 ? '0' + e.name : e.name}</div>;
                })}
            </div>
            
            <div className='description'>
                <div>
                    <div className='selecionado'></div>
                    Selecionado
                </div>
                <div>
                    <div className='disponivel'></div>
                    Disponível
                </div>
                <div>
                    <div className='indisponivel'></div>
                    Indisponível
                </div>
            </div>

            <div className='btn'>Voltar pra Home</div>

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