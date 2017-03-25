import { IlplPage } from './app.po';

describe('ilpl App', function() {
  let page: IlplPage;

  beforeEach(() => {
    page = new IlplPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
