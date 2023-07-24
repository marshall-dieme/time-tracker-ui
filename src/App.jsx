import './assets/css/App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/navbar/Sidebar'

function App() {

  return (
    <>
      <Sidebar />
      <section id="content">
          <Navbar />
      </section>
    </>
  )
}

export default App
