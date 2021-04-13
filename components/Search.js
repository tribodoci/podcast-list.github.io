import React from 'react'

export default function Search() {
    return (
        <div role="content-filter" className="container-filter">
            <input id="search-input" className="container-filter_input" type="text" placeholder="Nome" />
            <select name="status" id="status" className="container-filter_input">
                <option value="all">Todos status</option>
                <option value="active">Ativo</option>
                <option value="inactive">Desativado</option>
            </select>
            <select name="idioma" id="idioma" className="container-filter_input">
                <option value="all">Todas Linguas</option>
                <option value="pt_br">PT-BR</option>
                <option value="en">EN</option>
            </select>
        </div>
    )
}