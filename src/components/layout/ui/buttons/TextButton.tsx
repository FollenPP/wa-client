import cn from 'clsx'
import { FC } from 'react'
import { TextButtonProps } from '../../../../types/buttons/buttonTypes'

const TextButton: FC<TextButtonProps> = ({ children, color, size }) => {
	return (
		<>
			<button
				className={`button textButton 
					${cn({
						light: color === 'light',
						dark: color === 'dark',
						lg: size === 'large',
						md: size === 'medium',
						sm: size === 'small',
					})}
				`}
			>
				{children}
			</button>
		</>
	)
}

export default TextButton
