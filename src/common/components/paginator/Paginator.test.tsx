import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Paginator } from './Paginator';

describe('Paginator component', () => {
	const onPageChange = jest.fn();

	it('renders page numbers', () => {
		const totalPages = 5;
		const { getByText } = render(
			<Paginator currentPage={3} totalPages={totalPages} onPageChange={onPageChange} itemsPerPage={10} />
		);

		for (let i = 1; i <= totalPages; i++) {
			const pageNumber = getByText(i.toString());
			expect(pageNumber).toBeInTheDocument();
		}
	});

	it('should call onPageChange when clicking on a page number', () => {
		const { getByText } = render(
			<Paginator currentPage={1} totalPages={5} onPageChange={onPageChange} itemsPerPage={10} />
		);
		const page2 = getByText('2');
		fireEvent.click(page2);
		expect(onPageChange).toHaveBeenCalledWith(2);
	});

	it('should disable "Prev" button on first page', () => {
		const { getByText } = render(
			<Paginator currentPage={1} totalPages={5} onPageChange={onPageChange} itemsPerPage={10} />
		);
		const prevButton = getByText('<< Prev');
		expect(prevButton).toBeDisabled();
	});

	it('should disable "Next" button on last page', () => {
		const { getByText } = render(
			<Paginator currentPage={5} totalPages={5} onPageChange={onPageChange} itemsPerPage={10} />
		);
		const nextButton = getByText('Next >>');
		expect(nextButton).toBeDisabled();
	});
});
