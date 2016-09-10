import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Panel from 'components/settings/panel.jsx';

describe("<Panel />", function() {

  beforeEach(function() {

    const mockedDecorator = ({children}) => {
      console.log('TENTOU CHAMAR ISSO?')
      return (
        children
      )
    }

    Panel.__Rewire__('local', () => mockedDecorator);
  });

  afterEach(function(){

  });

  it('mount test', () => {
    expect(mount(<Panel />)).to.equal(true);
  });

});
