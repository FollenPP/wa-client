import cn from 'clsx'
import { FC } from 'react'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { IconButtonProps } from '../../../../types/buttons/buttonTypes'

const IconButton: FC<IconButtonProps> = ({ color, size }) => {
	return (
		<>
			<button
				className={`button iconButton
					${cn({
						light: color === 'light',
						dark: color === 'dark',
						lg: size === 'large',
						md: size === 'medium',
						sm: size === 'small',
						xs: size === 'extra small',
					})}`}
			>
				<HiOutlineSquares2X2 style={{ width: 20, height: 20 }} />
			</button>
		</>
	)
}

export default IconButton
