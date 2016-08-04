import {
  create,
  visitable,
  collection,
  fillable,
  text,
  clickable,
  isVisible,
  isHidden
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/contacts'),
  contacts: collection({
    itemScope: '[data-test="contact"]',
    item: {
      fullName: text('h3'),
      title: text('[data-test="title"]'),
      job: text('[data-test="job"]'),
      jobDescription: text('[data-test="job-description"]'),
      clickOnName: clickable('h3'),
      detailsShown: isVisible('[data-test="details"]'),
      detailsHidden: isHidden('[data-test="details"]')
    }
  }),
  fillInSearchInputWith: fillable('#contact-search')
});
