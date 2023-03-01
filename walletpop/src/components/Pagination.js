import Pagination from 'react-bootstrap/Pagination';

export function HomePagination(props){
    let active = props.page;
    let items = [];
    for (let number = 1; number <= props.page; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

    return(
    <div className='pagination'>
            <Pagination size="sm">{items}</Pagination>
      </div>
    )
}
