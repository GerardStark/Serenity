import { SerenityPage } from './app.po';

describe('serenity App', () => {
  let page: SerenityPage;

  beforeEach(() => {
    page = new SerenityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
