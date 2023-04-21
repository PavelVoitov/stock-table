import page404 from "assets/page404.png"
import s from "./Error404.module.scss"

export const Error404 = () => {
	return (
		<div className={s.wrapper}>
				<img className={s.img} src={page404} alt="Not Found" />
		</div>
	)
}