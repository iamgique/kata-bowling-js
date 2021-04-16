const KataFrame = require('../kata-frame');

it ('should return normal frame', () => {
    let frame = new KataFrame();
    frame.firstCell(5);
    frame.secondCell(4);
    expect(frame.isNormal).toEqual(true);
    expect(frame.isSpare).toEqual(false);
    expect(frame.isStrike).toEqual(false);
});

it ('should return spare', () => {
    let frame = new KataFrame();
    frame.firstCell(6);
    frame.secondCell(4);
    expect(frame.isSpare).toEqual(true);
    expect(frame.isNormal).toEqual(false);
    expect(frame.isStrike).toEqual(false);
});

it ('should return strike', () => {
    let frame = new KataFrame();
    frame.firstCell(10);
    expect(frame.isStrike).toEqual(true);
    expect(frame.isSpare).toEqual(false);
    expect(frame.isNormal).toEqual(false);
});

it ('should return correct cell when added', () => {
    let frame = new KataFrame();
    frame.add(6);
    frame.add(3);
    expect(frame.first).toEqual(6);
    expect(frame.second).toEqual(3);
});