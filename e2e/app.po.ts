import { browser, by, element } from 'protractor';

export class NgCourseLesson3Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
