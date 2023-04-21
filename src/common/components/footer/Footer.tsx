import s from "./Footer.module.scss"
import ReactTypingEffect from "react-typing-effect";


export const Footer = () => {
	return (
		<div className={s.footer}>
			<div className={s.container}>
				<div className={s.span}>
					<ReactTypingEffect text={'All Rights Reserved'}
														 speed={100}
														 className={s.reactTypingEffect}
														 staticText={'© 2023'}
														 eraseSpeed={100}
					/>
				</div>
			</div>
		</div>
	)
}