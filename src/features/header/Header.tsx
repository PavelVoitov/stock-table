import {Nav} from "features/header/Nav/Nav";
import s from "features/header/Header.module.scss"

export const Header = () => {
	return (
		<div className={s.headerBlock}>
					<Nav/>
		</div>
	)
}