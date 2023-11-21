import IconButton from '../ui/buttons/IconButton'
import TextButton from '../ui/buttons/TextButton'

const Header = () => {
	return (
		<div style={{ height: 100, width: 100, padding: 15, margin: 15 }}>
			<div style={{ padding: 15 }}>
				<IconButton size='large' color='dark'></IconButton>
			</div>
			<TextButton size='small' color='dark'>
				Button
			</TextButton>
		</div>
	)
}
export default Header
