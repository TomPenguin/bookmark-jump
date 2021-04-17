import { Ref } from "vue";
import { Browser } from "webextension-polyfill-ts";

type GetMessage = (i18n: Browser["i18n"], name: string) => string;

export const getMessage: GetMessage = (i18n, name) => i18n.getMessage(name);

export const getMessages = (
  i18n: Browser["i18n"],
  names: string[],
  getMessage: GetMessage
) => () => {
  return names.reduce((acc: { [name: string]: string }, name) => {
    acc[name] = getMessage(i18n, name);
    return acc;
  }, {});
};
