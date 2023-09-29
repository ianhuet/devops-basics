const { Stack } = require('aws-cdk-lib');

const { EcrRepos } = require('./ecr-repos');

class IacStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new EcrRepos( this,
      'ecrDevOpsBasics',
      { maxImageCount: 4 }
    );
  }
}

module.exports = { IacStack }
