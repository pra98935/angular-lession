import { AngularTestCommandPage } from './app.po';

describe('angular-test-command App', () => {
  let page: AngularTestCommandPage;

  beforeEach(() => {
    page = new AngularTestCommandPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
