import { useSelector }  from 'react-redux'
import { selectCurrentUser, selectCurrenToken } from './authSlice'
import { Link } from 'react-router-dom'

const Welcome = () => {
	const user = useSelector(selectCurrentUser)
	const token = useSelector(selectCurrenToken)

	const welcome = user ? `Welcome ${user}!`: 'Welcome!'
	const welcome = user ? `Welcome ${user}!`: 'Welcome!'
	return (
		<div>Welcome</div>
	)
}
export default Welcome