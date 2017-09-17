import { InputDemoPage } from './app.po';

describe('input-demo App', () => {
  let page: InputDemoPage;

  beforeEach(() => {
    page = new InputDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
