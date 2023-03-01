import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Card from './Card';
import {getRandomUrl} from './Common';

  export default function DetailsItem() {

    const [item, setItem] = useState({});
    const [url, setUrl] = useState(getRandomUrl());
    let {id}  = useParams();

    function buy(){
        window.alert("you bought this!");
    }

    useEffect(() => {
        fetch("http://localhost:3000/" + id)
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
