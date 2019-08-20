const { FeatureManager } = require('./feature-manager');
const { expect } = require('chai');

suite('feature-manager', () => {
  let instance;

  setup(() => {
    instance = FeatureManager({
      USE_FEATURE_1: true,
      USE_FEATURE_2: false,
      USE_NEW_HOME_PAGE: false,
    });
  });

  test('an instance correctly reads the flags passed', () => {
    expect(instance.getFeatureFlag('USE_FEATURE_1')).to.be.true;
    expect(instance.getFeatureFlag('USE_FEATURE_2')).to.be.false;
    expect(instance.getFeatureFlag('USE_NEW_HOME_PAGE')).to.be.false;
  });

  test('undefined flags will always return false', () => {
    expect(instance.getFeatureFlag('USE_FEATURE_5')).to.be.false;
  });

  test('instances will not share state', () => {
    const instance1 = FeatureManager({
      USE_FEATURE_4: false,
    });
    const instance2 = FeatureManager({
      USE_FEATURE_4: true,
    });

    expect(instance1.getFeatureFlag('USE_FEATURE_4')).to.be.false;
    expect(instance2.getFeatureFlag('USE_FEATURE_4')).to.be.true;
  });

  test('throw when passed a non-object', () => {
    expect(() => FeatureManager()).to.throw();
    expect(() => FeatureManager('')).to.throw();
    expect(() => FeatureManager([])).to.throw();
    expect(() => FeatureManager(null)).to.throw();
  });
});
