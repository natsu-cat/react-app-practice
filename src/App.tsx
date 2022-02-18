import React from 'react'
import 'App.css'
import { Counter } from 'counter/Counter'
// import TopPageContainer from 'container/TopPageContainer'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Counter />
      {/* <TopPageContainer /> */}
    </React.Fragment>
  )
}

export default App
