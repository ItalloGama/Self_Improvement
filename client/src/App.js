import { Route, Switch } from 'react-router-dom';
import React from 'react';
import MyLogs from './pages/MyLog'
// import Comments from './pages/Comments'
// import Home from './pages/Home'
import Nav from './components/Nav'
function App() {

  
  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={MyLogs} />
          {/* <Route exact path="/quotes" component={MyLogs} /> */}
          {/* <Route exact path="/comments" component={Comments} /> */}
        </Switch>
      </main>
    </div>
  )
}

export default App

  // useEffect(() => {
  //   async function getQuotes() {
  //     let res = await axios.get(`${BASE_URL}`)
  //     console.log(res.data)
  //     setCities(res.data)
  //   }
  //   getQuotes()
  //   return <div></div>
  // }, [])
  