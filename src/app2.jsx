import { useState, useEffect } from 'react'
import './App.css'

// зделать функцию для кнопки
// зделать функцию для таймера

 function MyButton() {
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
        <h1>Timer test</h1>
    </div>
  )
}
export default function ShowTimer() {
        const [timer, setTimer] = useState("");
    const[isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        let interval = null;

        if (isRunning) {

            interval = setInterval(() => {
                const now = new Date();
        }, 1000 );
     } else {
            clearInterval(interval);
        }
    
        return () => clearInterval(interval);
    }, [isRunning]);
    const handleToggle = () => {
        setIsRunning(!isRunning)
        if (!timer) {
            setTimer(new Date().toLocaleDateString());
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <MyButton />

            <button onClick={handleToggle} style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}>
                {isRunning ? `Now is ${timer}` : "Start timer"}
            </button>

        </div>
    )
    }