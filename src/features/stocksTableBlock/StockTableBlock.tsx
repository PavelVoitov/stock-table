import {Paginator} from "common/components/paginator/Paginator";
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "app/store";
import {ListType, setCurrentPage, StockType} from "features/stocksTableBlock/stocksTable-reducer";
import StocksTable from "features/stocksTableBlock/StocksTable/StocksTable";
import {TableTitle} from "common/components/tableTitle/TableTitle";
import s from "./StockTableBlock.module.scss"

type Props = {
	listType: ListType
	stocks: StockType[]
}

export const StockTableBlock = ({listType, stocks}: Props) => {
	const dispatch = AppDispatch()
	const currentPage = useSelector<AppRootStateType, number>(state => state.stocksTable.currentPage);
	const totalPages = useSelector<AppRootStateType, number>(state => state.stocksTable.totalPages)
	const itemsPerPage = useSelector<AppRootStateType, number>(state => state.stocksTable.itemsPerPage)

	const handlerOnPageChange = (page: number) => {
		dispatch(setCurrentPage(page))
	}

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	return (
		<div className={s.container}>
			<TableTitle listType={listType}/>
			<StocksTable
				stocks={stocks}
				listType={listType}
				startIndex={startIndex}
				endIndex={endIndex}
			/>
			<Paginator
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={handlerOnPageChange}
				itemsPerPage={itemsPerPage}
			/>
		</div>
	)
}