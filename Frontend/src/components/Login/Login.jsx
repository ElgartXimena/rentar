import React, { useEffect, useState } from 'react';
import {logo } from '../../assets';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import Cookies from 'js-cookie'
import { OrbitProgress, ThreeDot } from 'react-loading-indicators';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {data, loading, error, fetchdata } = useFetch()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    async function fetch(){
      const body = { email: email, password: password}
      await fetchdata(body, 'loginUser', null)

    }
    fetch()
  };

  useEffect(()=>{
    if (data){
        console.log(data.userId)
        Cookies.set('token' , data.userId)
        navigate('/')
    }
  }, [data])


  return (
    <div className='h-svh items-center flex justify-center py-10'>
      <div className='z-10 flex flex-col justify-between drop-shadow-2xl items-center h-full p-10 my-4 mx-4 rounded-3xl bg-color-lightgray backdrop-blur-xl'>
          <div className='flex flex-col w-full gap-8 items-center'>
            <img src={logo} className='h-4'/>
            
            <div className='flex flex-col items-center'>
              <span className="flex bg-gradient-to-br from-color-lightblue from-40% to-color-blue 
              text-transparent font-poppins text-5xl font-medium bg-clip-text">
                  Welcome!
              </span>
              <h2 className='text-sm text-color-stronggray font-light font-poppins'>Enter your details to start renting</h2>
            </div>
            <form className='flex flex-col w-full max-w-sm' onSubmit={handleLogin}>
                <label className='text-left font-poppins text-color-black/70' htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    className='mb-2 p-2 bg-color-lightgray border-b-2 hover:border-color-blue transition-colors outline-none
                    font-poppins font-semibold text-color-stronggray focus:text-color-blue 
                    '
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label className='text-left font-poppins text-color-black/70' htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    className='p-2 bg-color-lightgray border-b-2 hover:border-color-blue transition-colors outline-none
                    font-poppins font-semibold text-color-stronggray focus:text-color-blue 
                    '
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </form>
          </div>
          <div className='flex flex-col w-full'>
            <button
            onClick={handleLogin}
            className='px-4 py-3 bg-color-blue/90 font-poppins flex justify-center text-white rounded-xl hover:bg-color-blue transition-all hover:drop-shadow-xl'
            >
                { loading ? (
                  <div className='flex'>
                    <ThreeDot variant="pulsate" color="#FAFAFA" size="small" text="" textColor="" />
                  </div>) : 'Continue'}
                    
            </button>
            <div className='text-left text-sm font-poppins mt-2 opacity-40'>
                <span>It isn't necessary to have an account registered in advance.</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Login;
