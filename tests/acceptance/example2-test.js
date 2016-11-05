import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import example2 from '../../tests/pages/example2';

moduleForAcceptance('Acceptance | example2', {
  beforeEach() {
    example2.visit();
  }
});


test('visiting /example2', function(assert) {
  andThen(function() {
    assert.equal(currentURL(), '/main/games');
  });
});

test('WoW. default redirect is used', function (assert) {
  example2.goToWow();
  example2.goToThrall();
  andThen(function () {
    assert.ok(example2.onThrall, 'Thrall');
    assert.ok(example2.onClasses, 'Classes');
  });
});

test('WoW. cross models Locations', function (assert) {
  example2.goToWow();
  example2.goToThrall();
  example2.goToLocations();
  andThen(function () {
    assert.ok(example2.onThrall, 'Thrall');
    assert.ok(example2.onLocations, 'Locations');
  });
  example2.goToKhadgar();
  andThen(function () {
    assert.ok(example2.onKhadgar, 'Khadgar');
    assert.ok(example2.onLocations, 'Locations');
  });
  example2.goToMalfurion();
  andThen(function () {
    assert.ok(example2.onMalfurion, 'Malfurion');
    assert.ok(example2.onLocations, 'Locations');
  });
});

test('WoW. cross models Affiliation', function (assert) {
  example2.goToWow();
  example2.goToThrall();
  example2.goToAffiliation();
  andThen(function () {
    assert.ok(example2.onThrall, 'Thrall');
    assert.ok(example2.onAffiliation, 'Affiliation');
  });
  example2.goToKhadgar();
  andThen(function () {
    assert.ok(example2.onKhadgar, 'Khadgar');
    assert.ok(example2.onAffiliation, 'Affiliation');
  });
  example2.goToMalfurion();
  andThen(function () {
    assert.ok(example2.onMalfurion, 'Malfurion');
    assert.ok(example2.onAffiliation, 'Affiliation');
  });
});

test('SC2. default redirect is used', function (assert) {
  example2.goToSc2();
  example2.goToZeratul();
  andThen(function () {
    assert.ok(example2.onZeratul, 'Zeratul');
    assert.ok(example2.onClasses, 'Classes');
  });
});

test('SC2. cross models Locations', function (assert) {
  example2.goToSc2();
  example2.goToZeratul();
  example2.goToLocations();
  andThen(function () {
    assert.ok(example2.onZeratul, 'Zeratul');
    assert.ok(example2.onLocations, 'Locations');
  });
  example2.goToKerrigan();
  andThen(function () {
    assert.ok(example2.onKerrigan, 'Kerrigan');
    assert.ok(example2.onLocations, 'Locations');
  });
  example2.goToRaynor();
  andThen(function () {
    assert.ok(example2.onRaynor, 'Raynor');
    assert.ok(example2.onLocations, 'Locations');
  });
});

test('SC2. cross models Affiliation', function (assert) {
  example2.goToSc2();
  example2.goToZeratul();
  example2.goToAffiliation();
  andThen(function () {
    assert.ok(example2.onZeratul, 'Zeratul');
    assert.ok(example2.onAffiliation, 'Affiliation');
  });
  example2.goToKhadgar();
  andThen(function () {
    assert.ok(example2.onKerrigan, 'Kerrigan');
    assert.ok(example2.onAffiliation, 'Affiliation');
  });
  example2.goToRaynor();
  andThen(function () {
    assert.ok(example2.onRaynor, 'Raynor');
    assert.ok(example2.onAffiliation, 'Affiliation');
  });
});