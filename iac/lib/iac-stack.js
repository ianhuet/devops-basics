const { Stack } = require('aws-cdk-lib');

const { EcrRepos } = require('./ecr-repos');
// const { EcsContainer } = require('./ecs-container');

class IacStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const repoOptions = { maxImageCount: 4 };
    new EcrRepos( this, 'ecrDevOpsBasics', repoOptions );

    // new EcsContainer( this, 'ecsDevOpsBasics' );
  }
}

module.exports = { IacStack }
