import { MapObsPage } from './app.po';

describe('map-obs App', function() {
  let page: MapObsPage;

  beforeEach(() => {
    page = new MapObsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
