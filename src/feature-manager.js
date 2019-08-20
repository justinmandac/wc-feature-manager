export default function FeatureManager(flags) {
  if (typeof flags !== 'object') {
    throw new Error('flags should be an object');
  }

  return {
    __flags: flags,
    /**
     *
     * @param {string} flagName Name of the feature flag setting to be
     *  retrieved.
     */
    getFeatureFlag(flagName) {
      return typeof this.__flags[flagName] === 'undefined'
        ? false
        : this.__flags[flagName];
    },
  };
};
