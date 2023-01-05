import Counter from "./components/Counter"
import Form from "./components/Form"

function App() {

  return (
    <div className="App text-center bg-dark text-light min-vh-100">
      <Counter title="Contador" />
      <hr />
      <Form />
    </div>
  )
}

export default App
