import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

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