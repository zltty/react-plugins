import React from 'react';

const normalizeScrollEvent = e => ({
    nativeEvent: {
        contentOffset: {
            get x() {
                return e.target.scrollLeft;
            },
            get y() {
                return e.target.scrollTop;
            }
        },
        contentSize: {
            get height() {
                return e.target.scrollHeight;
            },
            get width() {
                return e.target.scrollWidth;
            }
        },
        layoutMeasurement: {
            get height() {
                return e.target.offsetHeight;
            },
            get width() {
                return e.target.offsetWidth;
            }
        }
    },
    timeStamp: Date.now()
});

