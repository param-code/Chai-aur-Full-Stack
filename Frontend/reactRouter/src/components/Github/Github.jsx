import React, {useEffect, useState} from 'react';
import {useLoaderData} from "react-router-dom";

function Github() {
    const dataa = useLoaderData();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://api.github.com/users/hiteshchoudhary').then(response => {response.json().then(data => {setData(data)})})
    }, []);
    return (
        <>
            <div className="text-center bg-gray-500 text-white p-4 text-3xl">Github Followers: {data.followers} <img src={data.avatar_url} width={300}/></div>
        </>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await ('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}