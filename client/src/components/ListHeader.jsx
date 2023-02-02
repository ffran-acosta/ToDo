import Modal from "./Modal";
import { useState } from "react";

const ListHeader = ( {listName} ) => {
    
    const [showModal, setShowModal] = useState(false)

    const singOut = () => {
        console.log('singOut');
    }

    return (
        <div className="list-header">
            <h1> {listName} </h1>
            <div className="button-container">
                <button className="create" onClick={() => setShowModal(true)}>ADD NEW</button>
                <button className="singout" onClick={singOut}>SING OUT</button>
            </div>
            {showModal && <Modal mode={'create'} setShowModal={setShowModal} />}
        </div>
    )
}

export default ListHeader
