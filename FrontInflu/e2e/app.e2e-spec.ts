import { FrontInfluPage } from './app.po';

describe('front-influ App', function() {
  let page: FrontInfluPage;

  beforeEach(() => {
    page = new FrontInfluPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
