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
  min-height: 100vh;

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

  width: 70%;
  height: 2rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #fff;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: "Plus Jakarta Sans Bold", sans-serif;
  color: #037AAF;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const TodoFirstItem = styled.div`
  display: flex;
  word-break: break-all;
`

export const TodoSecondItem = styled.div`
  display: flex;
`

export const TodoIcons = styled.img`
  height: 20px;
  cursor: pointer;
  opacity: 0.5;
  transition: all .3s ease-in-out;
  
  &:hover{
    opacity: 1;
  }
`

export const TodoPlusBtn = styled.button`

  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #eeeeee;
  padding: 0.5rem;
  font-size: 1rem;
  margin-right: 1rem;
  font-family: "Plus Jakarta Sans Bold", sans-serif;
  color: #037AAF;
  position: absolute;
  ${props => props.plus ? 'bottom: 2rem;' : 'top: 20rem;'}
  right: 2rem;
  opacity: .5;
  transition: all .3s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 1;
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

//Modal
export const TodoAddModal = styled.div`
  position: absolute;
  visibility: visible;
  opacity: 1;
  background: #ffffff;
  width: 722px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 90;
  transform: scale(.5);
  transition: opacity 300ms ease-in-out,
  visibility 300ms ease-in-out,
  transform 1000ms ease-in-out;

  &.active {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    transition: transform 300ms cubic-bezier(0.18, 0.89, 0.43, 1.19);
  }
  
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  
  @media only screen and (min-width: 600px) {
    width: 722px;
  }
  
  @media only screen and (min-width: 1200px) {
    width: 722px;
  }
`

export const TodoModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  
  @media only screen and (max-width: 600px) {
    padding: 0.5rem 1rem;
  }
  
  @media only screen and (min-width: 600px) {
    padding: 1rem 2rem;
  }
  
  @media only screen and (min-width: 1200px) {
    padding: 1rem 2rem;
  }
`