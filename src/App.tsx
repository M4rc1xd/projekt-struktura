import {Focim, Lablec} from './components/fejlec-lablec.tsx'
import Tudnivalok from './components/tudnivalok.tsx'
import Bevezeto from './components/bevezeto.tsx'
import Listak from './components/listak.tsx'
import Tablazat from './components/tablazat.tsx'
import Kepek from './components/kepek.tsx'

function App() {

  return (
    <>
      <Focim/>
      <Bevezeto/>
      <Listak/>
      <Tablazat/>
      <Kepek/>
      <Tudnivalok/>
      <Lablec/>
    </>
  )
}

export default App
