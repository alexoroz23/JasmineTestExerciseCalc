
describe("The monthly rate",function() {
  it('should calculate the monthly rate correctly', function() {
    const values = {
      amount: 10000,
      years: 8,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('130.44');
  });
})

describe("Result will have 2 decimal places", function() {
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 10043,
      years: 8,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('131.00');
  });
})

describe("Regardless of interest rate value function should work", function() {
  it("should handle terribly high interest rates", function() {
    const values = {
      amount: 1000,
      years: 40,
      rate: 99
    };
    expect(calculateMonthlyPayment(values)).toEqual('82.50');
  });
})

describe("Regardless of years function should work", function() {
  it("should handle terribly high term in years", function() {
    const values = {
      amount: 1000,
      years: 99,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('4.85');
  });
})
