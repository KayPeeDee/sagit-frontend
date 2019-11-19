module.exports = {
  name: 'adjudication-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/adjudication-portal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
