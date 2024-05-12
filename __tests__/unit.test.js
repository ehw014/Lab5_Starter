// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('Phone, alpha', () => {
  expect(isPhoneNumber("abvc")).toBe(false);
});
test('Phone, too long', () => {
  expect(isPhoneNumber("111/123/12345")).toBe(false);
});
test('Phone, correct 1', () => {
  expect(isPhoneNumber('(972)974-4454')).toBe(true);
});
test('Phone, correct 2', () => {
  expect(isPhoneNumber('(932)412-1234')).toBe(true);
});

test('Email, no @', () => {
  expect(isEmail("hahaha")).toBe(false);
});
test('Email, fake domain', () => {
  expect(isEmail("hahaha@gmail.comocomc")).toBe(false);
});
test('Email, correct 1', () => {
  expect(isEmail("evan@inbox.com")).toBe(true);
});
test('Email, correct 2', () => {
  expect(isEmail("thisis@notascam.com")).toBe(true);
});

test('Password, too short', () => {
  expect(isStrongPassword("ha")).toBe(false);
});
test('Password, too long', () => {
  expect(isStrongPassword("hahahahahahahahahahas")).toBe(false);
});
test('Password, correct 1', () => {
  expect(isStrongPassword("obama")).toBe(true);
});
test('Password, correct 2', () => {
  expect(isStrongPassword("LemonSoda")).toBe(true);
});

test('Date, shortened year', () => {
  expect(isDate("11/12/23")).toBe(false);
});
test('Date, written out', () => {
  expect(isDate("may 12th ")).toBe(false);
});
test('Date, correct 1', () => {
  expect(isDate("12/24/1999")).toBe(true);
});
test('Date, correct 2', () => {
  expect(isDate("01/01/2021")).toBe(true);
});

test("Color, wrong hex", () => {
  expect(isHexColor("#gg1112")).toBe(false);
}); 
test("Color, too many characters", () => {
  expect(isHexColor("#11111111")).toBe(false);
}); 
test("Color, ", () => {
  expect(isHexColor("#af1245")).toBe(true);
}); 
test("Color, ", () => {
  expect(isHexColor("#b01b23")).toBe(true);
}); 