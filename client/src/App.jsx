import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'
import { useEffect, useState } from 'react'

const App = () => {

  const userEmail = 'franco@gmail.com'
  const [tasks, setTask] = useState(null)

  const getData = async () =>{
    try {
      const res = await fetch(`http://localhost:7006/api/tasks/${userEmail}`)
      const data = await res.json()
      setTask(data.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  //sort task by date
  const sortedTask = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className='app'>
      <ListHeader listName={'Weak tick list'} />
      {sortedTask?.map((task) => <ListItem key={task.id} task={task} />)}
    </div>
  )
}

export default App
