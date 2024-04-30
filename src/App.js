import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import twaLogo from './assets/balls.png'
function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <a href="https://ton.org/dev" target="_blank">
                <img src={twaLogo} className="logo" alt="TWA logo"/>
            </a>
        </div>
    );
}

export default App;
