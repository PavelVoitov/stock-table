import {Nav} from "features/header/Nav/Nav";
import s from "features/header/Header.module.scss"
import {StatusType} from "app/app-reducer";
import {Linear} from "common/components/Linear/Linear";

type Props = {
	status: StatusType
}

export const Header = ({status}: Props) => {
	return (
		<div className={s.headerBlock}>
			<Nav/>
			{status === "loading" && <Linear/>}
		</div>
	)
}