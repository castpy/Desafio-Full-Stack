import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    width: 30%;

    @media (max-width: 750px){
        width: 20%;
    }

    p {
        font-family: 
        font-size: 15px;
    }

    span {
        font-size: 20px;
    }
`
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;

    svg {
        width: 25px;
        height: 25px;
    }
`
export const HeaderTitle = styled.p`
    font-size: 20px;
    padding: 5px;
`

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
    padding: 5px;
`