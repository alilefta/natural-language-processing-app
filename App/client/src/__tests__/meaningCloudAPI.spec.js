import {nplAPIUsage} from './../meaningCloudAPI'
test('the data is returend from meaningCloudAPI', () => {
  return nplAPIUsage("", "", "").then(data => {
    expect(data).toBe({});
  });
});