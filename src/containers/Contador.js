import {useState} from 'react';
import Conteo from '../components/Conteo';
import Boton from '../components/Boton';

const Contador = () => {
    const [valor, setValor] = useState(0);
    
    const sumarContador = () => {
        setValor(valor + 1)
    }

    const restarContador = () => {
        setValor(valor - 1)
    }
    return (
    <>
        <Conteo valor={valor}/>
        <Boton texto={"Suma"} operacion={sumarContador}/>
        <Boton texto="Restar" operacion={restarContador}/>
    </>
    )
}

export default Contador;