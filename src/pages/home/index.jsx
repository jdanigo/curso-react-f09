import React from 'react';
import { useSelector } from 'react-redux';

const HomeScreen = () => {

  const authData = useSelector(state=> state.authSlice);

    return(
        <>
          Hola mundo desde home screen  el usuario autenticado es: {authData && authData.email}
        </>
    )
}

export default HomeScreen;