import { useSelector }  from 'react-redux'
import { selectCurrentUser, selectCurrenToken } from './authSlice'
import { Link } from 'react-router-dom'

const Welcome = () => {
	const user = useSelector(selectCurrentUser)
	const token = useSelector(selectCurrenToken)

	const welcome = user ? `Welcome ${user}!`: 'Welcome!'
	const tokenAbbr = `${token.slice(0,9)}...` 


	const content = (
		<section className='welcome'>
			<h1>{welcome}</h1>
			<p>Token: {tokenAbbr}</p>
			<p><Link to=''>Go to the Users List</Link></p>

		</section>
	)
	return (
		<div>Welcome</div>
	)
}
export default Welcome