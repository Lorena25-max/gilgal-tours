import "./App.css"
import Layout from "./components/layout/Layout"
import AppRouter from "./router/AppRouter"

function App() {
  return (
    <div className="app-container">
      <Layout>
        <div className="app-main">
          <AppRouter />
        </div>
      </Layout>
    </div>
  )
}

export default App