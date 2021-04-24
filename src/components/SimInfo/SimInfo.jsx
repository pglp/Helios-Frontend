import React from 'react'

import { motion } from 'framer-motion'
import Superficie from './InfoItems/Superficie'
import Cantidad from './InfoItems/Cantidad'
import Potencia from './InfoItems/Potencia'
import Precio from './InfoItems/Precio'

const SimInfo = ({
  screenWidth,
  showForm,
  inputValues,
  superficie,
  cantidadPaneles,
  potencia,
  precio,
  selectedComuna,
}) => {
  const styles = {
    container: {
      color: '#fff',
      margin: '30px 0',
      textAlign: 'center',
    },
    itemsCont: {
      display: 'flex',
      flexDirection: screenWidth >= 1000 ? 'row' : 'column',
      justifyContent: 'space-between',
      alignItems: screenWidth >= 1000 ? 'flex-start' : 'center',
    },
    nextStep: {
      margin: screenWidth >= 1000 ? '60px auto 0 auto' : '40px 0',
      width: screenWidth >= 1000 ? '60%' : '100%',
    },
    btn: {
      backgroundColor: '#00F9A8',
      color: '#2B4AAF',
      padding: '10px 20px',
      borderRadius: 20,
      border: 'none',
      fontSize: '1rem',
      marginBottom: 10,
      cursor: 'pointer',
    },
    desc: {
      fontSize: '0.7rem',
    },
  }

  return (

    <div style={styles.container}>
      <div style={styles.itemsCont}>
        <Superficie
          screenWidth={screenWidth}
          inputValues={inputValues}
          superficie={superficie}
        />
        <Cantidad
          screenWidth={screenWidth}
          inputValues={inputValues}
          cantidadPaneles={cantidadPaneles}
        />
        <Potencia
          screenWidth={screenWidth}
          inputValues={inputValues}
          potencia={potencia}
        />
        <Precio
          screenWidth={screenWidth}
          inputValues={inputValues}
          precio={precio}
        />
      </div>
      <div
        style={styles.nextStep}
      >
        <motion.button
          onClick={() => { showForm() }}
          whileHover={{ scale: 1.08 }}
          style={styles.btn}
          disabled={!selectedComuna}
        >
          Continuar a la cotización
        </motion.button>
        <p style={styles.desc}>
          *Recuerda que estos valores son solo una estimación aproximada.
          Para obtener información más específica pincha el botón de “Continuar a la cotización”
        </p>
      </div>
    </div>
  )
}

export default SimInfo
