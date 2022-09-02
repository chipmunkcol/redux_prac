import './App.css';
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduxPlus, reduxMinus, __thunkPrac } from './Redux/reduxPrac';
import { __getPrac2 } from './Redux/reduxPrac2';

function App() {

  // const reduxData = useSelector((state) => state.prac)
  // console.log(reduxData)

  const dispatch = useDispatch()

  const onclickThunkPracHandler = () => {
    dispatch(__thunkPrac(3))
  }

  const { isLoading, error, prac2 } = useSelector((state) => state.prac2)
  console.log(isLoading, error, prac2)
  // const thunkData = useSelector((state)=> state.prac2)
  // console.log(thunkData)

  useEffect(()=>{
    dispatch(__getPrac2())
    
  }, [dispatch])

  if (isLoading) {
    return <div style={{width:'500px', height:'500px', backgroundColor:'yellowgreen'}}> 로딩중... </div>
  }
  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>hello, Redux-toolkit!</h1>
      <button onClick={()=>{dispatch(reduxPlus(1))}}>+ 버튼</button>
      <button onClick={()=>{dispatch(reduxMinus(1))}}>- 버튼</button>
      <button onClick={()=>{onclickThunkPracHandler()}}>thunk + 버튼</button>

    </div>
  );
}


export default App;
