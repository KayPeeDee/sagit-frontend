module.exports = {
  name: 'student-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/student-portal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
