import { useSelector } from 'react-redux'
import '../App.css'
import { selectCurrentUser } from '../features/auth/authSlice'

function HomePage() {
	const user = useSelector(selectCurrentUser)
	// console.log(user)
	return <div>Homepage</div>
}

export default HomePage
