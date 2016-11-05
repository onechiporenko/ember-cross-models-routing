import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import example1 from '../../tests/pages/example1';

moduleForAcceptance('Acceptance | example1', {

  beforeEach() {
    example1.visit();
  }

});

test('visiting /example1', function(assert) {
  andThen(function() {
    assert.equal(currentURL(), '/main/users');
  });
});

test('default redirect is used', function (assert) {
  example1.goToThrall();
  andThen(function () {
    assert.ok(example1.onThrall, 'Thrall');
    assert.ok(example1.onClasses, 'Classes');
  });
});

test('cross models Locations', function (assert) {
  example1.goToThrall();
  example1.goToLocations();
  andThen(function () {
    assert.ok(example1.onThrall, 'Thrall');
    assert.ok(example1.onLocations, 'Locations');
  });
  example1.goToKhadgar();
  andThen(function () {
    assert.ok(example1.onKhadgar, 'Khadgar');
    assert.ok(example1.onLocations, 'Locations');
  });
  example1.goToMalfurion();
  andThen(function () {
    assert.ok(example1.onMalfurion, 'Malfurion');
    assert.ok(example1.onLocations, 'Locations');
  });
});

test('cross models Affiliation', function (assert) {
  example1.goToThrall();
  example1.goToAffiliation();
  andThen(function () {
    assert.ok(example1.onThrall, 'Thrall');
    assert.ok(example1.onAffiliation, 'Affiliation');
  });
  example1.goToKhadgar();
  andThen(function () {
    assert.ok(example1.onKhadgar, 'Khadgar');
    assert.ok(example1.onAffiliation, 'Affiliation');
  });
  example1.goToMalfurion();
  andThen(function () {
    assert.ok(example1.onMalfurion, 'Malfurion');
    assert.ok(example1.onAffiliation, 'Affiliation');
  });
});