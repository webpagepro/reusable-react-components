import React from 'react';
import { TabsLayout } from './TabsLayout';
import renderer from 'react-test-renderer';
// @ts-ignore

import { Tabs } from 'sparkyLib';
// @ts-ignore

import { TabPanel } from 'sparkyLib';

it('renders correctly when there are no items', () => {
    const tree = renderer.create(<Tabs />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly with valid props', () => {
    const tree = renderer.create(<TabPanel
        title='Test Title'
    />).toJSON();
    expect(tree).toMatchSnapshot();
});