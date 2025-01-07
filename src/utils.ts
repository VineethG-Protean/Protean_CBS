import { faker } from "@faker-js/faker";
import { XML } from "./xml";

const FI_TYPES: { [key: string]: string } = {
  S: "DEPOSIT",
  D: "TERM_DEPOSIT",
  R: "RECURRING_DEPOSIT",
  E: "EQUITIES",
  F: "ETF",
  M: "MUTUAL_FUNDS",
  P: "SIP",
  N: "NPS",
  B: "BONDS",
  I: "IDR",
  L: "LIFE_INSURANCE",
  A: "AIF",
  INV: "INVIT",
  C: "CP",
  DE: "DEBENTURES",
  REI: "REIT",
  G: "GENERAL_INSURANCE",
  GS: "GOVT_SECURITIES",
  G3B: "GSTR1_3B",
};

export function getFiXML(fiType: string) {
  return XML[fiType];
}

export function generateAccountData(
  fiType: string,
  registeredMobileNumber: string | number,
  firstName: string,
  lastName: string
) {
  return {
    accType: FI_TYPES[fiType],
    accSubType: "DEFAULT",
    maskedAccNumber: "XXXXXXXX" + faker.string.numeric(4),
    uniqueIdentifier: faker.string.numeric(8),
    registeredMobileNumber,
    firstName,
    lastName,
  };
}
