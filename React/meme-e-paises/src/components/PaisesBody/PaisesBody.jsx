import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "../../assets/styles/Paises.module.css";

function PaisesBody() {
    const [countriesData, setCountriesData] = useState([]);
    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    };

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
            .then(response => {
                setCountriesData(response.data);
            })
            .catch(error => {
                console.log(error + " Erro na requisição dos dados");
            });
    }, []);

    return (
        <table className={`table table-dark table-striped-columns table-hover`}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">País</th>
                    <th scope="col">Sigla</th>
                    <th scope="col">Capital</th>
                </tr>
            </thead>
            <tbody>
                {countriesData.map((country, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{country.name}</td>
                        <td>{country.alpha2Code}</td>
                        <td>{country.capital || ''}</td>
                    </tr>
                ))}
            </tbody>
            <button className={`btn btn-dark ${styles.btnVoltar}`} onClick={() => handleNavigation('/')}>Voltar</button>
        </table>
    );
}

export default PaisesBody;