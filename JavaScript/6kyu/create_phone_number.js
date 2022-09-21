// Phone Number Constants:
const AREA_CODE_LENGTH          = 3;
const EXCHANGE_LENGTH           = 3;
const SUBSCRIBER_LENGTH         = 4;
const EXPECTED_LENGTH           = AREA_CODE_LENGTH + EXCHANGE_LENGTH + SUBSCRIBER_LENGTH;
const EXPECTED_ARRAY_DATA_TYPE  = 'number';
const AREA_CODE_PREFIX          = '(';
const AREA_CODE_SUFFIX          = ')';
const AREA_CODE_EXCHANGE_DELIM  = ' ';
const EXCHANGE_SUBSCRIBER_DELIM = '-';

function createPhoneNumber(numbers) {
  // argument handling
  if(Array.isArray(numbers) && typeof(numbers[0]) != EXPECTED_ARRAY_DATA_TYPE)
    throw new Error('createPhoneNumber(number) Invalid Argument Type - expected: \'numbers\' to be an array of integers');
  else if(numbers.length != EXPECTED_LENGTH)
    throw new Error('createPhoneNumber(number) Invalid Argument - expected: numbers.length == ' + EXPECTED_LENGTH + ', recieved: numbers.length == ' + numbers.length);
  let str = "";
  // casting the integer array argument to a string output
  for(let i = 0; i < numbers.length; i++)
    str += '' + numbers[i];
  // returning the string output spliced with formatting characters
  // format: '([area code]) [echange]-[subscriber]'
  return (
    AREA_CODE_PREFIX + str.slice(0, AREA_CODE_LENGTH) + AREA_CODE_SUFFIX + 
    AREA_CODE_EXCHANGE_DELIM + 
    str.slice(AREA_CODE_LENGTH, AREA_CODE_LENGTH + EXCHANGE_LENGTH) +
    EXCHANGE_SUBSCRIBER_DELIM +
    str.slice(AREA_CODE_LENGTH + EXCHANGE_LENGTH, AREA_CODE_LENGTH + EXCHANGE_LENGTH + SUBSCRIBER_LENGTH)
  );
}
