const ecr = require('aws-cdk-lib/aws-ecr');
const { Construct } = require('constructs');

class EcrRepos extends Construct {
  constructor(scope, id, props) {
    super(scope, id);

    const repositoryFE = new ecr.Repository(this, 'frontend', {
      repositoryName: 'ecr_dev_ops_basics_frontend'
    });
    repositoryFE.addLifecycleRule({ maxImageCount: props.maxImageCount });

    const repositoryBE = new ecr.Repository(this, 'backend', {
      repositoryName: 'ecr_dev_ops_basics_backend'
    });
    repositoryBE.addLifecycleRule({ maxImageCount: props.maxImageCount });
  }
}

module.exports = { EcrRepos }
