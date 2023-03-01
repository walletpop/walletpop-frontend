import Card from './Card';
import { useState, useEffect } from 'react';
import { HomePagination } from './Pagination';
export default function Home() {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const randomPictures = [
        'https://images.pexels.com/photos/346817/pexels-photo-346817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/6193078/pexels-photo-6193078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/8251157/pexels-photo-8251157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/8580747/pexels-photo-8580747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/8801037/pexels-photo-8801037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/6252136/pexels-photo-6252136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/7514864/pexels-photo-7514864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/10526670/pexels-photo-10526670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/13883386/pexels-photo-13883386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5916954/pexels-photo-5916954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5916954/pexels-photo-5916954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/6640111/pexels-photo-6640111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/13817346/pexels-photo-13817346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/7514864/pexels-photo-7514864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ];

    useEffect(() => {
        fetch("http://localhost:3000/items/pagination?page="+ page + '&pageSize=1')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPage(Number(data.current_page));
            setItems(data.result);
            setTotalPages(data.total_pages);
        });
      }, [page]);

      function getRandomUrl(){
        let number = Math.floor(Math.random() * (randomPictures.length - 1));
        let url = randomPictures[number];
        return url;
      }

    return <>
        <h1 style={{textAlign: 'center'}}>Walletpop</h1>
        <div className='center'>
            <div className='grid'>
            {items.map(item => <Card
                key={item.id}
                url={getRandomUrl()}
                title={item.name}
                description={item.description}
                created={item.createdAt}
            />)}
            </div>
            <HomePagination
                page={page}
                totalPages={totalPages}
                setPage={setPage}
            />
        </div>
    </>
}
