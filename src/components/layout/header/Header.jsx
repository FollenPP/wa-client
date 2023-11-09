import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { HiMenuAlt3 } from 'react-icons/hi'
import { menuData } from '../../../assets/fakedata/menu/menu.fakedata'
import styles from '../../../assets/styles/header/Header.module.scss'

const Header = () => {
	const [isMenuOpen, setMenuState] = useState(false)
	return (
		<>
			<div className={styles.container}>
				<button>
					<CiUser className={`${styles.icon} ${styles.leftIcon}`} />
				</button>
				<div className={styles.menuContainer}>
					<button
						onClick={() => {
							setMenuState(!isMenuOpen)
						}}
					>
						{!isMenuOpen ? (
							<HiMenuAlt3 className={`${styles.icon} ${styles.rightIcon}`} />
						) : (
							<AiOutlineClose
								className={`${styles.icon} ${styles.rightIcon}`}
							/>
						)}
					</button>
					{isMenuOpen && (
						<div className={styles.menu}>
							{menuData.map(value => (
								<button className={styles.buttonMenu} key={value.id}>
									{value.title}
								</button>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	)
}
export default Header
