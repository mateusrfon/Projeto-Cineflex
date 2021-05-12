import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../styles/movies.css';

export default function Movies() {
    const [movies, setMovies] = useState('');

    useEffect(() => {
        const require = axios.get(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies'
        );
        require.then((answer) => {
            setMovies(answer.data);
        });
    }, []);
    
    if (movies === '') {
        return <div className='title'>Carregando...</div>;
    };

    return (
        <>
        <div className='title'>Selecione o filme</div>
        <div className='movies-box'>
            {movies.map(item => {
                    return (
                        <div key={item.id}>
                            <Link to={'/filme/' + item.id}><img src={item.posterURL}/></Link>
                        </div>
                    );
                })
            }
        </div>
        </>
    );
}