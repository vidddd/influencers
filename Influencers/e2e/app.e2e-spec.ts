import { InfluencersPage } from './app.po';

describe('influencers App', function() {
  let page: InfluencersPage;

  beforeEach(() => {
    page = new InfluencersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
