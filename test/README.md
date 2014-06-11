# Symbiosis.js Tests

This project embrace practices of TDD (test driven development), following few very simple principles:

* No line of production code without test
* No bugfix without test proves it
* Tests quality === Code quality (where `===` means, equally important)

## Integration and unit testing

Unit test is the one that focus on one small piece of functionality and able to test it in full isolation. Mocks are commonly used to isolate code under test of any external dependencies.

Integration test is, in other hand, tests object collaboration without mocking external dependencies.

Good test coverage is a combination of unit tests (fast) and integration tests (slow).

## Safety net

We should think about tests as `safety net` that prevents the death of wrong step. Safety net, should not be something that hard to maintain. Following `test-first` principle (which is recommended) make things happen themselves.

Safety net should be reliable. If all tests pass, we have to have strong concision - system behaves as it's expected. Build real `safety net` is hard job.

## Behavior driven development

Behavior driven development is focuses on `behavior` of system, not `implementation` details. It re-focus testing from developers point of few ("method have to return value"), to users point of view ("system should have such reaction").

Behavior driven tests are in general `integration` ones, but BDD style of testing could be used for unit testing as well.

### TDD vs. BDD

TDD commonly use `AAA` principle of testing (accept, act, assert).

```js
function test() {
  // arrange
  var model = new Model();

  // act
  model.set({a: 5});

  // arrange
  assert(model.get('a')).toEqual(5);
}
```

With BDD, syntax looks a bit different, `GWT` (given, when, then). Jasmine introduces their own functions - `describe`, `before`, `it`. BDD also focuses on clear description of tests on plain English.

```js
describe('model specs', function () {
  var model;

  // establish of context (given)
  beforeEach(function () {
    model = new Model();
  });

  describe('when model properties are set', function () {
    // action (when)
    beforeEach(function () {
      model.set({a: 5});
    });

    // assert (then)
    it('should initialize property', function () {
      expect(model.get('a')).toEqual(5);
    });
  });
});
```

The benefit of approach is that `establish of context` and `actions` are reusable within one spec.

The pattern of testing:

* Establish of context is in one (or several) `before` / `beforeEach` functions
* Asserts do not execute and functions except `expect()`
* One line actions, One line asserts are good

### Focus on behavior

Testing of `behavior` is black-box testing, testing of `implementationn` is white-box testing. Black-box in general case is better, since such tests are more robust and locks systems behavior. White-box testing is more fragile (small refactoring of implementation is able to break many tests).

Smells of `implementationn` focused tests,

```js
it('should have type', function () {
  expect(typeof x).toEqual('string');
});

it('should have base class', function () {
  expect(x).toBeInstanceOf(Foo);
});

it('should be called before boo()', function() {
  expect(foo).toBeCalled();
});

// etc.
```

