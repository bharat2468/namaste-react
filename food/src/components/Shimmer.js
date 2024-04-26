const Shim_card = () => {
    return (
        <>
            <div className="card bg-slate-600  h-[500px] w-[300px] animate-pulse shadow-xl"></div>
        </>
    );
};

const Shimmer = () => {
    const cardsArray = [];
    for(let i=0;i<15;i++){
        cardsArray.push(i);
    }
    
    return (
        <div className="m-20">
                <div className="card mb-10 bg-slate-600 h-[50px] w-[200px] animate-pulse shadow-xl"></div>

                <div className="flex flex-wrap gap-10">
                    {cardsArray.map((index) => {
                        return <Shim_card key={index}/>
                    })}
                </div>
                
        </div>
    );
};

export default Shimmer;
