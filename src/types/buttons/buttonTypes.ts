import { ReactNode } from 'react'

export type BaseButtonProps = {
	color: 'light' | 'dark'
	size: 'large' | 'medium' | 'small'
}

export type IconButtonProps = Omit<BaseButtonProps, 'size'> & {
	size: 'large' | 'medium' | 'small' | 'extra small'
}

export type TextButtonProps = BaseButtonProps & {
	children: ReactNode
}
