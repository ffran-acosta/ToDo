import { useState } from "react";
import { useCookies } from "react-cookie"

const Modal = ( {mode, setShowModal, getData, task} ) => {

    const [cookies] = useCookies(null)
    const editMode = mode === 'edit' ? true : false;   
    const [data, setData] = useState({
        user_email: editMode ? task.user_email : cookies.Email,
        title: editMode ? task.title : null,
        progress: editMode ? task.progress : 50,
        date: editMode ? task.date : new Date()
    })

    const postData = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`${process.env.REACT_APP_SERVERURL}/api/save-task`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if(res.status === 200){
                setShowModal(false)
                getData()
            }
        } catch(error) {
            console.error(error)
        }
    }

    const editData = async(e) => {
        e.preventDefault()
        try{
            const res = await fetch(`${process.env.REACT_APP_SERVERURL}/api/tasks/${task.id}`, {
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(data)
            })
            if(res.status === 200) {
                setShowModal(false)
                getData()
            }
        } catch(error) {
            console.error(error)
        }
    }


    const handleChange = (e) => {
        const {name, value} = e.target
        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    return (
        <div className="overlay">
            <div className="modal">

                <div className="form-title-container">
                    <h3>Let's {mode} your task</h3>
                    <button onClick={ () => setShowModal(false) }>X</button>
                </div>

                <form>
                    <input 
                        placeholder="Put your task" 
                        required 
                        type="text" 
                        maxLength={30} 
                        name="title" 
                        value={data.title} 
                        onChange={handleChange} 
                    />
                    <br />
                    <label> Drag to select yout current progres </label>
                    <input 
                        required 
                        type="range"
                        id="range"
                        min="0" 
                        max="100" 
                        name="progress" 
                        value={data.progress} 
                        onChange={handleChange}
                    />
                    <input className={mode} type="submit" onClick={editMode ? editData : postData} />
                </form>

            </div>
        </div>
    )
}

export default Modal
