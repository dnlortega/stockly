const Siderbar = () => {
    return (
        <div className="w-64 bg-white">
            {/* IMAGEM */}
            <div className="px-8 py-6">
                <h1 className="text-2xl font-bold">Logo</h1>
            </div>
            {/* BOTÕES */}
            <div className="flex flex-col gap-2 p-2">
                <button className="px-6 py-3">Dash  board</button>
                <button className="px-6 py-3">Produtos</button>
                <button className="px-6 py-3">Vendas</button>
            </div>
        </div>
    );
    }

    export default Siderbar;