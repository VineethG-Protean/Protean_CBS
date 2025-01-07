export const XML: { [key: string]: string } = {
  DEPOSIT_XML: `<Account linkedAccRef="af19bc9d-2e71-45c0-bf00-61b82f8949e7" maskedAccNumber="XXXXXXXXX1001" version="1.2" type="deposit" xmlns="http://api.rebit.org.in/FISchema/deposit" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/deposit ../FISchema/deposit.xsd"><Profile><Holders type="SINGLE"><Holder name="TEST USER" dob="1988-04-20" mobile="9876543210" nominee="REGISTERED" address="MUMBAI, MAHARASHTRA, INDIA, 400073" email="testuser@test.com" pan="ABCDA1234A" ckycCompliance="true"/></Holders></Profile><Summary currentBalance="250000.00" currency="INR" balanceDateTime="2024-11-27T16:30:57+05:30" type="SAVINGS" branch="NEW FRIENDS COLONY, MUMBAI" facility="OD" ifscCode="PROT0556688" micrCode="400026128" openingDate="2021-12-21" currentODLimit="0" drawingLimit="0" status="ACTIVE"><Pending amount="0.0"/></Summary><Transactions startDate="2024-08-06" endDate="2024-12-04"><Transaction type="CREDIT" mode="CASH" amount="5000.0" currentBalance="250000.00" transactionTimestamp="2024-11-27T16:30:57+05:30" valueDate="2024-11-26" txnId="R87567485" narration="CASH/6354JGDH/TEST/763728" reference="R87567485"/><Transaction type="CREDIT" mode="CASH" amount="1500.0" currentBalance="245000.00" transactionTimestamp="2024-11-04T10:00:00+05:30" valueDate="2024-11-03" txnId="R34567486" narration="CASH/76526JAABC/TEST/763728" reference="R87567486"/><Transaction type="DEBIT" mode="ATM" amount="10000.0" currentBalance="243500.00" transactionTimestamp="2024-10-29T22:05:00+05:30" valueDate="2024-10-28" txnId="R12367487" narration="ATM/827638726/AHDJH33652" reference="R87567487"/></Transactions></Account>
`,
  TERM_DEPOSIT_XML: `<Account xmlns="http://api.rebit.org.in/FISchema/term_deposit" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/term_deposit ../FISchema/term_deposit.xsd" linkedAccRef="" maskedAccNumber="" version="1.2" type="term_deposit"><Profile><Holders type="JOINT"><Holder name="" dob="2002-09-24" mobile="91729391923" nominee="NOT-REGISTERED" email="qw@gmail.com" pan="AAAPL1234C" ckycCompliance="true"/></Holders></Profile><Summary openingDate="" accountType="FIXED" branch="" ifsc="" maturityAmount="10.0" description="" interestPayout="HALF-YEARLY" interestRate="" maturityDate="2004-04-12" principalAmount="" tenureDays="" tenureMonths="" tenureYears="" interestComputation="COMPOUND" compoundingFrequency="HALF-YEARLY" interestPeriodicPayoutAmount="" interestOnMaturity="" currentValue=""/><Transactions startDate="2004-04-12" endDate="2004-04-12"><Transaction txnId="" amount="" narration="" type="TDS" mode="ATM" balance="" transactionDateTime="2004-04-12T13:20:00-05:00" valueDate="2004-04-12T13:20:00-05:00" reference=""/></Transactions></Account>
`,
  RECURRING_DEPOSIT_XML: `<Account xmlns="http://api.rebit.org.in/FISchema/recurring_deposit" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/recurring_deposit ../FISchema/recurring_deposit.xsd" linkedAccRef="" maskedAccNumber="" version="1.2" type="recurring_deposit"><Profile><Holders type="JOINT"><Holder name="" dob="2002-09-24" mobile="91729391923" nominee="NOT-REGISTERED" email="qw@gmail.com" pan="AAAPL1234C" ckycCompliance="true"/></Holders></Profile><Summary accountType="FIXED" openingDate="" branch="" ifsc="" maturityAmount="10.0" maturityDate="2004-04-12" description="" interestPayout="HALF-YEARLY" interestRate="" principalAmount="" tenureDays="" tenureMonths="" tenureYears="" recurringAmount="" recurringDepositDay="" interestComputation="COMPOUND" compoundingFrequency="HALF-YEARLY" interestPeriodicPayoutAmount="" interestOnMaturity="" currentValue=""/><Transactions startDate="2004-04-12" endDate="2004-04-12"><Transaction txnId="" amount="" narration="" type="TDS" mode="ATM" balance="" transactionDateTime="2004-04-12T13:20:00-05:00" valueDate="2004-04-12T13:20:00-05:00" reference=""/></Transactions></Account>
`,
  SIP_XML: `<Account linkedAccRef="4fa87a77-d43b-4887-b9d5-4c4e2a54e6d9" maskedFolioNo="XXXXXXXXX1013" version="1.0.0" type="sip" xmlns="http://api.rebit.org.in/FISchema/sip" xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/sip ../FISchema/sip.xsd"><Profile><Holders type="SINGLE"><Holder name="TEST USER" dob="1988-04-20" mobile="9876543210" nominee="REGISTERED" landline="2200127134" address="LOWER PAREL, MUMBAI - 400013" email="testuser@test.com" pan="ABCDA1234A" kycCompliance="true"/></Holders></Profile><Summary folioNo="XXXXXXXXX1013"><Holdings><Holding amc="Axis Mutual Fund" registrar="Test Registrar" amfiCode="120510" holder1Name="Test User" holder2Name="Holder2"><Schemes><Scheme scheme="Axis Equity Savings Fund Direct Plan" schemeOption="REINVEST" schemeTypes="EQUITY_SCHEMES" schemeCategory="LARGE_CAP_FUND" isin="INF846K01VJ3"><Sips><Sip amount="5000.0" frequency="Monthly" installmentDay="2024-12-19" pendingInstallments="0.0" completeInstallments="0.0" lastInstallmentDate="2024-11-19" nextInstallmentDate="2024-12-19" creationDate="2022-05-11" SIPRefNo="SIP736738"/><Sip amount="5000.0" frequency="Monthly" installmentDay="2024-12-27" pendingInstallments="0.0" completeInstallments="0.0" lastInstallmentDate="2024-11-27" nextInstallmentDate="2024-12-27" creationDate="2021-03-20" SIPRefNo="SIP277287"/></Sips></Scheme><Scheme scheme="Axis Growth Opportunities Fund Direct Plan" schemeOption="GROWTH_TYPE" schemeTypes="DEBT_SCHEMES" schemeCategory="MIDCAP_FUND" isin="INF846K01J46"><Sips><Sip amount="10000.0" frequency="Monthly" installmentDay="2024-12-11" pendingInstallments="0.0" completeInstallments="0.0" lastInstallmentDate="2024-11-11" nextInstallmentDate="2024-12-11" creationDate="2023-07-05" ceasedDate="2023-07-05" SIPRefNo="SIP249836"/></Sips></Scheme></Schemes></Holding></Holdings></Summary><Transactions/></Account>
`,
  CP_XML: `<Account xmlns="http://api.rebit.org.in/FISchema/cp" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/cp ../FISchema/cp.xsd" linkedAccRef="" maskedAccNumber="" version="1.0" type="cp"><Profile><Holders><Holder name="" dob="2002-09-24" mobile="91729391923" nominee="NOT-REGISTERED" dematId="" email="qw@gmail.com" pan="AAAPL1234C" ckycCompliance="true"/></Holders></Profile><Summary investmentValue="10.0" currentValue="20.0"><Investment><Holdings><Holding investmentValue="200" currentValue="205" scheme="FIXED_INTEREST_RATE" isin="" units="9" faceValue="19" symbol="" description="" issuerName="" creditRating="" creditRatingAgency="" issueDate="2004-04-12" principalAmount="200" tenureYears="3" tenureMonths="36" tenureDays="120" maturityDate="2004-04-12" auctionDate="2004-04-12"/></Holdings></Investment></Summary><Transactions startDate="2004-04-12" endDate="2004-04-12"><Transaction txnId=" " isin="" narration="" transactionDateTime="2004-04-12T13:20:00-05:00" rate="3" type="BUY" units="12" currency="" tradeValue="23" totalCharge="34" otherTaxes="2"/></Transactions></Account>
`,
  GOVT_SECURITIES_XML: `<Account xmlns="http://api.rebit.org.in/FISchema/govt_securities" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/govt_securities ../FISchema/govt_securities.xsd" linkedAccRef="" maskedAccNumber="" version="1.0" type="govt_securities"><Profile><Holders><Holder name="" dob="2002-09-24" mobile="91729391923" nominee="NOT-REGISTERED" dematId="" email="qw@gmail.com" pan="AAAPL1234C" ckycCompliance="true"/></Holders></Profile><Summary investmentValue="200" currentValue="205"><Holdings><Holding scheme="FIXED_INTEREST_RATE" faceValue="19" isin="" units="34" symbol="" issuerName="" issueRate="" description="" creditRating="" creditRatingAgency="" taxable="true" issueDate="2004-04-12" principleAmount="200" tenureYears="3" tenureMoths="36" tenureDays="120" accruedInterestAmount="4" couponRate="6" maturityDate="2004-04-12" coupanComputation="COMPOUND" coupanPaymentDate="2004-04-12" autionDate="2004-04-12" compoundingFrequency="HALF_YEARLY" interestPayout="HALF_YEARLY" interestOnMaturity="3" lastTradedDate="2004-04-12" lastTradedRate="6"/></Holdings></Summary><Transactions startDate="2004-04-12" endDate="2004-04-12"><Transaction txnId="" isin="" narration="" transactionDateTime="2004-04-12T13:20:00-05:00" rate="3" type="BUY" currency="" units="12" tradeValue="23" totalCharge="34" otherTaxes="2"/></Transactions></Account>
`,
  EQUITIES_XML: `<Account linkedAccRef="1ff13ddc-b127-4fa9-85b1-6b63911eca87" maskedDematId="XXXXXXXXX1005" version="1.0.0" type="equities" xmlns="http://api.rebit.org.in/FISchema/equities" xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/equities ../FISchema/equities.xsd"><Profile><Holders><Holder name="TEST USER" dob="1988-04-20" mobile="9876543210" nominee="REGISTERED" dematId="1201090001005" landline="2000707110" address="CUST_ADDR_1_707110 CUST_ADDR_2_707110 CUST_ADDR_3_707110" email="testuser@test.com" pan="ABCDA1234A" kycCompliance="false"/></Holders></Profile><Summary currentValue="7060023.00"><Investment><Holdings type="DEMAT"><Holding issuerName="ACE DERIVATIVES AND COMMODITY EXCHANGE LIMITED (FORMERLY AHMEDABAD COMMODITY EXCHANGE LIMITED)" isin="INE213L01018" isinDescription="ACE DERIV AND COM-EQ" units="100000" lastTradedPrice="0"/><Holding issuerName="RELIANCE INDUSTRIES LIMITED 112" isin="INE002A01018" isinDescription="RELIANCE INDUS-EQ" units="27" lastTradedPrice="137630"/><Holding issuerName="TODAY'S PETROTECH LIMITED" isin="INE567K01019" isinDescription="TODAY'S PETRO-EQ" units="100000" lastTradedPrice="0"/><Holding issuerName="ZEN SOFT SOLUTIONS LIMITED" isin="INETCS889780" isinDescription="ZENSOFT SERVICES" units="100" lastTradedPrice="0"/><Holding issuerName="CEDAR SUPPORT SERVICES LIMITED# FORMERLY BHARTI RETAIL (HOLDINGS) LTD" isin="INE780P01017" isinDescription="CEDAR SUPPORT SER-EQ" units="100" lastTradedPrice="0"/><Holding issuerName="RELIANCE INFRASTRUCTURE LIMITED,(FORMERLY RELIANCE ENERGY LTD ,/ BSES LTD)" isin="INE758E01017" isinDescription="Reliance Industry" units="27" lastTradedPrice="0"/><Holding issuerName="ATUL AUTO LIMITED" isin="INE951D01010" isinDescription="ATUL AUTO LTD" units="100000" lastTradedPrice="7030"/><Holding issuerName="VICEROY BANGALORE HOTELS PRIVATE LIMITED" isin="INE414M01010" isinDescription="VICEROY BANGAL - EQ" units="100000" lastTradedPrice="0"/></Holdings></Investment></Summary><Transactions startDate="2024-08-06" endDate="2024-12-04"><Transaction txnId="01062023112735-1511165136300010" orderId="0" companyName="ATUL AUTO LIMITED-EQUITY SHARES" transactionDateTime="2024-09-01T11:27:35+05:30" isin="INE951D01010" isinDescription="ATUL AUTO LTD" equityCategory="EQUITY" narration="INITIAL PUBLIC OFFERING   00124536 0000000000000001 CREDIT" rate="7030" type="BUY" units="100000"/><Transaction txnId="02062023115201-1521165138750010" orderId="0" companyName="ACE DERIVATIVES AND COMMODITY EXCHANGE LIMITED-EQUITY SHARES" transactionDateTime="2024-10-03T11:52:01+05:30" isin="INE213L01018" isinDescription="ACE DERIV AND COM-EQ" equityCategory="EQUITY" narration="INITIAL PUBLIC OFFERING   00124537 0000000000000001 CREDIT" rate="0" type="BUY" units="100000"/><Transaction txnId="18072023132604-1981176664523010" orderId="0" companyName="Reliance industry Benefit ISIN" transactionDateTime="2024-10-18T13:26:04+05:30" isin="INE758E01017" isinDescription="Reliance Industry" equityCategory="EQUITY" narration="CA-Rearrangement  00194685 Cr Current Balance" rate="0" type="BUY" units="27"/><Transaction txnId="21072023171738-2011177731547010" orderId="0" companyName="TODAY'S PETROTECH LIMITED - EQUITY SHARES" transactionDateTime="2024-11-21T17:17:38+05:30" isin="INE567K01019" isinDescription="TODAY'S PETRO-EQ" equityCategory="EQUITY" narration="CA-Rearrangement 00194699 Cr Current Balance" rate="0" type="BUY" units="27"/><Transaction txnId="21072023120641-2011177311351010" orderId="0" companyName="PHOTON CAPITAL ADVISORS LIMITED-EQUITY SHARES" transactionDateTime="2024-11-11T12:06:41+05:30" isin="INE107J01016" isinDescription="PHOTON CAPITAL ADV" equityCategory="EQUITY" narration="CA-Commodity Extinguishme 00194695 Db Current Balance" rate="19174" type="SELL" units="27"/><Transaction txnId="29052023105900-1481165098047010" orderId="0" companyName="VICEROY BANGALORE HOTELS PRIVATE LIMITED - EQUITY SHARES" transactionDateTime="2024-08-29T10:59:00+05:30" isin="INE414M01010" isinDescription="VICEROY BANGAL - EQ" equityCategory="EQUITY" narration="INITIAL PUBLIC OFFERING   00124535 0000000000000001 CREDIT" rate="0" type="BUY" units="100000"/></Transactions></Account>
`,
  BONDS_XML: `<Account xmlns="http://api.rebit.org.in/FISchema/bonds" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/bonds ../FISchema/bonds.xsd" linkedAccRef="" maskedAccNumber="" version="1.1" type="bonds"><Profile><Holders><Holder name="" dob="2002-09-24" mobile="91729391923" nominee="NOT-REGISTERED" dematId="" email="qw@gmail.com" pan="AAAPL1234C" ckycCompliance="true"/></Holders></Profile><Summary investmentValue="200" currentValue="205"><Holdings><Holding scheme="FIXED_INTEREST_RATE" faceValue="19" isin="" units="34" symbol="" issuerName="" issueRate="" description="" creditRating="" creditRatingAgency="" taxable="true" issueDate="2004-04-12" principleAmount="200" tenureYears="3" tenureMoths="36" tenureDays="120" accruedInterestAmount="4" couponRate="6" maturityDate="2004-04-12" coupanComputation="COMPOUND" coupanPaymentDate="2004-04-12" autionDate="2004-04-12" compoundingFrequency="HALF_YEARLY" interestPayout="HALF_YEARLY" interestOnMaturity="3" lastTradedDate="2004-04-12" lastTradedRate="6"/></Holdings></Summary><Transactions endDate="2002-09-24" startDate="2002-09-24"><Transaction txnId="" isin="" narration="" transactionDateTime="2004-04-12T13:20:00-05:00" rate="3" type="BUY" currency="" units="12" tradeValue="23" totalCharge="34" otherTaxes="2"/></Transactions></Account>
`,
  DEBENTURES_XML: `<Account xmlns="http://api.rebit.org.in/FISchema/debentures" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/debentures ../FISchema/debentures.xsd" linkedAccRef="" maskedAccNumber="" version="1.0" type="debentures"><Profile><Holders><Holder name="" dob="2002-09-24" mobile="91729391923" nominee="NOT-REGISTERED" dematId="" email="qw@gmail.com" pan="AAAPL1234C" ckycCompliance="true"/></Holders></Profile><Summary investmentValue="10.0" currentValue="20.0"><Holdings><Holding isin="" units="56" faceValue="" coupon="" fixedIncomePortfolio="" symbol="" issuerName="" description="" creditRating="" taxable="YES" issueDate="2002-09-24" principalAmount="10" tenureDays="10" tenureMonths="" tenureYears="" yield="6" maturityDate="2002-09-24" lastTradedRate="9" lastTradedDate="2002-09-24"/></Holdings></Summary><Transactions endDate="2002-09-24" startDate="2002-09-24"><Transaction txnId="" isin="" transactionDateTime="2004-04-12T13:20:00-05:00" rate="5" type="CLOSING" units="50" currency="" tradeValue="30" totalCharge="40" otherTaxes="10"/></Transactions></Account>
`,
  MUTUAL_FUNDS_XML: `<Account linkedAccRef="" maskedDematID="XXXXXXXXX1016" version="1.0.0" type="mutualfunds" xmlns="http://api.rebit.org.in/FISchema/mutual_funds" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/mutual_funds ../FISchema/mutual_funds.xsd"><Profile><Holders><Holder name="VINITA U" dob="2024-12-11" mobile="8976844224" nominee="REGISTERED" dematId="XXXXXXXXXXXX0987" folioNo="XXXXX4567" landline="022-12345678" address="MUMBAI, MAHARASHTRA, INDIA, 400076" email="vinitau@proteantech.in" pan="VABCD1111V" kycCompliance="COMPLETED"/></Holders></Profile><Summary currentValue="0.0"><Investment><Holdings><Holding amc="AMC" registrar="REGISTRAR" schemeCode="SCHEME-DOCE" schemeOption="PAYOUT" schemeTypes="EQUITY_SCHEMES" schemeCategory="LIQUID_FUND" isin="IN000AAA000A" isinDescription="ABC BANK LIMITED EQ LISTING" ucc="UCC" amfiCode="AMFI_CODE" folioNo="XXXXX4567" closingUnits="0" lienUnits="0" nav="0" navDate="2024-12-11" lockinUnits="0" FatcaStatus="COMPLIANT"/></Holdings></Investment></Summary><Transactions startDate="2024-10-12" endDate="2024-12-10"><Transaction txnId="a3c722ac4d99cdr4" amc="AMC1" registrar="REGISTRAR" schemeCode="SCHEMECODE" schemePlan="DIRECT" isin="IN000AAA000A" amfiCode="AMFI-CODE" ucc="UCC" amount="0.00" nav="0.0" navDate="2024-12-11" type="BUY" narration="narration1" isinDescription="ABC BANK LIMITED EQ LISTING" units="50" transactionDate="2024-12-04T14:30:44.775Z" lock-inFlag="LOCK-INFLAG" lock-inDays="LOCK-INDAYS" mode="DEMAT"/></Transactions></Account>
`,
  ETF_XML: `<Account linkedAccRef="0fcb0c1f-e6de-4773-8412-9d9fef7728be" maskedDematId="XXXXXXXXX1012" version="1.0.0" type="etf" xmlns="http://api.rebit.org.in/FISchema/etf" xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/etf ../FISchema/etf.xsd"><Profile><Holders><Holder dematId="IN01234561012" name="TEST USER" pan="ABCDA1234A" dob="1988-04-20" landline="2000707110" address="3-20/1A, KASHI HILLS BUILDING, LAITUMKHRAH TRAFFIC POINT, SHILLONG, MEGHALAYA, INDIA, 793001" nominee="NOT-REGISTERED" email="testuser@test.com" mobile="9876543210"/></Holders></Profile><Summary currentValue="0.0"><Investment><Holdings><Holding folioNo="XXXXX4567" units="40" isin="INE061O07012" isinDescription="SHAMBHAVI 19 261215" nav="108866" lastNavDate="2023-03-20"/><Holding folioNo="XXXXX4568" units="100000" isin="IN9781H19012" isinDescription="UIVCF P PAID 090613" nav="0"/><Holding folioNo="XXXXX4571" units="100000" isin="INE001A07132" isinDescription="HDFC 11.30 111203DEB" nav="0"/><Holding folioNo="XXXXX4569" units="100000" isin="INE001A07108" isinDescription="HDFC 11.95 181005" nav="10126" lastNavDate="2024-10-18"/><Holding folioNo="XXXXX4570" units="100000" isin="INE001A07116" isinDescription="HDFC 11.61 161005" nav="10128" lastNavDate="2024-10-28"/><Holding folioNo="XXXXX4572" units="100000" isin="INE001A07140" isinDescription="HDFC 11.36 291204" nav="10130" lastNavDate="2024-12-05"/></Holdings></Investment></Summary><Transactions startDate="2024-08-08" endDate="2024-12-06"><Transaction txnId="24052023171928-1431165081320010" isin="IN9781H19012" isinDescription="UIVCF P PAID 090613" transactionDateTime="2024-09-27T16:19:28+05:30" units="100000" amount="0.0" nav="0.0" type="BUY" narration="INITIAL PUBLIC OFFERING 00124508 0000000000000001 CREDIT"/><Transaction txnId="24052023183838-1431165081419010" isin="INE001A07108" isinDescription="HDFC 11.95 181005" transactionDateTime="2024-10-18T14:38:38+05:30" units="100000" amount="0.0" nav="10126.0" type="BUY" narration="INITIAL PUBLIC OFFERING 00124510 0000000000000001 CREDIT" brokerCode="ZEN0001"/><Transaction txnId="24052023183840-1431165081440010" isin="INE001A07116" isinDescription="HDFC 11.61 161005" transactionDateTime="2024-10-28T14:00:00+05:30" units="100000" amount="0.0" nav="10128.0" type="BUY" narration="INITIAL PUBLIC OFFERING 00124511 0000000000000001 CREDIT" brokerCode="ZEN0001"/><Transaction txnId="24052023183842-1431165081461010" isin="INE001A07132" isinDescription="HDFC 11.30 111203DEB" transactionDateTime="2024-11-29T14:30:00+05:30" units="100000" amount="0.0" nav="0.0" type="BUY" narration="INITIAL PUBLIC OFFERING 00124512 0000000000000001 CREDIT"/><Transaction txnId="24052023183844-1431165081482010" isin="INE001A07140" isinDescription="HDFC 11.36 291204" transactionDateTime="2024-12-05T11:00:00+05:30" units="100000" amount="0.0" nav="10130.0" type="BUY" narration="INITIAL PUBLIC OFFERING 00124513 0000000000000001 CREDIT" brokerCode="ZEN0001"/></Transactions></Account>
`,
  IDR_XML: `<Account linkedAccRef="e984bc46-3f8c-48de-b2e5-0cf540ca2e9b" maskedDematId="XXXXXXXXXDS11" version="1.0.0" type="idr" xmlns="http://api.rebit.org.in/FISchema/idr" xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/idr ../FISchema/idr.xsd"><Profile><Holders><Holder name="TEST USER" dob="1988-04-20" mobile="9876543210" address="LOWER PAREL, MUMBAI - 400013" landline="2200127134" email="testuser@test.com" pan="ABCDA1234A" dematId="XXXXXXXXXDS11" kycCompliance="false" nominee="REGISTERED"/></Holders></Profile><Summary currentValue="0.0"><Investment><Holdings type="DEMAT"><Holding issuerName="STAR MART PVT LTD" isin="INE111H01011" isinDescription="STAR MART 98373" units="0.0"/></Holdings></Investment></Summary><Transactions startDate="2024-10-17" endDate="2024-12-15"><Transaction txnId="b1c722ac4d99cde4" transactionDateTime="2024-12-06T18:13:51+05:30" orderId="orderId1" isin="INE111H01011" isinDescription="STAR MART 98373" companyName="STAR MART PVT LTD" type="BUY" units="0.0" narration="Test narration2"/></Transactions></Account>
`,
  CIS_XML: `<Account linkedAccRef="75d24ff7-dd91-4054-9954-b6ef7b5ef2d9" maskedDematId="XXXXXXXXXAB12" version="1.0.0" type="cis" xmlns="http://api.rebit.org.in/FISchema/cis" xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/cis ../FISchema/cis.xsd"><Profile><Holders><Holder name="TEST USER" dob="1988-04-20" mobile="9876543210" address="LOWER PAREL, MUMBAI - 400013" landline="2200127134" email="testuser@test.com" pan="ABCDA1234A" dematId="XXXXXXXXXAB12" kycCompliance="false" nominee="REGISTERED"/></Holders></Profile><Summary currentValue="0.0"><Investment><Holdings><Holding isin="INE111H02012" isinDescription="BLUE STAR  87456" ucc="ucc1" folioNo="XXXXX4567" mode="DEMAT" units="0.0" closingUnits="0.0" rate="0.0" nav="0.0"/></Holdings></Investment></Summary><Transactions startDate="2024-10-18" endDate="2024-12-17"><Transaction txnId="c3c622ac4d99cde9" transactionDateTime="2024-12-10T15:10:51+05:30" schemeCode="STAR_SCHEME_101" isin="INE111H02012" isinDescription="BLUE STAR  87456" dividendType="INTERIM-DIVIDENT" ucc="ucc3" amount="0.0" units="0.0" nav="0.0" navDate="2024-12-10" type="AMALGAMATION" mode="DEMAT" narration="CIS account  narration"/></Transactions></Account>
`,
  AIF_XML: `<Account xmlns="http://api.rebit.org.in/FISchema/aif" xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/aif ../FISchema/aif.xsd" linkedAccRef="linkedAccRef1" maskedDematId="XXXXXXXXXXXX0987" version="1.0.0" type="aif"><Profile><Holders><Holder name="name1" dob="2000-05-04" pan="AAAAA0000A" mobile="9999999999" nominee="REGISTERED" address="address1" landline="02212345678" email="qc@email.com" dematId="XXXXXXXXXXXX0987" kycCompliance="false"/></Holders></Profile><Summary totalNumUnitsIssued="50" investmentValue="0" currentValue="0"><Investment><Holdings><Holding issuerName="issuerName1" typeOfSecurity="LISTED-EQUITY" lastValuationDate="2022-05-04" description="description1"/></Holdings></Investment></Summary><Transactions startDate="2022-01-01" endDate="2022-06-30"><Transaction txnId="a3c722ac4d99cde4" nameofAsset="nameofAsset1" investmentValue="0" redemptionDate="2022-04-04" units="50" narration="narration1"/></Transactions></Account>
`,
  INSURANCE_POLICIES_XML: `<Account xmlns="http://api.rebit.org.in/FISchema/insurance_policies" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/insurance_policies ../FISchema/insurance_policies.xsd" linkedAccRef="" maskedAccNumber="" version="1.0" type="insurance"><Profile><Holders type="JOINT"><Holder rank="1" name="" dob="2002-09-24" mobile="91729391923" nominee="NOT-REGISTERED" email="qw@gmail.com" pan="AAAPL1234C" ckycCompliance="true"/></Holders><Riders><Rider riderType="" sumAssured="" tenureYears="" tenureMonths="" premiumAmount="" policyStartDate="2004-04-12" policyEndDate="2004-04-12"/></Riders></Profile><Summary policyName="" policyNumber="" eiaNumber="" sumAssured="100" coverAmount="90" tenureMonths="" tenureYears="" premiumAmount="20" policyStartDate="2004-04-12" policyType="CHILDREN_PLAN" coverType="BUILDING" premiumFrequency="HALF_YEARLY" premiumPaymentYears="2" premiumPaymentMonths="24" maturityDate="2004-04-12" maturityBenefit=""><MoneyBacks><MoneyBack date="2004-04-12" amount="1000" description=""/></MoneyBacks><ContractClauses><ContractClause title="" subLimit="" conditions="" exlcusions="" amount="1000" description=""/></ContractClauses><Covers><Cover amount="100" description=""/></Covers></Summary><Transactions startDate="2004-04-12" endDate="2004-04-12"><Transaction txnId="" txnDate="2004-04-12" narration="" type="BONUS" amount="1000"/></Transactions></Account>
`,
  NPS_XML: `<Account linkedAccRef="47400bbd-d387-4346-86b6-2e47c2ddacbe" version="1.0.0" type="nps" maskedPranId="XXXXXXXXX0005" xmlns="http://api.rebit.org.in/FISchema/nps" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/nps ../FISchema/nps.xsd"><Profile><Holders><Holder name="TEJA S" dob="2002-08-09" mobile="9182544581" pranId="XXXXXXXX3454" address="MUMBAI, MAHARASHTRA, INDIA, 400074" email="tejas@proteantech.in" pan="AAAOL2207A" kycCompliance="true"/></Holders></Profile><Summary openingDate="2024-11-03" currentValue="5000.0" status="DEACTIVATED" tier1Status="ACTIVE" tier2NAVDate="2024-12-03" tier2Status="ACTIVE" tier1NAVDate="2024-12-03" debtAssetValue="2000.0" equityAssetValue="1500.0" otherAssetValue="1500.0"><Holdings><Tier1Holdings schemePreferenceType="DEFAULT_STANDARD" amountInTransition="1000.0" currentValue="2500.0"><Tier1Holding blockedUnits="10.0" freeUnits="20.0" nav="nav1" schemeName="schemeName1" schemeId="schemeId1" allocationPercentage="60.0" totalUnits="50.0" totalValueOfScheme="1500.0"/><Tier1Holding blockedUnits="5.0" freeUnits="15.0" nav="nav2" schemeName="schemeName2" schemeId="schemeId2" allocationPercentage="40.0" totalUnits="20.0" totalValueOfScheme="1000.0"/></Tier1Holdings><Tier2Holdings schemePreferenceType="AUTO_AGGRESSIVE" amountInTransition="500.0" currentValue="2500.0"><Tier2Holding blockedUnits="10.0" freeUnits="75.0" nav="nav3" schemeName="schemeName3" schemeId="schemeId3" totalUnits="90.0" totalValueOfScheme="2250.0" allocationPercentage="90.0"/><Tier2Holding blockedUnits="0.0" freeUnits="15.0" nav="nav4" schemeName="schemeName4" schemeId="schemeId4" totalUnits="10.0" totalValueOfScheme="250.0" allocationPercentage="10.0"/></Tier2Holdings></Holdings></Summary></Account>
`,
  INVIT_XML: `<Account xmlns="http://api.rebit.org.in/FISchema/invit" xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/invit ../FISchema/invit.xsd" linkedAccRef="linkedAccRef1" maskedDematId="XXXXXXXXXXXX0987" version="1.0.0" type="invit"><Profile><Holders><Holder name="name1" dob="2000-05-04" mobile="9999999999" address="address1" landline="0221234567" email="qc@email.com" dematId="XXXXXXXXXXXX0987" pan="AAAAA0000A" kycCompliance="false" nominee="REGISTERED"/></Holders></Profile><Summary currentValue="0"><Investment><Holdings><Holding issuerName="issuerName1" isin="INE111H01011" isinDescription="isinDescription1" totalNumberUnits="50"/></Holdings></Investment></Summary><Transactions startDate="2022-01-01" endDate="2022-06-30"><Transaction txnId="a3c722ac4d99cdr4" isin="INE111H01011" isinDescription="isinDescription1" issuerName="issuerName1" transactionDescription="transactionDescription1" transactionDateTime="2022-04-04T15:10:51+05:30" units="0"/></Transactions></Account>
`,
  REIT_XML: `<Account xmlns="http://api.rebit.org.in/FISchema/reits" xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/reit ../FISchema/reit.xsd" linkedAccRef="linkedAccRef1" maskedDematId="XXXXXXXXXXXX0987" version="1.0.0" type="reit"><Profile><Holders type="SOLE"><Holder name="name1" dob="2000-05-04" mobile="9999999999" address="address1" landline="0221234567" email="qc@email.com" dematId="XXXXXXXXXXXX0987" pan="AAAAA0000A" kycCompliance="false" nominee="REGISTERED"/></Holders></Profile><Summary currentValue="0"><Investment><Holdings><Holding isin="INE111H01011" isinDescription="isinDescription1" issuerName="issuerName1" investmentDateTime="2022-05-04T15:10:51+05:30" totalNumberUnits="0" lastClosingRate="0" nomineeStatus="REGISTERED"/></Holdings></Investment></Summary><Transactions endDate="2022-01-01" startDate="2022-06-30"><Transaction txnId="a3c722ac4d99cdr4" isin="INE111H01011" isinDescription="isinDescription1" issuerName="issuerName1" exchange="NSE" transactionDescription="transactionDescription1" transactionDateTime="2022-05-04T15:10:51+05:30" units="0" narration="narration1"/></Transactions></Account>
`,
  GSTR1_3B_XML: `<Account maskedGstinNumber="XXXXXXXXX1007" linkedAccRef="c69050ff-9e4b-4d98-b128-cc2647cd76c4" version="1.1.0" type="gstr1_3b" xmlns="http://api.rebit.org.in/FISchema/gstr1_3b" xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/gstr1_3b../FISchema/gstr1_3b_v1.1.0.xsd"><Profile><BusinessDetails lgnm="Anupam Mukherjee" apprvdt="2017-09-30" iscmp="Yes" dty="Normal" sts="Active" trdnm="Packaging"><CategoryList><cat>Suppliers making supplies referred to in clause (b) of paragraph 6 of Schedule II</cat><cat>Others</cat></CategoryList></BusinessDetails><PlaceofBusiness><Address bno="31/1" flno="III" bnm="Venu Building" st="Krishna Reddy Layout" loc="Phase-II" stcd="Karnataka" dst="Mysore" pncd="560100"><NatureOfBusinessList><ntr>BONDED_WAREHOUSE</ntr><ntr>FACTORY_OR_MANUFACTURING</ntr><ntr>INPUT_SERVICE_DISTRIBUTOR</ntr></NatureOfBusinessList></Address></PlaceofBusiness></Profile><Transactions strdt="2024-10-25" endt="2024-12-23"><Gstr1Details><gstr1 ret_prd="042021" dof="01-JAN-2021" filingFrequency="MONTHLY" status="PROCESSED"><b2b_dtls><b2b ctin="01AABCE2207R1Z5" inum="S008400" idt="24-11-2016" val="729248.16" pos="06" rchrg="N" inv_typ="R" opd="2016-12" srctyp="e-Invoice" irn="897ADG56RTY78956HYUG90BNHHIJK453GFTD99845672FDHHHSHGFH4567FG56TR" irngendate="24-12-2019" diff_percent="0.65"><itm_det><itm txval="10000" iamt="325" camt="0" samt="0" csamt="10"/></itm_det></b2b></b2b_dtls></gstr1></Gstr1Details><Gstr3bDetails><gstr3b ret_prd="072016" dof="01-JAN-2021" filingFrequency="MONTHLY" status="PROCESSED"><sup_details><osup_det txval="250" iamt="100" camt="200" samt="300" csamt="400"/><osup_zero txval="250" iamt="100" csamt="400"/><osup_nil_exmp txval="250"/><isup_rev txval="250" iamt="100" camt="200" samt="300" csamt="400"/><osup_nongst txval="250"/></sup_details><sup_inter><unreg_details_list><unreg_details txval="250" iamt="200" pos="7"/><unreg_details txval="250" iamt="200" pos="7"/></unreg_details_list><comp_details_list><comp_details txval="250" iamt="200" pos="7"/><comp_details txval="250" iamt="200" pos="7"/></comp_details_list><uin_details_list><uin_details txval="250" iamt="200" pos="7"/><uin_details txval="250" iamt="200" pos="7"/></uin_details_list></sup_inter><eco_dtls><eco_sup txval="250" iamt="100" camt="200" samt="300" csamt="400"/><eco_reg_sup txval="250"/></eco_dtls><itc_elg><itc_avl_list><itc_avl type="IMPG" iamt="136.53" camt="274" samt="162.99" csamt="103"/><itc_avl type="ISRC" iamt="136.53" camt="274" samt="162.99" csamt="103"/></itc_avl_list><itc_rev_list><itc_rev type="RUL" iamt="136.53" camt="274" samt="162.99" csamt="103"/><itc_rev type="OTH" iamt="136.53" camt="274" samt="162.99" csamt="103"/></itc_rev_list><itc_net iamt="136.53" camt="274" samt="162.99" csamt="103"/><itc_inelg_list><itc_inelg type="IMPG" iamt="136.53" camt="274" samt="162.99" csamt="103"/></itc_inelg_list></itc_elg><inward_sup><isup_details_list><isup_details ty="GST" inter="100" intra="200"/><isup_details ty="NONGST" inter="300" intra="400"/></isup_details_list></inward_sup><intr_ltfee><intr_details iamt="10" camt="20" samt="30" csamt="40"/><ltfee_details camt="50" samt="60"/></intr_ltfee><tx_pmt><tx_py_list><tx_py trans_desc="Other than reverse charge"><sgst intr="100" tx="100" fee="100"/><igst intr="100" tx="100"/><cgst intr="100" tx="100" fee="100"/><cess intr="100" tx="100"/></tx_py></tx_py_list></tx_pmt><pdcash_dtls><pdcash_list><pdcash trans_desc="Reverse charge" ipd="3517817" cpd="3517817" spd="3517817" cspd="3517817" i_intrpd="20" c_intrpd="30" s_intrpd="10" cs_intrpd="15" c_lfeepd="13" s_lfeepd="13"/></pdcash_list><pditc trans_desc="Reverse charge" i_pdi="3517817" i_pdc="2290459" i_pds="2290459" c_pdi="3517817" c_pdc="2290459" s_pdi="3517817" s_pds="2290459" cs_pdcs="2290459"/></pdcash_dtls></gstr3b></Gstr3bDetails></Transactions></Account>
`,
  LIFE_INSURANCE_XML: `<Account xmlns="http://api.rebit.org.in/FISchema/life_insurance" xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://api.rebit.org.in/FISchema/life_insurance ../FISchema/life_insurance.xsd" type="life_insurance" linkedAccRef="linkedAccRef1" version="1.0.0" maskedPolicyNumber="XXXXXXX098"><Profile><Holders><Holder name="abc"/></Holders></Profile><Summary sumAssured="200000" premiumAmount="10000" policyType="RETIREMENT" premiumFrequency="ANNUALLY" premiumPaymentYears="20" policyStatus="ACTIVE" policyLoanStatus="NOT_OPTED" tenureYears="20" assignment="NO" currentValue="100000" surrenderValue="100000" exclusions="exclusion details"></Summary></Account>
`,
  GENERAL_INSURANCE_XML: `<Accountxmlns="http://api.rebit.org.in/FISchema/general_insurance"xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xsi:schemaLocation="http://api.rebit.org.in/FISchema/general_insurance../FISchema/general_insurance.xsd"type="general_insurance"linkedAccRef="linkedAccRef1"version="1.0.0"maskedPolicyNumber="XXXXXXX098"><Profile><Holders><Holdername="abc"/></Holders></Profile><SummarypolicyName="SupremeHealth"uinNumber="CHAHLIP22184V062192"policyNumber="1234567890"policyDescription="Thisplanoffershealthinsuranceservicestoindividualcustomers."sumAssured="200000"tenureMonths="36"premiumAmount="5000"policyStartDate="2023-04-12"policyExpiryDate="2026-04-12"policyType="FIXED_BENEFIT"insuranceType="HEALTH"premiumFrequency="ANNUALLY"premiumPaymentYears="3"nextPremiumDueDate="2024-04-12"policyStatus="ACTIVE"><Covers><CoveruinNumber="CHIHLIP22184V062154"coverName="AnnualHealthCheck-up"sumAssured="10000"sumInsured="0"tenureYears="3"premiumAmount="1000"coverStartDate="2023-04-12"coverEndDate="2026-04-12"coverDescription="RiderToCoverAnnualHealthCheckup."tenureMonths="36"/></Covers><Vehicles><VehicleregistrationNumber="KA-32-2134"make="Ferrari"model="Red"mfgYear="1992"rtoLocation="Mumbai"ncbPercentage="20"hypothecation="true"financerName="Vineeth"/></Vehicles></Summary><TransactionsstartDate="2023-04-01"endDate="2023-05-31"><TransactiontxnId="a3c722ac4d99cdr4"txnDate="2023-04-12"amount="6000"narration="narration1"type="PREMIUM_PAYMENT"/></Transactions></Account>
`,
};
