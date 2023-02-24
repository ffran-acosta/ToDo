import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'
import Auth from './components/Auth'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

const App = () => {

  const [tasks, setTask] = useState(null)
  const [cookies] = useCookies(null)
  const userEmail = cookies.Email
  const authToken = cookies.AuthToken
  

  const getData = async () =>{
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVERURL}/api/tasks/${userEmail}`)
      const data = await res.json()
      setTask(data.data)
    } catch (error) {
      console.error(error);
    }
  }

  

  useEffect(() => {
    if(authToken){
      getData()
    }
  },)

  //sort task by date
  const sortedTask = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (

    <div className='app'>
      {!authToken && <Auth/>}
      {authToken &&
      <>
      <ListHeader listName={'Weak tick list'} getData={getData} />
      <p>Welcome back {userEmail}</p>
        {sortedTask?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)} 
        </>}
    </div>

  )
}

export default App
