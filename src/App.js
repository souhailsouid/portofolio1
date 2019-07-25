import React from 'react'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'

const HatsPage = (props) => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
)

// const TopicsList = (props) => {
// 	console.log(props)
// 	return (
// 		<div>
// 			<h1>TOPIC LIST PAGE</h1>
// 		</div>
// 	)
// }
// const TopicDetail = (props) => {
// 	console.log(props)
// 	return (
// 		<div>
// 			<h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
// 		</div>
// 	)
// }
function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				{/* <Route exact path="/topics" component={TopicsList} /> */}
				{/* <Route path="/topics/:topicId" component={TopicDetail} /> */}
				<Route path="/shop/hats" component={HatsPage} />
			</Switch>
		</div>
	)
}

export default App
