import { getMessage } from "../useMessages";

describe("getMessage", () => {
  it("return message using i18n", () => {
    const i18nMock = {
      getMessage: jest.fn(),
    };
    i18nMock.getMessage.mockReturnValue("foo");
    const result = getMessage(i18nMock as any, "bar");
    expect(result).toBe("foo");
    expect(i18nMock.getMessage).toHaveBeenCalledWith("bar");
  });
});
