module.exports = {
  name: 'supervision-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/supervision-portal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
