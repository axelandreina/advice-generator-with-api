import React, { useState, useEffect } from "react";
import axios from "axios";
import { DotWave } from "@uiball/loaders";

export default function AdviceCard() {
    const advice = async () => {
        setLoading(true);
        const { data } = await axios.get("https://api.adviceslip.com/advice");
        setAdviceData(data.slip);
        setLoading(false);
    };

    const [loading, setLoading] = useState(true);

    const [adviceData, setAdviceData] = useState(null);
    useEffect(() => {
        advice();
        
    }, []);

    return (
        <>
            {loading ? (
                <DotWave size={47} speed={1} color="white" />
            ) : (
                <div className="card">
                    <div className="advice-number">
                        ADVICE #{adviceData?.id}
                    </div>
                    <div className="advice">{adviceData?.advice}</div>
                    <div className="line-container">
                        <img
                            src="../../advice-generator-app-main/images/pattern-divider-mobile.svg"
                            alt=""
                        />
                    </div>
                    <div onClick={advice} className="advice-button">
                        <div className="button-circle">
                            <img
                                className="dice"
                                src="../../advice-generator-app-main/images/icon-dice.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
