import { JitAotPage } from './app.po';

describe('jit-aot App', () => {
  let page: JitAotPage;

  beforeEach(() => {
    page = new JitAotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
