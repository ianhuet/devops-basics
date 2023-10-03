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

    console.log(process.env.ECR_REGISTRY, process.env.BE_RELEASE_NAME, process.env.FE_RELEASE_NAME);

    const repoOptions = { maxImageCount: 3 };
    new EcrRepos( this, 'ecrDevOpsBasics', repoOptions );

    // new EcsContainer( this, 'ecsDevOpsBasics' );
  }
}

module.exports = { IacStack }
