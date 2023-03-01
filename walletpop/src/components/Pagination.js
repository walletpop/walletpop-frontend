import Pagination from 'react-bootstrap/Pagination';

export function HomePagination(props){
    let active = props.page;

    function changePage(newPage){
        props.setPage(newPage)
    }

    let items = [];
    for (let number = 1; number <= props.totalPages; number++) {
      items.push(
        <Pagination.Item onClick={() => changePage(number)} key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }

    return(
    <div className='pagination'>
            <Pagination size="sm">{items}</Pagination>
      </div>
    )
}
