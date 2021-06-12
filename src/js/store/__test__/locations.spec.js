import locationsInstance, { Locations } from "../locations";
import { formatDate } from "../../helpers/date";
import api, { Api } from "../../services/apiService";

const countries = [{ code: "RUS", name: "Russia" }];
const cities = [{ country_code: "RUS", name: "Tyumen", code: "TU" }];
const airlines = [{ country_code: "RUS", name: "Airlines", code: "AVIA" }];

jest.mock("../../services/apiService", () => {
  const mockApi = {
    countries: jest.fn(() =>
      Promise.resolve([{ code: "RUS", name: "Russia" }])
    ),
    cities: jest.fn(() =>
      Promise.resolve([{ country_code: "RUS", name: "Tyumen", code: "TU" }])
    ),
    airlines: jest.fn(() =>
      Promise.resolve([{ country_code: "RUS", name: "Airlines", code: "AVIA" }])
    ),
  };
  return {
    Api: jest.fn(() => mockApi),
  };
});

const apiService = new Api();

describe("Locations store tests", () => {
  beforeEach(() => {
    locationsInstance.countries =
      locationsInstance.serializeCountries(countries);
    locationsInstance.cities = locationsInstance.serializeCities(cities);
  });
  it("locationsInstance class test", () => {
    expect(locationsInstance).toBeInstanceOf(Locations);
  });

  it("class Locations success test", () => {
    const instance = new Locations(api, { formatDate });
    expect(instance.countries).toBe(null);
    expect(instance.shortCities).toEqual({});
    expect(instance.formatDate).toEqual(formatDate);
  });

  it("countries test", () => {
    const res = locationsInstance.serializeCountries(countries);
    const expectedData = {
      RUS: { code: "RUS", name: "Russia" },
    };
    expect(res).toEqual(expectedData);
  });

  it("countries test incorrect data", () => {
    const res = locationsInstance.serializeCountries(null);
    const expectedData = {};
    expect(res).toEqual(expectedData);
  });
});

it("cities test", () => {
  const res = locationsInstance.serializeCities(cities);
  const expectedData = {
    TU: {
      country_code: "RUS",
      name: "Tyumen",
      code: "TU",
      country_name: "Russia",
      full_name: "Tyumen,Russia",
    },
  };
  expect(res).toEqual(expectedData);
});

it("cities test name get by code", () => {
  const res = locationsInstance.getCityNameByCode("TU");

  expect(res).toBe("Tyumen");
});

it("test init methods call", () => {
  const instance = new Locations(apiService, { formatDate });

  expect(instance.init()).resolves.toEqual([countries, cities, airlines]);
});
