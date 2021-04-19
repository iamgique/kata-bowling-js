const { KataFrameExtend } = require('../kata-frame');

it ('should return correct score when rolls', () => {
    var frame = new KataFrameExtend();
    frame.add(9);
    frame.add(1);
    expect(frame.isComplete).toEqual(false);

    frame = new KataFrameExtend();
    frame.add(7);
    frame.add(1);
    expect(frame.isComplete).toEqual(true);

    frame = new KataFrameExtend();
    frame.add(9);
    frame.add(1);
    frame.add(1);
    expect(frame.isComplete).toEqual(true);

    frame = new KataFrameExtend();
    frame.add(10);
    frame.add(10);
    expect(frame.isComplete).toEqual(false);

    frame = new KataFrameExtend();
    frame.add(9);
    expect(frame.isComplete).toEqual(false);

    frame = new KataFrameExtend();
    frame.add(10);
    frame.add(10);
    frame.add(10);
    expect(frame.isComplete).toEqual(true);
});

it ('should return correct', () => {
    var frame = new KataFrameExtend();
    frame.add(10);
    frame.add(5);
    frame.add(5);
    expect(frame.computeScore()).toEqual(20);

    frame = new KataFrameExtend();
    frame.add(4);
    frame.add(3);
    expect(frame.computeScore()).toEqual(7);

    frame = new KataFrameExtend();
    frame.add(10);
    frame.add(10);
    frame.add(1);
    expect(frame.computeScore()).toEqual(21);

    frame = new KataFrameExtend();
    frame.add(4);
    frame.add(6);
    frame.add(3);
    expect(frame.computeScore()).toEqual(13);
});
