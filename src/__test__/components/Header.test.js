import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';
import apiMock from '../../__mocks__/apiMock';

describe('<Header />', () => {
  const header = mount(<Header content={apiMock.header} />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.find('.Header-title').length).toEqual(1);
  });

});
