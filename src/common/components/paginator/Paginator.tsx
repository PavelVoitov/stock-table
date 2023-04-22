import {CommonButton} from "common/components/commonButton/CommonButton";
import s from './Paginator.module.scss'

type Props = {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
	itemsPerPage: number
}


export const Paginator = ({currentPage, totalPages, onPageChange}: Props) => {
	const pageNumbers = []
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i)
	}

	const handlePrevPage = () => {
		onPageChange(currentPage - 1)
	};

	const handleNextPage = () => {
		onPageChange(currentPage + 1)
	};

	return (
		<div className={s.paginator}>
			<CommonButton
				label={"<< Prev"}
				onClick={handlePrevPage}
				disabled={currentPage === 1}
			/>
			{pageNumbers.map((page) => (
				<div
					key={page}
					className={page === currentPage ? `${s.active} ${s.pageNumbers}` : s.pageNumbers}
					onClick={() => onPageChange(page)}
				>
					{page}
				</div>
			))}
			<CommonButton
				label={"Next >>"}
				onClick={handleNextPage}
				disabled={currentPage === totalPages}
			/>
		</div>
	);
};

