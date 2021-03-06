import React from 'react'

import Paneles from '../../../assets/images/qtt.png'

const Cantidad = ({ screenWidth, cantidadPaneles }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: screenWidth >= 1000 ? '0 10px' : '0',
    },
    title: {
      fontSize: '1rem',
      fontWeight: '600',
      marginBottom: 0,
    },
    item: {
      position: 'relative',
      marginTop: 10,
      textAlign: 'center',
    },
    img: {
      width: 114,
      margin: '5px 0 0 0',
    },
    values: {
      margin: 0,
      fontWeight: '700',
      fontSize: 18,
      color: 'rgb(0, 249, 168)',
    },
  }

  return (

    <div style={styles.container}>
      <h3 style={styles.title}>Cantidad de paneles</h3>
      <div style={styles.item}>
        <img src={Paneles} style={styles.img} alt="" />
        <p style={styles.values}>
          {cantidadPaneles}
          {' '}
          und.
        </p>
      </div>
    </div>

  )
}

export default Cantidad
