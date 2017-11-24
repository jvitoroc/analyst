import React from 'react';
import styles from './css/Loading.css';
import classnames from "classnames";

export default function Loading(props){
    let hidden = {};
    hidden[styles.hidden] = !props.state;

    return(
        <div className={classnames(hidden)}>
            <div className="windows8">
                <div className="wBall" id="wBall_1">
                    <div className="wInnerBall"></div>
                </div>
                <div className="wBall" id="wBall_2">
                    <div className="wInnerBall"></div>
                </div>
                <div className="wBall" id="wBall_3">
                    <div className="wInnerBall"></div>
                </div>
                <div className="wBall" id="wBall_4">
                    <div className="wInnerBall"></div>
                </div>
                <div className="wBall" id="wBall_5">
                    <div className="wInnerBall"></div>
                </div>
            </div>
        </div>
    );
}
