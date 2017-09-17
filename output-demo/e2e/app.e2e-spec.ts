import { OutputDemoPage } from './app.po';

describe('output-demo App', () => {
  let page: OutputDemoPage;

  beforeEach(() => {
    page = new OutputDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
