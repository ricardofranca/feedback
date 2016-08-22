import fs from 'fs';
import moment from 'moment';

const flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

const createFeedback = (feedback) => {
  const description = 'Gostaria que me avaliasse';
  return {
    description,
    UserId: 1,
    createdAt: '2016-03-10T17:33:22.201Z',
    updatedAt: '2016-03-10T17:33:22.201Z',
    ...feedback,
  };
};

let id = 1;

const list = flatten([1, 2, 3].map(UserId => {
  const open = createFeedback({
    id,
    UserId,
    start: moment().format(),
    finish: moment().add(8, 'hour').format(),
    startVerify: moment().add(2, 'day').format(),
    finishVerify: moment().add(2, 'day').add(8, 'hour').format(),
  });
  id += 1;
  const verify = createFeedback({
    id,
    UserId,
    start: moment().subtract(3, 'days').format(),
    finish: moment().subtract(3, 'days').add(8, 'hour').format(),
    startVerify: moment().format(),
    finishVerify: moment().add(8, 'hour').format(),
  });
  id += 1;
  const closed = createFeedback({
    id,
    UserId,
    start: moment().subtract(5, 'days').format(),
    finish: moment().subtract(5, 'days').add(8, 'hour').format(),
    startVerify: moment().subtract(3, 'days').format(),
    finishVerify: moment().subtract(3, 'days').add(8, 'hour').format(),
  });
  id += 1;
  return [open, verify, closed];
}));

fs.writeFile('./fixtures/feedbacks.json', JSON.stringify(list), (err) => {
  console.log('Erro ao gravar feedbacks.json', err, list);

});
