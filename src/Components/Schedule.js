import '../styles/schedule.css';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Schedule() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');

    useEffect(() => {
        const requirement = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieId}/showtimes`);
        requirement.then((answer) => {
            setMovie(answer.data);
        });
    }, []);

    if (movie === '') {
        return <div className='title'>Carregando...</div>
    }

    return (
        <>
        <div className='title'>Selecione o horário</div>
        <div className='options-box'>
            {movie.days.map((e) => {
                return (
                    <div key={e.id}>
                        <p>{e.weekday} - {e.date}</p>
                        <div className='options'>
                            {e.showtimes.map((e) => {
                                return (
                                    <Link key={e.id} to={'/sessao/' + e.id} style={{ textDecoration: 'none' }}>
                                        <button key={e.id} className='btn small'>{e.name}</button>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='selected'>
            <div className='frame'>
                <img src={movie.posterURL} />
            </div>
            <div className='info'>
                <p>{movie.title}</p>
            </div>
        </div>
        </>
    );
}