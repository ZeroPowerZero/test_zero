function ListGroup() {
    const items = [
        'abc',
        'def',
        'ghk',
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