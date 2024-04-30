import './App.css';
import { useState } from 'react'
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import twaLogo from './assets/balls.png'
function App() {

    const {onToggleButton, tg} = useTelegram();
    const [count, setCount] = useState(0)
    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <>
            <div className="App">
                <a href="https://ton.org/dev" target="_blank">
                 <img src={twaLogo} className="logo" alt="TWA logo"/>
                </a>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    <img src={twaLogo} className="logo" alt="TWA logo"/>
                    count is {count}
                </button>
            </div>
        </>
    );
}

export default App;
