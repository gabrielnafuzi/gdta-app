/**
 * @description A wrapper for "JSON.parse()"" to support "undefined" value
 * @param {(string | null)} value - The value to parse - should be a string or null
 */
export const parseJSON = <T>(value: string | null): T | null => {
  try {
    return value == undefined ? null : JSON.parse(value ?? '')
  } catch (error) {
    console.warn('parsing error on', { value })

    return null
  }
}
