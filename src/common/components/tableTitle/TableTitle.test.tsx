import { render } from '@testing-library/react';
import { TableTitle } from './TableTitle';

describe('TableTitle component', () => {
	it('should render title for most active list', () => {
		const { getByText } = render(<TableTitle listType="mostactive" stocksQuantity={10} />);
		const title = getByText('Quotes for the top 10 symbols in the Most Active list.');

		expect(title).toBeInTheDocument();
	});

	it('should render title for gainers list', () => {
		const { getByText } = render(<TableTitle listType="gainers" stocksQuantity={5} />);
		const title = getByText('Quotes for the top 5 symbols in the Gainers list.');

		expect(title).toBeInTheDocument();
	});

	it('should render title for losers list', () => {
		const { getByText } = render(<TableTitle listType="losers" stocksQuantity={15} />);
		const title = getByText('Quotes for the top 15 symbols in the Losers list.');

		expect(title).toBeInTheDocument();
	});
});
