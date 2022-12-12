const Produkty = ({ data }) => {
    return (
        <div>
            {data.map((card, id) => (

                <div key={card.id}>
                    {card.title}
                </div>
            ))}
        </div>
    );
}

export default Produkty;