---
title: KYC and AML
description: Beginner guide to customer verification, anti-money laundering controls and the crypto Travel Rule
aliases: [Know Your Customer, Anti-Money Laundering, Crypto KYC, Travel Rule]
categories: [Cryptocurrency, Regulation, Security]
updated: 2026-10-23
last_modified: 2026-10-23
infobox:
  title: KYC and AML
  rows:
    - KYC: Know Your Customer
    - AML: Anti-Money Laundering
    - CFT: Countering the Financing of Terrorism
    - Main participants: Service providers, customers and authorities
    - Related concept: Customer due diligence
---
**Know Your Customer** (**KYC**) describes processes used to identify and understand customers. **Anti-Money Laundering** (**AML**) describes the broader system of controls intended to detect and prevent the misuse of financial services to handle criminal proceeds. Customer verification is one part of that broader system.

In cryptocurrency services, these controls can involve verifying an exchange customer, understanding the purpose of an account, monitoring transactions and reporting suspicious activity. Requirements depend on the jurisdiction, business model and applicable law. The Financial Action Task Force's standards provide an international framework that countries implement through their own systems.[^fatf]

A beginner may encounter KYC when a service requests identification before allowing trading or withdrawals. The request should be understood in the context of the provider's legal obligations and privacy practices. It is not proof that the service or every available investment is safe.

## The core concepts

| Term | Meaning | Practical example |
|---|---|---|
| KYC | Identifying and understanding a customer | Checking identity information |
| Customer due diligence | Assessing who the customer is and the relationship's purpose | Understanding why a business needs an account |
| AML | Controls addressing laundering of criminal proceeds | Reviewing unusual transaction patterns |
| CFT | Measures addressing financing of terrorism | Investigating activity relevant to prohibited financing |
| Beneficial owner | The person ultimately owning or controlling a relevant entity or arrangement | Looking beyond a company's registered name |
| Suspicious transaction report | Information submitted to the appropriate authority under applicable rules | Reporting activity after compliance review |
| Travel Rule | Required originator and beneficiary information associated with covered transfers | Information exchanged between service providers |

These terms overlap but are not identical. A customer can successfully complete identity verification while later activity raises questions. Conversely, an automated alert does not by itself prove wrongdoing.

## Why identity checks exist

Public blockchain addresses usually identify locations to which transactions can be attributed, rather than directly displaying a verified legal identity. A service handling customer accounts may therefore need information beyond the blockchain record.

An identity check attempts to establish who is using the account. Understanding the account's purpose helps a provider assess whether later activity is consistent with that relationship. A personal account used for occasional purchases differs from a company account processing many customer payments.

The FATF framework calls for customer due diligence, recordkeeping and suspicious transaction reporting by covered service providers. It also calls for countries to license or register and supervise relevant providers.[^fatf]

These controls do not mean that every individual using a wallet is operating a regulated business. The activity and role matter. US FinCEN guidance, for example, distinguishes users from administrators and exchangers when discussing convertible virtual currency and money transmission.[^fincen]

## A typical customer-verification process

The following sequence is illustrative. A provider's actual steps depend on legal requirements and the risk assessment.

1. **Collect basic information.** The service asks for details identifying the customer or organization.
2. **Verify the information.** Appropriate evidence or checks are used to assess its accuracy.
3. **Understand the relationship.** The provider considers the intended use of the account.
4. **Assess relevant risk.** The customer's circumstances and requested services inform the level of review.
5. **Approve, request clarification or decline.** The provider makes a decision under its procedures and obligations.
6. **Maintain the relationship.** Information and activity may be reviewed over time.

For a company, identifying the entity alone may be insufficient. The provider can also need to establish the individuals who ultimately own or control it. FATF beneficial-ownership materials explain why transparency about those individuals matters when legal structures could otherwise obscure control.[^beneficial]

### Risk-based review

A **risk-based approach** means directing attention and controls according to assessed risk. It does not mean that every customer receives identical checks or that an unusual customer is automatically involved in crime.

Additional review may seek a clearer explanation of an activity or stronger supporting evidence. FATF's guidance on financial inclusion emphasizes that implementation should reflect risk rather than treating all customers as uniformly high risk.[^inclusion]

For example, a small personal purchase and a complex business arrangement can raise different questions. The point is to understand the relationship sufficiently for the applicable obligations, while avoiding unsupported conclusions based only on size or unfamiliarity.

## Transaction monitoring

Identity information establishes part of the relationship; activity provides another part. Transaction monitoring compares events with relevant risk indicators and the known account context.

A hypothetical customer might explain that an account will receive occasional freelance payments. If its activity changes substantially, a provider may seek clarification. The change is a reason to investigate, not a finding that a crime occurred.

Monitoring can combine account information, transaction histories and blockchain analysis. The usefulness of each source depends on its accuracy and context. A transaction's technical connection to another address does not by itself explain the customer's intent or the commercial purpose of the transfer.

FinCEN's 2019 material describes guidance for convertible virtual-currency business models and an advisory intended to help financial institutions identify and report suspicious activity. Its focus is the obligations and conduct of covered financial businesses.[^fincen2019]

## Suspicious activity reporting

A report to an authority is a compliance action based on the applicable legal standard. It is distinct from a public accusation or a criminal conviction. Authorities may combine reports with other information when investigating.

Customers should also distinguish a provider's temporary review from a final determination about ownership or legal rights. The provider's procedures, contractual terms and governing law influence what happens during a review.

If a service requests clarification, a useful response explains the actual transaction and supplies relevant records through verified channels. Inventing an explanation can undermine the reliability of the account history. The purpose of records is to connect the visible transfer with the genuine underlying activity.

## The Travel Rule

The **Travel Rule** concerns originator and beneficiary information associated with covered transfers. In the FATF framework, relevant service providers obtain, hold and securely transmit required information. Its implementation depends on national rules.[^fatf]

A simple analogy is the information accompanying a conventional financial transfer. The payment instruction needs to reach the recipient, while regulated institutions also exchange information identifying the parties. In crypto, this information exchange is separate from merely broadcasting a transaction to a blockchain.

The rule does not mean that identity documents should be written permanently into a public blockchain. Providers must consider secure handling of the required information and the applicable privacy rules.

### A transfer example

Suppose a customer sends tokens from an account at Provider A to a beneficiary at Provider B. Under an applicable Travel Rule implementation, the providers may need to exchange specified information about the sender and recipient as part of processing that transfer.

If the destination is a personally controlled wallet, the operational questions differ because there may be no receiving institution to contact. FATF's updated guidance addresses transfers involving unhosted wallets, but the exact obligations must be checked locally.[^guidance]

A reader should therefore avoid assuming that every country uses the same threshold, data fields or treatment of self-hosted wallets. A global standard and a domestic operational requirement are different levels of the system.

## International and domestic responsibilities

FATF develops standards and evaluates implementation; it is not a worldwide exchange-registration office. National authorities translate the framework into domestic obligations, and their approaches can differ.

India's FIU publishes registration resources and AML/CFT guidance for virtual digital asset service providers, including an update dated **8 January 2026**. Readers should consult the current documents rather than assuming that an older summary captures every requirement.[^fiu]

The broader [cryptocurrency regulation](../Cryptocurrency_regulation/) article discusses selected market-regulation frameworks. Licensing for trading, financial-crime registration and [tax reporting](../Cryptocurrency_taxation/) should be examined separately even where the same company must satisfy all three.

## Privacy and security

Identity information can be sensitive. Before supplying it, a customer should verify the service's genuine website or application, the legal entity collecting the data and the reason for the request. A request received through an unsolicited message deserves independent verification through the service's established channel.

Providing identity evidence does not require handing over a wallet's secret recovery phrase or private key. Those secrets authorize control of assets; they are fundamentally different from documents used to verify a customer. A person claiming to perform KYC should not be given unrestricted access to a wallet merely because they use compliance terminology.

Customers can read the provider's privacy notice to understand retention, sharing and contact arrangements. A completed check should not be assumed to erase the privacy consequences of collecting the information.

## Common misunderstandings

**KYC is not the entire AML program.** Identification, monitoring, recordkeeping and reporting serve different purposes.

**A verified account is not an investment guarantee.** Identity checks do not establish that listed tokens will retain value or that an operator cannot fail.

**An alert is not a conviction.** Automated systems and human reviewers need context before drawing conclusions.

**A blockchain address is not necessarily a verified person.** It is a technical identifier whose relationship to individuals and organizations requires additional evidence.

**International standards are not identical domestic laws.** The relevant country, provider and activity determine the operative requirements.

## See also

- [Cryptocurrency regulation](../Cryptocurrency_regulation/)
- [Cryptocurrency taxation](../Cryptocurrency_taxation/)
- [Bitcoin](../Bitcoin/)

## References

[^fatf]: FATF, [Virtual assets](https://www.fatf-gafi.org/en/topics/virtual-assets.html).
[^fincen]: FinCEN, [Application of FinCEN's Regulations to Persons Administering, Exchanging, or Using Virtual Currencies](https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-persons-administering), 2013.
[^beneficial]: FATF, [Beneficial ownership](https://www.fatf-gafi.org/en/topics/beneficial-ownership.html).
[^inclusion]: FATF, [Guidance on AML/CFT measures and financial inclusion](https://www.fatf-gafi.org/en/publications/Fatfgeneral/Financial-inclusion-cdd-2017.html), 2017.
[^fincen2019]: FinCEN, [New guidance and advisory concerning virtual currencies](https://www.fincen.gov/news/news-releases/new-fincen-guidance-affirms-its-longstanding-regulatory-framework-virtual), 9 May 2019.
[^guidance]: FATF, [Updated Guidance for a Risk-Based Approach to Virtual Assets and Virtual Asset Service Providers](https://www.fatf-gafi.org/content/dam/fatf/documents/recommendations/Updated-Guidance-VA-VASP.pdf), 2021.
[^fiu]: FIU-India, [Guidance and registration resources](https://fiuindia.gov.in/files/downloads/downloads.html).
