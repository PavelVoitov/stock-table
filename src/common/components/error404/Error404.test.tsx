import React from 'react';
import { render } from '@testing-library/react';
import s from './Error404.module.scss';
import { Error404 } from './Error404';

describe('Error404 component', () => {
	it('renders the 404 page image', () => {
		const { getByAltText } = render(<Error404 />);
		const img = getByAltText('Not Found');
		expect(img).toBeInTheDocument();
	});

	it('renders the wrapper with the correct class', () => {
		const { container } = render(<Error404 />);
		const wrapper = container.firstChild;
		expect(wrapper).toHaveClass(s.wrapper);
	});

	it('renders the image with the correct class', () => {
		const { getByAltText } = render(<Error404 />);
		const img = getByAltText('Not Found');
		expect(img).toHaveClass(s.img);
	});
});
