import { NgCourseLesson3Page } from './app.po';

describe('ng-course-lesson3 App', () => {
  let page: NgCourseLesson3Page;

  beforeEach(() => {
    page = new NgCourseLesson3Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
