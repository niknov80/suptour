import { deleteSync } from 'del';
export const clean = (done) => {
  deleteSync([app.path.clean]);
  done();
};

