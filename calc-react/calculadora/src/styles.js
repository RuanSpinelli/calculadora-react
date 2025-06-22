import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: white;
    width: 60%;
    min-height: 350px ;
    padding: 1rem;
    padding-bottom: 0.1rem;
    border-radius: 2rem;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`