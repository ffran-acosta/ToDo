const ListHeader = ( {listName} ) => {
    
    const singOut = () => {
        console.log('singOut');
    }

    return (
        <div className="list-header">
            <h1> {listName} </h1>
        <div className="button-container">
            <button className="create">ADD NEW</button>
            <button className="singout" onClick={singOut}>SING OUT</button>
        </div>
        </div>
    )
}

export default ListHeader
