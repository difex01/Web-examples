import Counter from "../../components/Counter"
import DefaultTemplate from "../../template/DefaultTemplate"

const Home = () => {
  return (
    <div>
      <DefaultTemplate>
        <h1>Welcome, Pizza Planeta</h1>
        <Counter title="Counter" />
      </DefaultTemplate>
    </div>
  )
}

export default Home