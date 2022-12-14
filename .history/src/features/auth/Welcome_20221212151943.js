import { useSelector }  from 'react-redux'
import { selectCurrentUser, selectCurrenToken } from './authSlice'
import { Link } from 'react-router-dom'

const Welcome = () => {
	const user = useSelector(selectCurrentUser)
	const token = useSelector(selectCurrenToken)
	return (
		<div>Welcome</div>
	)
}
export default Welcome