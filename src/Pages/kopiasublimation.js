import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Sublimation = () => {
    const navigate = useNavigate();
    const handleOnClick = () => navigate(-1);
    const [data, setData] = useState([]);
    const apiGet = () => {
        fetch("../DATA3/data3.json")
            .then((response) => response.json())
            .then((json) => {
                // console.log(json);
                setData(json);
            });
    };
    useEffect(() => {
        apiGet();
    }, []);
    return (
        <React.Fragment>


            <div class="container p-5 my-5 bg-white text-gray"><h1>CO TO JEST SUBLIMACJA</h1><p>I TO JUŻ SUBLIMACJA</p>
                <div className="row"><div className="col-9"><h1>NO WIĘC</h1></div></div></div>

            <div className="container p-5 my-5 bg-white text-gray">
                <h1>CO TO JEST SUBLIMACJA</h1>

                {data.map((product) => (
                    <p key={product.id}>{product.description}</p>
                ))}
                {/* <button className="btn" style={{ background: "#26769e", color: "white" }} onClick={handleOnClick}>
          Wróć do poprzedniej strony{" "}
        </button> */}
            </div>


        </React.Fragment >
    );
};





export default Sublimation;
