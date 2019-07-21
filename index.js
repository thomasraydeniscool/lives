(function(isNode) {
  'use strict';
  /**
   * Lives
   *
   * Returns true if value exists or false if value is missing.
   *
   * @param {function} attempt
   * @returns {boolean}
   */
  function lives(attempt) {
    let value;
    try {
      value = attempt();
    } catch (err) {
      value = undefined;
    } finally {
      return value !== undefined;
    }
  }

  /**
   * Lives.not
   *
   * Returns true if value is missing or false if value exists.
   *
   * @param {function} attempt
   * @returns {boolean}
   */
  lives.not = function(attempt) {
    let value;
    try {
      value = attempt();
    } catch (err) {
      value = undefined;
    } finally {
      return value === undefined;
    }
  };

  /**
   * Lives.get
   *
   * Returns value or undefined if value is missing.
   *
   * @param {function} attempt
   * @returns {any}
   */
  lives.get = function(attempt) {
    let value;
    try {
      value = attempt();
    } catch (err) {
      value = undefined;
    } finally {
      return value;
    }
  };

  /**
   * Lives.or
   *
   * Returns value or fallback if value is missing.
   *
   * @param {function} attempt
   * @param {any} fallback
   * @returns {any}
   */
  lives.or = function(attempt, fallback) {
    let value;
    try {
      value = attempt();
    } catch (err) {
      value = fallback;
    } finally {
      return value;
    }
  };

  /**
   * Lives.is
   *
   * Returns true if value matches type specified or false if it doesn't.
   *
   * @param {function} attempt
   * @param {string} type
   * @returns {boolean}
   */
  lives.is = function(attempt, type) {
    let value;
    try {
      value = attempt();
    } catch (err) {
      value = undefined;
    } finally {
      return typeof value === type;
    }
  };

  if (isNode) {
    module.exports = lives;
  } else {
    window['lives'] = lives;
  }
})(
  typeof module === 'object' &&
    module &&
    typeof module.exports === 'object' &&
    module.exports
);
