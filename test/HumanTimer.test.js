import React from "react";
import HumanTimer from "../HumanTimer";

describe("<HumanTimer>", () => {
    let timerComponent;
    const mockedTick = jest.fn();
    const mockedEnd = jest.fn();

    beforeAll(()=>{
        jest.useFakeTimers();

        timerComponent = shallow(
            <HumanTimer onTick={mockedTick} onEnd={mockedEnd} seconds={10}>{
                (timer) => (
                    <div>
                        <p>Hours: {timer.hours}</p>
                        <p>Minutes: {timer.minutes}</p>
                        <p>{timer.durationLeft}</p>
                    </div>
                )
            }
            </HumanTimer>
        );
    });

    it('renders a function passed as a child', () => {
        expect(timerComponent.find("p").length).toEqual(3);
    });
    
    it('passes a timer prop to function on every render', () => {
        jest.advanceTimersByTime(2000);
        expect(timerComponent.find("p").last().text()).toEqual("9");
    });

    it('correctly calls events', () => {
        jest.advanceTimersByTime(10000);
        expect(mockedTick).toHaveBeenCalledTimes(9);
        expect(mockedEnd).toHaveBeenCalledTimes(1);
    });

    it('can be stopped', () => {
        const timerComponent = shallow(
            <HumanTimer active={true} seconds={10}>{
                (timer) => (
                    <div>
                        <p>Hours: {timer.hours}</p>
                        <p>Minutes: {timer.minutes}</p>
                        <p>{timer.durationLeft}</p>
                    </div>
                )
            }
            </HumanTimer>
        );

        jest.advanceTimersByTime(5000);
        expect(timerComponent.find("p").last().text()).toEqual("6");
        timerComponent.setProps({active:false});
        jest.advanceTimersByTime(15000);
        expect(timerComponent.find("p").last().text()).not.toEqual("0");
    });
});