import { VelesguiPage } from './app.po';

describe('partgui App', () => {
  let page: VelesguiPage;

  beforeEach(() => {
    page = new VelesguiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
