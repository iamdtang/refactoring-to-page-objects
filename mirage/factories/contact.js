import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  title: faker.name.title,
  jobDescription: faker.name.jobDescriptor,
  job: faker.name.jobType
});
