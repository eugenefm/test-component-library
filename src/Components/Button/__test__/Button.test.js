import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom/extend-expect';

import Button from '../Button';

afterEach(cleanup);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDom.render(
		<Button onClick={() => console.log('Hello')}>Button</Button>,
		div
	);
	ReactDom.unmountComponentAtNode(div);
});

it('render Button Component correctly', () => {
	const { getByText } = render(
		<Button onClick={() => console.log('Hello')}>Hello World</Button>
	);
	expect(getByText('Hello World')).toExist;
});

it('matches snapshot', () => {
	const tree = renderer
		.create(
			<Button onClick={() => console.log('Hello')}>Call to action</Button>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
