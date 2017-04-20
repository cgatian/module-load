import { DynamicModulePage } from './app.po';

describe('dynamic-module App', () => {
  let page: DynamicModulePage;

  beforeEach(() => {
    page = new DynamicModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
