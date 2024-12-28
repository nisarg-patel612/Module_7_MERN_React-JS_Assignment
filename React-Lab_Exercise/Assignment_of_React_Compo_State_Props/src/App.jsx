import './App.css'
import Functional_Components from './Components/Task_1/Functional_Components'
import Class_Components from './Components/Task_2/Class_Components'
import UserCard from './State_Props/Task_1/UserCard';
import Counter_Component from './State_Props/Task_2/Counter_Component';

function App() {

  const name = "Nisarg R Patel";

  const user = {
      name : "Nisarg Patel",
      age : 26,
      location : "Ahmedabad Gujarat India"
  }

  return (
    <>

        {/* This is Functional Component */}
        <Functional_Components name={name} />

        {/* This is Class Component */}
        <Class_Components />

        {/* This is UserCard Component */}
        <UserCard name={user.name} age={user.age} location={user.location} />

        {/* This is Counter Component */}
        <Counter_Component />

    </>
  )
}

export default App
