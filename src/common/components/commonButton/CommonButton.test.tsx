import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {CommonButton} from "common/components/commonButton/CommonButton";

describe('Button component', () => {
	const onClick = jest.fn();

	it('should render button with label text', () => {
		const { getByText } = render(<CommonButton label={"Click me"} onClick={onClick} />);
		const button = getByText('Click me');

		expect(button).toBeInTheDocument();
	});

	it('should call onClick function when button is clicked', () => {
		const { getByText } = render(<CommonButton label={"Click me"} onClick={onClick} />);
		const button = getByText('Click me');

		fireEvent.click(button);
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});

