import { SitabyFrontendPage } from './app.po';

describe('sitaby-frontend App', function() {
  let page: SitabyFrontendPage;

  beforeEach(() => {
    page = new SitabyFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
