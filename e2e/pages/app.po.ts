import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.id('title')).getText();
  }

  getDetailButton() {
    return element(by.buttonText('Detail'));
  }

  getPlayButton() {
    return element(by.buttonText('Play'));
  }
  getModalPlayButton() {
    return element(by.id('btn_play'));
  }


  getModal() {
    return element(by.css('modal fade show d-block'));
  }

}
