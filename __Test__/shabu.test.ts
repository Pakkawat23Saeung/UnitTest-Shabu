import Mockadapter from "axios-mock-adapter"
import axios from "axios"
import { Shabu } from "../shabu"

describe('calculate Shabu Price ', () => {
  const mock = new Mockadapter(axios)
  test.each([
    {
      num: 1, expectedResult: 374,
    },
    {
      num: 2, expectedResult: 748,
    },
    {
      num: 3, expectedResult: 1122,
    },
    {
      num: 4, expectedResult: 1122
    },
    {
      num: 5, expectedResult: 1870
    },
    {
      num: 6, expectedResult: 2244
    },
    {
      num: 7, expectedResult: 2618
    },
    {
      num: 8, expectedResult: 2244
    }
  ])("should true", async ({ num, expectedResult }) => {
    mock.onGet('/cal-price').reply(200);
    expect(await Shabu(num)).toBe(expectedResult);
  });
})