export function FeatureManager(flags) {
  if (flags === null ||
      typeof flags !== 'object' ||
      Array.isArray(flags)
  ) {
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
