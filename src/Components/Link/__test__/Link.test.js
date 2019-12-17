import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom/extend-expect';

import Link from '../Link';

afterEach(cleanup);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDom.render(<Link />, div);
	ReactDom.unmountComponentAtNode(div);
});

it('render Link Component correctly', () => {
	const { getByText } = render(
		<Link href='https://google.com'>Hello World</Link>
	);
	expect(getByText('Hello World')).toExist;
});

it('matches snapshot', () => {
	const tree = renderer
		.create(<Link href='https://google.com'>Call to action</Link>)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
