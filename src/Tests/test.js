
import React, { useState, useEffect } from 'react';

function Testy() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 0.1);
    //     }, 1000);
    // });
    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
    return (<>
        <div className='container'>

            <h1>I have rendered {count} times!</h1>;
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>

            {/* <button>test</button>
            <button className="btn_my" onClick={handleOnClick}>
                Wróć do poprzedniej strony{" "}
            </button> */}
        </div>

    </>
    )
}
export default Testy;