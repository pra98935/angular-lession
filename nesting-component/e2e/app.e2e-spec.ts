import { NestingComponentPage } from './app.po';

describe('nesting-component App', () => {
  let page: NestingComponentPage;

  beforeEach(() => {
    page = new NestingComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
