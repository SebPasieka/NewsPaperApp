import SandboxApi from "../SandboxApi";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

it("should return articles", () => {
    fetch.mockResponseOnce(JSON.stringify({ documents: [{ id: "" }]}));

    const results = SandboxApi.fetchArticles();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(results).resolves.toHaveProperty("documents");
});

