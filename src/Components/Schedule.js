import '../styles/schedule.css';

export default function Schedule() {
    return (
        <>
        <div className='title'>Selecione o horário</div>
        <div className='options-box'>
            <p>Quinta-feira - 24/06/2021</p>
            <div className='options'>
                <button className='btn small'>15:00</button>
                <button className='btn small'>16:00</button>
            </div>
            <p>Quinta-feira - 24/06/2021</p>
            <div className='options'>
                <button className='btn small'>15:00</button>
                <button className='btn small'>16:00</button>
            </div>
        </div>
        <div className='selected'></div>
        </>
    );
}