import { useState } from 'react';

export default function Seats({ number, id, seats, setSeats, available }) {
    
    const [selected, setSelected] = useState(false);
    let seat = '';
    let clicked = '';

    if (available) {
        seat = selected ? 'selected-seat' : 'available-seat';
        clicked = () => {
            setSelected(!selected);
            setSeats([...seats, id]);
        };
    } else {
        seat = 'unavailable-seat';
        clicked = () => alert('Esse assento não está disponível');
    };
    
    return (
        <div className={seat} onClick={clicked}>
            {number < 10 ? '0' + number : number}
        </div>
    );
}