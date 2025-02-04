import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--blue);
`


export const Content = styled.div`
    margin: 0 auto;
    width: 100%;
    padding: 1.5rem 1rem 11rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: none;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;


        &:hover{
            filter: brightness(0.9);
        }
    }
`