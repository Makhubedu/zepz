import styled from 'styled-components'


export const Title = styled.h1`
    color:#2D354A;
    font-family: roboto;
    font-weight: 300;
`

export const AboutUser = styled.p`
    font-size: 12px;
    margin-left: 65px;
    margin-right: 65px;
    color:#B7B8C0;
    text-align: center;
    margin-top: 16px;
`

export const Button = styled.button`
    margin-top: 16px;
    border: none;
    height: 40px;
    color: #ffffff;
    width: 35%;
    font-size: 16px;
    border-radius: 30px;
    box-shadow: 0 13px 26px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);

    &:hover{
        cursor: pointer;
        border: solid 1px #DA59B1;
        height: 40px;
        font-family: Roboto;
        color: #DA59B1;
        background: #ffffff;
        width: 35%;
        border-color: linear-gradient(to top right, #8162CE, #F54BA5);;
        border-radius: 30px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);
    }
`

export const SubTitle = styled.h2`
    color:#7C8097;
    font-size: 12px;
    font-weight: 300;
    font-family: Roboto;

`