import styled from "styled-components";

//Utils

export const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ColFull = styled.div`
    width: 100%;
    max-width: 100%;
`

export const ColFifty = styled.div`
    width: 100%;
    max-width: 50%;
    height: 100vh;

  @media only screen and (max-width: 600px) {
      width: 100%;
      max-width: 100%;
  }

  @media only screen and (min-width: 600px) {
      width: 100%;
      max-width: 100%;
  }

  @media only screen and (min-width: 1200px) {
      width: 100%;
      max-width: 50%;
      height: 100vh;
  }

`

//Login
export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #037AAF;`

export const LoginH1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Plus Jakarta Sans Bold", sans-serif;
  
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`

export const LoginInput = styled.input`

  width: 100%;
  height: 2rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #fff;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: "Plus Jakarta Sans Bold", sans-serif;
  color: #037AAF;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
  }    
`

export const LoginBtn = styled.button`

  width: 100%;
  height: 2rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #fff;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: "Plus Jakarta Sans Bold", sans-serif;
  color: #037AAF;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
  }

`

//Todos
export const TodosWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;`

export const TodoH1 = styled.h1`

  font-size: 2rem;
  color: #037AAF;
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Plus Jakarta Sans Bold", sans-serif;
  
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }   
`

export const TodoLabel = styled.label`
  font-size: 1rem;
  color: #037AAF;
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Plus Jakarta Sans Bold", sans-serif;
  display: flex;
  align-items: center;
  
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
  }   
    
`

export const TodoCheckbox = styled.input`
  height: 1.3rem;
  width: 1.3rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #fff;
  padding: 0.5rem;
  font-size: 1rem;
  margin-right: 1rem;
  font-family: "Plus Jakarta Sans Bold", sans-serif;
  color: #037AAF;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
  }    
    
`

export const TodoSpan = styled.span`

  font-size: 1.3rem;
  color: #037AAF;
  text-align: center;
  font-family: "Plus Jakarta Sans Bold", sans-serif;
  
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1.3rem;
  }   
    
`


export const TodoList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: "Plus Jakarta Sans Bold", sans-serif;
  color: #037AAF;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
  }
`

export const TodoLi = styled.li`

  width: 100%;
  height: 2rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #fff;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: "Plus Jakarta Sans Bold", sans-serif;
  color: #037AAF;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
  }
    
`