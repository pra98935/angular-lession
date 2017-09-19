import { TwoWayBindingPage } from './app.po';

describe('two-way-binding App', () => {
  let page: TwoWayBindingPage;

  beforeEach(() => {
    page = new TwoWayBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
