import { PropertyBindingPage } from './app.po';

describe('property-binding App', () => {
  let page: PropertyBindingPage;

  beforeEach(() => {
    page = new PropertyBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
