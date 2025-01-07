import express, { Express, Request, Response } from "express";
import { generateAccountData, getFiXML } from "./utils";
import { faker } from "@faker-js/faker";

const ROU: Express = express();

ROU.post("/Accounts/discover", (req: Request, res: Response) => {
  const { identifiers, fiTypes } = req.body;
  console.log(fiTypes);
  if (!identifiers || !fiTypes)
    res.status(422).json({ message: "Some parameters are missing" });

  let MOBILE: string | number;
  const firstName: string = faker.person.firstName();
  const lastName: string = faker.person.lastName();

  identifiers.map((identifier: any) => {
    if (identifier.identifierType === "MOBILE")
      MOBILE = identifier.identifierValue;
  });

  let accounts: any = [];
  fiTypes.map((fiType: string) => {
    const data = generateAccountData(fiType, MOBILE, firstName, lastName);
    data != null && accounts.push(data);
  });
  console.log(accounts);
  res.status(200).json({
    status: "S",
    message: "Data Fetched Successfully",
    accounts,
  });
});

ROU.post("/FI/fetch", (req: Request, res: Response) => {
  const { fiType } = req.body;
  const data = getFiXML(fiType).trim();
  console.log(data);
  res.status(200).json({
    status: "S",
    message: "Data Fetched Successfully",
    uniqueIdentifier: faker.string.alphanumeric(10),
    data,
  });
});

export default ROU;
