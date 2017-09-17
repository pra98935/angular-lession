import { ContentDirectivePage } from './app.po';

describe('content-directive App', () => {
  let page: ContentDirectivePage;

  beforeEach(() => {
    page = new ContentDirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
