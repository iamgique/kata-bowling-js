const { KataFrame } = require('../kata-frame');

let frame;

beforeEach(() => {
    frame = new KataFrame();
})

it ('should return normal frame', () => {
    frame.firstCell(5);
    frame.secondCell(4);
    expect(frame.isNormal).toEqual(true);
    expect(frame.isSpare).toEqual(false);
    expect(frame.isStrike).toEqual(false);
});

it ('should return spare', () => {
    frame.firstCell(6);
    frame.secondCell(4);
    expect(frame.isSpare).toEqual(true);
    expect(frame.isNormal).toEqual(false);
    expect(frame.isStrike).toEqual(false);
});

it ('should return strike', () => {
    frame.firstCell(10);
    expect(frame.isStrike).toEqual(true);
    expect(frame.isSpare).toEqual(false);
    expect(frame.isNormal).toEqual(false);
});

it ('should return correct cell when added', () => {
    frame.add(6);
    frame.add(3);
    expect(frame.first).toEqual(6);
    expect(frame.second).toEqual(3);
});

it ('should return correct when roll complete', () => {
    var frame = new KataFrame();
    expect(frame.isComplete).toEqual(false);

    frame = new KataFrame();
    frame.add(3);
    expect(frame.isComplete).toEqual(false);

    frame = new KataFrame();
    frame.add(10);
    expect(frame.isComplete).toEqual(true);

    frame = new KataFrame();
    frame.add(6);
    frame.add(3);
    expect(frame.isComplete).toEqual(true);

    frame = new KataFrame();
    frame.add(6);
    frame.add(4);
    expect(frame.isComplete).toEqual(true);
});

