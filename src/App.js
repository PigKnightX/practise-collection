import { useEffect, useState } from 'react';
import './App.css';
import Commitment from './customPromise';

function App() {
    const [msg, setMsg] = useState('');

    useEffect(() => {
        new Commitment((resolve, reject) => {
            setMsg('commitment');
        });
    }, [])
    return (
        <div className="App">
            {msg}
        </div>
    );
}

export default App;
