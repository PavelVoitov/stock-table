import React, {memo} from 'react'
import s from 'features/header/Nav/Nav.module.scss'
import {Link} from "react-router-dom";

export const Nav = memo(() => {
	return (
		<div className={s.nav}>
			<Link to="mostactive" className={s.link}>
				Most Active
			</Link>
			<Link to="gainers" className={s.link}>
				Gainers
			</Link>
			<Link to="losers" className={s.link}>
				Losers
			</Link>
		</div>
	)
})