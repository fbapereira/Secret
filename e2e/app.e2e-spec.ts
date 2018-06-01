import { AppPage } from './pages/app.po';
import { browser, element, by } from 'protractor';

describe('dashboard App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display category list ', () => {
    browser.waitForAngular();
    expect(page.getTitle()).toContain('MORE');
  });

  it('should display game detail ', () => {
    browser.waitForAngular();
    page.getDetailButton().click();

    browser.waitForAngular();
    const omodal = page.getModal();
    expect(omodal.isPresent()).toBeFalsy();
  });

  it('should display game detail and then play game', () => {
    browser.waitForAngular();
    page.getDetailButton().click();
    page.getModalPlayButton().click();
    browser.waitForAngular();
    browser.getCurrentUrl().then(function (actualUrl) {
      expect(actualUrl).toContain('play');
    });
  });

  it('should play the game ', () => {
    page.getPlayButton().click();
    browser.waitForAngular();
    browser.getCurrentUrl().then(function (actualUrl) {
      expect(actualUrl).toContain('play');
    });
  });
});
