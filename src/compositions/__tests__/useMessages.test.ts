import { getMessage, getMessages } from "../useMessages";

describe("useMessages", () => {
  const i18nMock = {
    getMessage: jest.fn(),
  };
  i18nMock.getMessage.mockReturnValue("foo");
  beforeEach(() => {
    i18nMock.getMessage.mockClear();
  });

  describe("getMessage", () => {
    it("returns message using i18n", () => {
      const result = getMessage(i18nMock as any, "bar");
      expect(result).toBe("foo");
      expect(i18nMock.getMessage).toHaveBeenCalledWith("bar");
    });
  });

  describe("getMessages", () => {
    it("returns messages using i18n", () => {
      const getMessageMock = jest.fn();
      getMessageMock.mockReturnValue("baz");
      const target = getMessages(
        i18nMock as any,
        ["some", "values"],
        getMessageMock
      );
      expect(target()).toEqual({ some: "baz", values: "baz" });
      expect(getMessageMock).toHaveBeenCalledTimes(2);
      expect(getMessageMock.mock.calls[0]).toEqual([i18nMock, "some"]);
      expect(getMessageMock.mock.calls[1]).toEqual([i18nMock, "values"]);
    });
  });
});
