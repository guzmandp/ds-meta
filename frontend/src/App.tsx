import './App.css'
import NotificationButton from './components/notificationButton'
import Header from './components/Header'
import SalesCard from './components/SalesCard/indes'

function App() {

  return (
    <>
      <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
