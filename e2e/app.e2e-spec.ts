import { SchoolagerPage } from './app.po';

describe('schoolager App', () => {
  let page: SchoolagerPage;

  beforeEach(() => {
    page = new SchoolagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
