'use client'
import React from 'react';
import { useRaiting } from './hooks/raitingHook';

const DIV_STYLE: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}


const INPUT_STYLE: React.CSSProperties = {
    display: "flex",
    boxSizing: "border-box",
    width: "500px",
    marginTop: "100px",
    border: "2px solid black",
    paddingLeft: "5px",
    height: "40px",
    borderRadius: "5px",
    color: 'black',
}

const BUTTON_STYLE: React.CSSProperties = {
    border: '2px solid black',
    padding: '5px',
    borderRadius: '5px',
    background: 'white',
    marginLeft: '5px',
    height: '40px',
    position: 'relative',
    top: '50px',
    color: 'black'
}

const InputAddress = () => {
    const [address, setAddress] = React.useState<string>("");
    const { setRaiting } = useRaiting()
    const handleClick = async () => {
        const MYHEADER = new Headers();
        MYHEADER.append("Content-Type", "application/json")
        const graphql = JSON.stringify({
            query: "query MyQuery($filter: Account_Filter){\r\n  accounts(where: $filter){\r\n    raiting\r\n  }\r\n}",
            variables: { "filter": { "id": `${address}` } }
        })
        const requestOptions: RequestInit = {
            method: "POST",
            headers: MYHEADER,
            body: graphql,
            redirect: "follow"
        };
        const response = await fetch("http://localhost:8081/query", requestOptions)
        const data = await response.json()
        setRaiting(Number(data.data.accounts[0].raiting));
        console.log(Number(data.data.accounts[0].raiting))
    }
    const onchacngeInput = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setAddress(target.value)
    }
    return (
        <div style={DIV_STYLE}>
            <input
                id='addressInput'
                placeholder='Paste your address to canculate address'
                style={INPUT_STYLE}
                onChange={e => onchacngeInput(e)}
            ></input>
            <button onClick={handleClick} style={BUTTON_STYLE}>
                Calculate
            </button>
        </div>
    );
};

export default InputAddress;