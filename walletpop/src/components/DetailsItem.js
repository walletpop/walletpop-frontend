import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Card from './Card';
import {getRandomUrl} from './Common';

export default function DetailsItem() {

    const [item, setItem] = useState({});
    const [url] = useState(getRandomUrl());
    const { id } = useParams();

    const navigate = useNavigate();

    function buy() {
        fetch(`http://localhost:3000/sold`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            credentials: "include",
            body: JSON.stringify({ itemId: id })
        }).then(() => {
            navigate("/");
        });
    }

    useEffect(() => {
        fetch("http://localhost:3000/items/" + id)
        .then(res => res.json())
        .then(data => {
            setItem(data);
        });
      }, []);

    return(
    <div className='center'>
        <Card
            key={item.id}
            id={item.id}
            url={url}
            title={item.name}
            description={item.description}
            created={item.createdAt}
            size={'80rem'}
            price={item.price}
            showPrice={true}
            link={buy}
        />
    </div>)
}
