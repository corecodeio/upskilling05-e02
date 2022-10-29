const Boton = ({texto, operacion}) => {
  return (
    <button onClick={() => {operacion()}}>
        {texto}
    </button>
  )
}

export default Boton