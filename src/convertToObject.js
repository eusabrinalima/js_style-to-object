'use strict';

/**
 * @param {string} sourceString
 *
 * @returns {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    const trimmed = declaration.trim();

    if (!trimmed) {
      continue;
    }

    const colonIndex = trimmed.indexOf(':');

    if (colonIndex !== -1) {
      const property = trimmed.slice(0, colonIndex).trim();
      const value = trimmed.slice(colonIndex + 1).trim();

      styles[property] = value;
    }
  }

  return styles;
}

module.exports = convertToObject;
