import ExerciseList from "./ExerciseList"
import MotivacionalMessage from "./MotivacionalMessage"
import Welcome from "./Welcome"

function App() {

  return (
    <>
      <ExerciseList/>
      <Welcome/>
      <MotivacionalMessage message={"Vai dar tudo certo! Confia no processo"} author={"ANDRADE, Wesley"}/>
    </>
  )
}

export default App
