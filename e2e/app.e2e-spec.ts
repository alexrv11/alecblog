import { AlecblogPage } from './app.po';

describe('alecblog App', () => {
  let page: AlecblogPage;

  beforeEach(() => {
    page = new AlecblogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
