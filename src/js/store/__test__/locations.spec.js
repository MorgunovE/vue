import locationsInstance, { Locations } from "../locations";
import { formatDate } from "../../helpers/date";
import api, { Api } from "../../services/apiService";

const countries = [{ code: "RUS", name: "Russia" }];

describe("Locations store tests", () => {
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
