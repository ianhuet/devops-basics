const ecr = require('aws-cdk-lib/aws-ecr');
const ecs = require('aws-cdk-lib/aws-ecs');
const ecsp = require('aws-cdk-lib/aws-ecs-patterns');
const { Construct } = require('constructs');

class EcsContainer extends Construct {
  constructor(scope, id, _props) {
    super(scope, id);

    const ecrRepo = ecr.Repository;

    const feRepo = ecrRepo.fromRepositoryArn( this, `fe_${id}`,
      'arn:aws:ecr:eu-west-1:681666088935:repository/ecr_dev_ops_basics_frontend'
    )
    const feImage = ecs.ContainerImage.fromEcrRepository(feRepo, 'main-20230929T141907')
    new ecsp.ApplicationLoadBalancedFargateService(this, `${id}Frontend`, {
      taskImageOptions: { image: feImage },
      publicLoadBalancer: true
    });

    const beRepo = ecrRepo.fromRepositoryArn( this, `be_${id}`,
      'arn:aws:ecr:eu-west-1:681666088935:repository/ecr_dev_ops_basics_backend'
    );
    const beImage = ecs.ContainerImage.fromEcrRepository(beRepo, 'main-20230929T141907')
    new ecsp.ApplicationLoadBalancedFargateService(this, `${id}Backend`, {
      taskImageOptions: { image: beImage },
      publicLoadBalancer: true
    });
  }
}

module.exports = { EcsContainer }
