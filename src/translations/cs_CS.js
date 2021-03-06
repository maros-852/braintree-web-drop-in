'use strict';

module.exports = {
  payingWith: 'Placení s {{paymentSource}}',
  chooseAnotherWayToPay: 'Vyberte jiný způsob platby',
  chooseAWayToPay: 'Vyberte způsob platby',
  otherWaysToPay: 'Jiné způsoby platby',
  edit: 'Upravit',
  doneEditing: 'Hotovo',
  editPaymentMethods: 'Upravit platební metody',
  CreditCardDeleteConfirmationMessage: 'Smazat {{secondaryIdentifier}} kartu končící na {{identifier}}?',
  PayPalAccountDeleteConfirmationMessage: 'Smazat účet PayPal {{identifier}}?',
  VenmoAccountDeleteConfirmationMessage: 'Opravdu chcete smazat účet Venmo s uživatelským jménem {{identifier}}?',
  genericDeleteConfirmationMessage: 'Opravdu chcete tento způsob platby smazat?',
  deleteCancelButton: 'Zrušit',
  deleteConfirmationButton: 'Odstranit',
  // Errors
  fieldEmptyForCvv: 'Vyplňte ověřovací kód.',
  fieldEmptyForExpirationDate: 'Vyplňte datum platnosti.',
  fieldEmptyForCardholderName: 'Vyplňte jméno držitele karty.',
  fieldEmptyForNumber: 'Vyplňte číslo karty.',
  fieldEmptyForPostalCode: 'Vyplňte PSČ.',
  fieldInvalidForCvv: 'Tento bezpečnostní kód není platný.',
  fieldInvalidForExpirationDate: 'Toto datum platnosti není platné.',
  fieldInvalidForNumber: 'Toto číslo karty není platné.',
  fieldInvalidForPostalCode: 'Toto PSČ není platný.',
  fieldTooLongForCardholderName: 'Jméno držitele karty musí být kratší než 256 znaků.',
  genericError: 'Problém nastal na naší straně.',
  hostedFieldsTokenizationFailOnDuplicateError: 'Tato kreditní karta již existuje jako uložený způsob platby.',
  hostedFieldsFailedTokenizationError: 'Zkontrolujte své údaje a zkuste to znovu.',
  hostedFieldsTokenizationCvvVerificationFailedError: 'Ověření kreditní karty se nezdařilo. Zkontrolujte své údaje a zkuste to znovu.',
  hostedFieldsTokenizationNetworkErrorError: 'Chyba sítě. Prosím zkuste to znovu.',
  hostedFieldsFieldsInvalidError: 'Zkontrolujte své údaje a zkuste to znovu.',
  paypalButtonMustBeUsed: 'Pomocí tlačítka PayPal pokračujte v platbě.',
  paypalAccountTokenizationFailedError: 'Při přidávání účtu PayPal došlo k chybě. Prosím zkuste to znovu.',
  paypalFlowFailedError: 'Při připojování k systému PayPal došlo k chybě. Prosím zkuste to znovu.',
  paypalTokenizationRequestActiveError: 'Autorizace platby PayPal již probíhá.',
  applePayTokenizationError: 'Při zpracování platby Apple Pay došlo k chybě sítě. Prosím zkuste to znovu.',
  applePayActiveCardError: 'Přidejte do své peněženky Apple Pay podporovanou kartu.',
  vaultManagerPaymentMethodDeletionError: 'Nelze smazat platební metodu, zkuste to znovu.',
  venmoCanceledError: 'Něco se pokazilo. Ujistěte se, že máte v zařízení nainstalovanou nejnovější verzi aplikace Venmo a váš prohlížeč podporuje přepínání na aplikaci Venmo.',
  venmoAppFailedError: 'Na vašem zařízení nelze najít aplikaci Venmo.',
  unsupportedCardTypeError: 'Tento typ karty není podporován. Zkuste prosím jinou kartu.',
  // Card form
  cardholderNameLabel: 'Jméno držitele karty',
  cardNumberLabel: 'Číslo karty',
  cvvLabel: 'Ověřovací kód',
  cvvThreeDigitLabelSubheading: '(3 číslice)',
  cvvFourDigitLabelSubheading: '(4 číslice)',
  expirationDateLabel: 'Platnost do',
  expirationDateLabelSubheading: '(MM/RR)',
  cardholderNamePlaceholder: 'Jméno držitele karty',
  expirationDatePlaceholder: 'MM/RR',
  postalCodeLabel: 'PSČ',
  saveCardLabel: 'Uložiť kartu',
  payWithCard: 'Platba kartou',
  // Payment Method descriptions
  endingIn: 'Končící na {{lastFourCardDigits}}',
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