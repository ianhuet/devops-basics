const ecr = require('aws-cdk-lib/aws-ecr');
const ecs = require('aws-cdk-lib/aws-ecs');
const ecsp = require('aws-cdk-lib/aws-ecs-patterns');
const { Construct } = require('constructs');

class EcsContainer extends Construct {
  constructor(scope, id, props) {
    super(scope, id);

    const ecrRepo = ecr.Repository;
    const ecrRepoArn = 'arn:aws:ecr:eu-west-1:681666088935:repository';

    // const feRepo = ecrRepo.fromRepositoryArn( this, `fe_${id}`,
    //   `${ecrRepoArn}/ecr_dev_ops_basics_frontend`
    // )
    // const feImage = ecs.ContainerImage.fromEcrRepository(feRepo, props.releaseName)
    // new ecsp.ApplicationLoadBalancedFargateService(this, `${id}Frontend`, {
    //   taskImageOptions: { image: feImage },
    //   publicLoadBalancer: true
    // });

    const beRepo = ecrRepo.fromRepositoryArn( this, `be_${id}`,
      `${ecrRepoArn}/ecr_dev_ops_basics_backend`
    );
    const beImage = ecs.ContainerImage.fromEcrRepository(beRepo, props.releaseName)
    const beService = new ecsp.ApplicationLoadBalancedFargateService(this, `${id}Backend`, {
      taskImageOptions: {
        image: beImage,
        environment: {
          'PORT': '81',
        }
      },
      listenerPort: 81,
      publicLoadBalancer: true,
    });
    beService.targetGroup.configureHealthCheck({
      path: '/ping',
      port: '81',
    });
  }
}

module.exports = { EcsContainer }
