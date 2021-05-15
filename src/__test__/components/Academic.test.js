import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';
import apiMock from '../../__mocks__/apiMock';

describe('<Academic />', () => {
  const academic = mount(<Academic content={apiMock.academic} />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(2);
  });

});
