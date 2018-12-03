import React from 'react';
import PropTypes from 'prop-types';
import HumanTimerLib from "human-timer";

class HumanTimer extends React.Component {
    constructor(props) {
        super(props);
        const { seconds, zeroes, onEnd, onTick } = this.props;

        this.timer = new HumanTimerLib({
            seconds,
            zeroes,
            onEnd: () => {
                if (onEnd) onEnd(this.timer);
            },
            onTick: () => {
                if (onTick) onTick(this.timer);
                this.forceUpdate();
            }
        });
    }
    componentWillUnmount() {
        if (this.timer) this.timer.stop();
    }
    componentDidUpdate() {
        if (!this.props.active) this.timer.stop();
    }
    componentDidMount() {
        if (this.props.active) this.timer.start();
    }
    render() {
        return this.props.children(this.timer);
    }
}

HumanTimer.propTypes = {
    seconds: PropTypes.number.isRequired,
    children: PropTypes.func.isRequired,
    onEnd: PropTypes.func,
    onTick: PropTypes.func,
    zeroes: PropTypes.bool,
    active: PropTypes.bool
};

HumanTimer.defaultProps = {
    active: true
};

export default HumanTimer;