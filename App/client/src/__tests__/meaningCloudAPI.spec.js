import {nplAPIUsage} from './../meaningCloudAPI'
test('the data is returend from meaningCloudAPI', () => {
  return nplAPIUsage("1234567890", "Hi", "en").then(data => {
    expect(data).toBeUndefined();
  });
});
