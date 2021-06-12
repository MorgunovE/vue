import api from "../apiService";
import config from "../../config/apiConfig";
import axios from "axios";
// import it from 'date-fns/esm/locale/it/index.js';

jest.mock("axios");

const cities = [{ country_code: "RUS", name: "Tyumen", code: "TU" }];

describe("Test Api Services", () => {
  it("Success fetch cities", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: cities,
      })
    );
    await expect(api.cities()).resolves.toEqual(cities);
    expect(axios.get).toHaveBeenCalledWith(`${config.url}/cities`);
  });
  it("Fail fetch cities", async () => {
    const errMsg = "Api error";
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errMsg)));
    await expect(api.cities()).rejects.toThrow(errMsg);
  });
});
