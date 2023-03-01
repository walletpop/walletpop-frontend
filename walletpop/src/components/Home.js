import Card from './Card';
import { useState, useEffect } from 'react';
import { HomePagination } from './Pagination';
import {getRandomUrl} from './Common';

export default function Home() {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        fetch("http://localhost:3000/items/pagination?page="+ page + '&pageSize='+ pageSize)
        .then(res => res.json())
        .then(data => {
            setPage(Number(data.current_page));
            setItems(data.result);
            setTotalPages(data.total_pages);
        });
      }, [page]);

    return <>
        <h1 style={{textAlign: 'center'}}>Walletpop</h1>
        <div className='center'>
            <div className='grid'>
            {items.map(item =>
            <Card
                key={item.id}
                id={item.id}
                url={getRandomUrl()}
                title={item.name}
                description={item.description}
                created={item.createdAt}
                size={'32rem'}
                price={item.price}
                showPrice={false}
                buttonText={'More info'}
            />
            )}
            </div>
            <HomePagination
                page={page}
                totalPages={totalPages}
                setPage={setPage}
            />
        </div>
    </>
}
