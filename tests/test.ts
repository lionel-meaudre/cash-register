import CashRegister from "../src/CashRegister";
import Change from "../src/Change";
import 'jasmine';

describe('CashRegister', function() {
  it('change 1', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(1);
    expect(result).toEqual(null);
  });
});

describe('CashRegister', function() {
  it('change 2', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(2);
    expect(result).toEqual(new Change(0, 0, 1));
  });
});

describe('CashRegister', function() {
  it('change 3', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(3);
    expect(result).toEqual(null);
  });
});

describe('CashRegister', function() {
  it('change 5', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(5);
    expect(result).toEqual(new Change(0, 1, 0));
  });
});

describe('CashRegister', function() {
  it('change 6', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(6);
    expect(result).toEqual(new Change(0, 0, 3));
  });
});

describe('CashRegister', function() {
  it('change 7', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(7);
    expect(result).toEqual(new Change(0, 1, 1));
  });
});

describe('CashRegister', function() {
  it('change 10', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(10);
    expect(result).toEqual(new Change(1, 0, 0));
  });
});

describe('CashRegister', function() {
  it('change 11', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(11);
    expect(result).toEqual(new Change(0, 1, 3));
  });
});

describe('CashRegister', function() {
  it('change 16', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(16);
    expect(result).toEqual(new Change(1, 0, 3));
  });
});

describe('CashRegister', function() {
  it('change 13', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(13);
    expect(result).toEqual(new Change(0, 1, 4));
  });
});

describe('CashRegister', function() {
  it('change 17', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(17);
    expect(result).toEqual(new Change(1, 1, 1));
  });
});

describe('CashRegister', function() {
  it('change 21', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(21);
    expect(result).toEqual(new Change(1, 1, 3));
  });
});

describe('CashRegister', function() {
  it('change 22', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(22);
    expect(result).toEqual(new Change(2, 0, 1));
  });
});

describe('CashRegister', function() {
  it('change 9007199254740991', function() {
      const cashRegister = new CashRegister();
    let result = CashRegister.change(9007199254740991);
    expect(result).toEqual(new Change(900719925474098, 1, 3));
  });
});