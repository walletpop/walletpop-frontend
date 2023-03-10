import Card from './Card';
import { useState, useEffect } from 'react';
import {getRandomUrl} from './Common';
import fetchData from '../utils/fetchData';

export default function Personal() {

    const [itemsSelling, setItemsSelling] = useState([]);
    const [itemsBought, setItemsBought] = useState([]);

    useEffect(() => {
        const userId = document.cookie
                        .split("; ")
                        .find((row) => row.startsWith("userId="))
                        ?.split("=")[1];

        if (userId) {
            Promise.all([
                fetch(`http://localhost:3000/items/user/${userId}`, {
                    credentials: "include",
                }),
                fetch(`http://localhost:3000/sold`, {
                    credentials: "include",
                })
            ])
                .then(([responseSelling, responseBought]) =>
                    Promise.all([responseSelling.json(), responseBought.json()])
                )
                .then(async ([dataSelling, dataBought]) => {
                    setItemsSelling(dataSelling);

                    dataBought = await Promise.all(dataBought.map(async (item) => {
                        item.item = await fetchData(`/items/${item.itemId}`, "GET", undefined);
                        return item;
                    }));

                    setItemsBought(dataBought);
                }, []);
        }
    }, []);

    return <>
        <h1 style={{textAlign: 'center'}}>My Walletpop</h1>
        <div style={{marginLeft:30, marginRight:30}}>
            <h1>Items I'm selling</h1>

            <div className='grid' style={{marginLeft:-10}}>
            {itemsSelling.map(item =>
            <Card
                key={item.id}
                id={item.id}
                url={getRandomUrl()}
                title={item.name}
                description={item.description}
                created={item.createdAt}
                size={'20rem'}
                price={item.price}
                showPrice={true}
                showDateSold={false}
                buttonText={'More info'}
            />
            )}
            </div>

            <h1 style={{marginTop: 20}}>Items I've bought</h1>

            <div className='grid' style={{marginLeft:-10}}>
            {itemsBought.map(item =>
            <Card
                key={item.id}
                id={item.id}
                url={getRandomUrl()}
                title={item.item.name}
                description={item.item.description}
                created={item.item.createdAt}
                dateSold={item.dateSold}
                size={'20rem'}
                price={item.item.price}
                showPrice={true}
                showDateSold={true}
                buttonText={'More info'}
            />
            )}
            </div>
        </div>
    </>
}
