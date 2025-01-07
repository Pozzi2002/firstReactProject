import { LeftSide } from './components/LeftSide/leftSide.jsx'
import { RightSide } from './components/RightSide/rightSide.jsx'

export default function App() {
    return(
        <main>
          <section className='leftSide'>
            <LeftSide />
          </section>
          <aside>
            <RightSide />
          </aside>
        </main>
    )
}