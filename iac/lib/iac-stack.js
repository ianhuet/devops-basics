const { Stack, Duration } = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');
const ecr = require('aws-cdk-lib/aws-ecr');

class IacStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true
    });

    const repositoryFE = new ecr.Repository(this, "ecrDevOpsBasicsFE", {
      repositoryName: "ecr_dev_ops_basics_frontend"
    });
    repositoryFE.addLifecycleRule({ maxImageCount: 3 });
    const repositoryBE = new ecr.Repository(this, "ecrDevOpsBasicsBE", {
      repositoryName: "ecr_dev_ops_basics_backend"
    });
    repositoryBE.addLifecycleRule({ maxImageCount: 3 });
  }
}

module.exports = { IacStack }
