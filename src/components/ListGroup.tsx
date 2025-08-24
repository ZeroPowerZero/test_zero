function ListGroup() {
    const items = [
        'new york',
        'jammu',
        'paloura',
    ];

    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                {items.map(item => <li className="list-group-item" key ={item}>{item}</li>)}
            </ul>

        </>);
}

export default ListGroup;