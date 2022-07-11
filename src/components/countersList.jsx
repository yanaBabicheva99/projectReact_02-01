import React, {useState} from 'react';
import Counter from "./Counter";

const CountersList = () => {
    const initialState = [
        {id:1, value:0, name: 'Ненужная вещь'},
        {id:2, value:4, name: 'Ложка'},
        {id:3, value:0, name: 'Вилка'},
        {id:4, value:0, name: 'Тарелка'},
        {id:5, value:0, name: 'Набор минималиста'}
    ]

    const [counters, setCounters]  = useState(initialState)


    const handleDelete = (id) => {
        setCounters(counters.filter(counter => counter.id !== id));
    }

    const handleReset = () => {
       setCounters(initialState);
    }

    const handleUpdate = () => {

        const updatedState = [
            {id:1, value:3, name: 'Ненужная вещь'},
            {id:2, value:4, name: 'Ложка'},
            {id:3, value:8, name: 'Вилка'},
            {id:4, value:9, name: 'Тарелка'},
            {id:5, value:1, name: 'Набор минималиста'}
        ];
        setCounters(updatedState)
    }

    const handleIncrement = (id) => {
       setCounters(counters.map(counter => {
           if (counter.id === id) {
               counter.value += 1;
           }
           return counter;
       })
       )
    }

    const handleDecrement = (id) => {
        setCounters(counters.map(counter => {
                if (counter.id === id) {
                    counter.value -= 1;
                }
                return counter;
            })
        )
    }


return <>
    {counters.map(counter =>
        <
        Counter key={counter.id}
                {...counter}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
        />)}
    <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>Обновление</button>
</>
}
export default CountersList;