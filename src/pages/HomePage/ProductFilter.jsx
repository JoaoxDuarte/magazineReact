const ProductFilters = () => {
    return (
        <section className="flex justify-center items-center py-8">
            <input id="filter-0" type="radio" name='filter-selection' className="hidden" />
            <label className="rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm
        text-slate-100 cursor-pinter"
                htmlFor="filter-0">Todos
            </label>
            <input id="filter-1" type="radio" name='filter-selection' className="hidden" />
            <label className="bg-slate-950 hover:bg-slate-800 p-2 text-sm
        text-slate-100 cursor-pinter"
                htmlFor="filter-1">Masculinos
            </label>
            <input id="filter-2" type="radio" name='filter-selection' className="hidden" />
            <label dir='rtl' className="rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm
        text-slate-100 cursor-pinter "
                htmlFor="filter-2">Femininos
            </label>
        </section>

    );

};


//name='filter-selection = pois os 3 fazem parte do msm grupo. Se seleciono um, os outros ficam pré selecionados
//dir='rtl' = direção right to left
export default ProductFilters;