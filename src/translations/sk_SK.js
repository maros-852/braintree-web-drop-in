'use strict';

module.exports = {
  payingWith: 'Platba pomocou {{paymentSource}}',
  chooseAnotherWayToPay: 'Vyberte iný spôsob platby',
  chooseAWayToPay: 'Vyberte spôsob platby',
  otherWaysToPay: 'Iné spôsoby platby',
  edit: 'Upraviť',
  doneEditing: 'Hotovo',
  editPaymentMethods: 'Upravte spôsoby platby',
  CreditCardDeleteConfirmationMessage: 'Vymazať {{secondaryIdentifier}} kartu končiacu na {{identifier}}?',
  PayPalAccountDeleteConfirmationMessage: 'Vymazať PayPal účet {{identifier}}?',
  VenmoAccountDeleteConfirmationMessage: 'Naozaj chcete odstrániť Venmo účet s používateľským menom{{identifier}}?',
  genericDeleteConfirmationMessage: 'Naozaj chcete odstrániť tento spôsob platby?',
  deleteCancelButton: 'Zrušiť',
  deleteConfirmationButton: 'Vymazať',
  // Errors
  fieldEmptyForCvv: 'Vyplňte overovací kód.',
  fieldEmptyForExpirationDate: 'Vyplňte dátum platnosti.',
  fieldEmptyForCardholderName: 'Vyplňte meno držiteľa karty.',
  fieldEmptyForNumber: 'Vyplňte číslo karty.',
  fieldEmptyForPostalCode: 'Vyplňte PSČ.',
  fieldInvalidForCvv: 'Bezpečnostný kód nie je platný.',
  fieldInvalidForExpirationDate: 'Dátum platnosti nie je platný.',
  fieldInvalidForNumber: 'Číslo karty nie je platné.',
  fieldInvalidForPostalCode: 'PSČ nie je platné.',
  fieldTooLongForCardholderName: 'Meno držiteľa karty musí mať menej ako 256 znakov.',
  genericError: 'Problém nastal na našej strane.',
  hostedFieldsTokenizationFailOnDuplicateError: 'Táto kreditná karta už existuje ako uložený spôsob platby.',
  hostedFieldsFailedTokenizationError: 'Skontrolujte svoje informácie a skúste to znova.',
  hostedFieldsTokenizationCvvVerificationFailedError: 'Overenie kreditnej karty zlyhalo. Skontrolujte svoje informácie a skúste to znova.',
  hostedFieldsTokenizationNetworkErrorError: 'Chyba siete. Prosím skúste to znova.',
  hostedFieldsFieldsInvalidError: 'Skontrolujte svoje informácie a skúste to znova.',
  paypalButtonMustBeUsed: 'Pomocou tlačidla PayPal pokračujte v platbe.',
  paypalAccountTokenizationFailedError: 'Pri pridávaní účtu PayPal sa vyskytla chyba. Prosím skúste to znova.',
  paypalFlowFailedError: 'Pri pokuse o pripojenie k službe PayPal sa vyskytla chyba. Prosím skúste to znova.',
  paypalTokenizationRequestActiveError: 'Autorizácia platby PayPal už prebieha.',
  applePayTokenizationError: 'Pri spracovaní platby Apple Pay sa vyskytla chyba v sieti. Prosím skúste to znova.',
  applePayActiveCardError: 'Pridajte do svojej peňaženky Apple Pay podporovanú kartu.',
  vaultManagerPaymentMethodDeletionError: 'Nie je možné odstrániť spôsob platby, skúste to znova.',
  venmoCanceledError: 'Niečo sa pokazilo. Uistite sa, že máte na svojom prístroji nainštalovanú najnovšiu verziu aplikácie Venmo a váš prehliadač podporuje prepínanie na aplikáciu Venmo.',
  venmoAppFailedError: 'Aplikácia Venmo sa na vašom zariadení nenašla.',
  unsupportedCardTypeError: 'Tento typ karty nie je podporovaný. Skúste prosím inú kartu.',
  // Card form
  cardholderNameLabel: 'Meno držiteľa karty',
  cardNumberLabel: 'Číslo karty',
  cvvLabel: 'Overovací kód',
  cvvThreeDigitLabelSubheading: '(3 číslice)',
  cvvFourDigitLabelSubheading: '(4 číslice)',
  expirationDateLabel: 'Platnosť do',
  expirationDateLabelSubheading: '(MM/RR)',
  cardholderNamePlaceholder: 'Meno držiteľa karty',
  expirationDatePlaceholder: 'MM/RR',
  postalCodeLabel: 'PSČ',
  saveCardLabel: 'Uložiť kartu',
  payWithCard: 'Platba kartou',
  // Payment Method descriptions
  endingIn: 'Končiaca na {{lastFourCardDigits}}',
  Card: 'Karta',
  PayPal: 'PayPal',
  'PayPal Credit': 'PayPal Credit',
  'Apple Pay': 'Apple Pay',
  'Google Pay': 'Google Pay',
  'Venmo': 'Venmo',
  'American Express': 'American Express',
  Discover: 'Discover',
  'Diners Club': 'Diners Club',
  MasterCard: 'Mastercard',
  Visa: 'Visa',
  JCB: 'JCB',
  Maestro: 'Maestro',
  UnionPay: 'UnionPay'
};