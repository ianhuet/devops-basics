const { Stack } = require('aws-cdk-lib');

const { EcrRepos } = require('./ecr-repos');
const { EcsContainer } = require('./ecs-container');

class IacStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const repoOptions = { maxImageCount: 3 };
    new EcrRepos( this, 'ecrDevOpsBasics', repoOptions );

    const ecsOptions = {
      beTag: process.env.BE_RELEASE_NAME,
      feTag: process.env.FE_RELEASE_NAME,
    };
    new EcsContainer( this, 'ecsDevOpsBasics', ecsOptions);
  }
}

module.exports = { IacStack }
