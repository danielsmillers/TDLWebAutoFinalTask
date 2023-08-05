import { expect } from '@playwright/test';

export default class Assert {
  /**
   * To verify actual value equals expected value
   * @param actual
   * @param expected
   * @param softAssert
   */
  public static async assertEquals(
    actual: any,
    expected: any,
    softAssert = false,
  ) {
    try {
      expect(
        actual,
        `Expected '${expected}' should be EQUAL to Actual '${actual}'`,
      ).toEqual(expected);
    } catch (error) {
      if (!softAssert) {
        throw new Error(error);
      }
    }
  }
}
