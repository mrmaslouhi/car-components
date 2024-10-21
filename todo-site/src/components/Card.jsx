function Card(props) {
    return (
        <div className={`h-96 flex flex-col justify-between p-4 ${props.bgColor}`}>
            <div>
                <img src={props.image} alt="Car type icon representation" width="55" />
                <h1 className="text-white font-bold my-5 font-bigShouldersFont text-3xl">{props.carType}</h1>
                <p className="text-white font-light font-lexendDecaFont">{props.carDescription}</p>
            </div>
            <button className={`bg-white border-white border-solid border-2 transition-colors ${props.btnTextColor} hover:text-white hover:${props.bgColor} px-4 py-2 rounded-full self-start mt-4`}>
                Learn more
            </button>
        </div>
    );
}

export default Card;
