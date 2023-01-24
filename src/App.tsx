import React, {useState} from 'react';

import './App.css';

function convertDecimal(value : any) {

    let length = (value + "").length;
    let unit = Math.pow(0.1, length)

    return unit * value;
}

function App() {

    // 가로 1무늬 코
    const [widthUnitPerPattern, setWidthUnitPerPattern] = useState(0);
    // const [widthUnitPerPatternDecimal, setWidthUnitPerPatternDecimal] = useState(0);
    // 세로 1무늬 단
    const [heightUnitPerPattern, setHeightUnitPerPattern] = useState(0);
    // const [heightUnitPerPatternDecimal, setHeightUnitPerPatternDecimal] = useState(0);

    // 총 가로 무늬 갯수
    const [totalWidthPatternCount, setTotalWidthPatternCount] = useState(0);
    // const [totalWidthPatternCountDecimal, setTotalWidthPatternCountDecimal] = useState(0);
    // 총 가로 무늬 길이
    const [totalHeightPatternCount, setTotalHeightPatternCount] = useState(0);
    // const [totalHeightPatternCountDecimal, setTotalHeightPatternCountDecimal] = useState(0);

    // 총 세로 무늬 갯수
    const [totalWidthPatternLength, setTotalWidthPatternLength] = useState(0);
    const [totalWidthPatternLengthDecimal, setTotalWidthPatternLengthDecimal] = useState(0);
    // 총 세로 무늬 길이
    const [totalHeightPatternLength, setTotalHeightPatternLength] = useState(0);
    const [totalHeightPatternLengthDecimal, setTotalHeightPatternLengthDecimal] = useState(0);

    const [isCalculation, setIsCalculation] = useState(true);


    return (
        <div className="App" style={{
            background: "#ffff00",
            width: "100vw",
            height: "100vh"
        }}>

            {
                isCalculation &&
                <div>
                    <h1>기본 무늬</h1>
                    <span>가로 1무늬</span>
                    <input value={widthUnitPerPattern} onChange={(e) => {
                        try {
                            var value = Number.parseInt(e.target.value);
                            if (!Number.isNaN(value)) setWidthUnitPerPattern(value);
                            else setWidthUnitPerPattern(0)
                        } catch (e) {
                            setWidthUnitPerPattern(0);
                        }
                    }
                    }/>코
                    <br/>
                    <span>세로 1무늬</span>
                    <input value={heightUnitPerPattern} onChange={(e) => {
                        try {
                            var value = Number.parseInt(e.target.value);
                            if (!Number.isNaN(value)) setHeightUnitPerPattern(value);
                            else setHeightUnitPerPattern(0)
                        } catch (e) {
                            setHeightUnitPerPattern(0);
                        }

                    }
                    }/>단

                    <br/>
                    <h1>치수 입력</h1>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div>
                            <span>가로</span>
                        </div>
                        <div>
                            <input value={totalWidthPatternCount} onChange={(e) => {
                                try {
                                    var value = Number.parseInt(e.target.value);
                                    if (!Number.isNaN(value)) setTotalWidthPatternCount(value);
                                    else setTotalWidthPatternCount(0)
                                } catch (e) {
                                    setTotalWidthPatternCount(0);
                                }

                            }
                            }/>무늬
                            <br/>
                            <input value={totalWidthPatternLength} onChange={(e) => {
                                try {
                                    var value = Number.parseInt(e.target.value);
                                    if (!Number.isNaN(value)) setTotalWidthPatternLength(value);
                                    else setTotalWidthPatternLength(0)
                                } catch (e) {
                                    setTotalWidthPatternLength(0);
                                }

                            }
                            }/>
                            &nbsp;.&nbsp;
                            <input value={totalWidthPatternLengthDecimal} onChange={(e) => {
                                try {
                                    var value = Number.parseInt(e.target.value);
                                    if (!Number.isNaN(value)) setTotalWidthPatternLengthDecimal(value);
                                    else setTotalWidthPatternLengthDecimal(0)
                                } catch (e) {
                                    setTotalWidthPatternLengthDecimal(0);
                                }

                            }
                            }/>cm
                            <br/>
                        </div>
                    </div>

                    <br/><br/>

                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div>
                            <span>세로</span>
                        </div>
                        <div>
                            <input value={totalHeightPatternCount} onChange={(e) => {
                                try {
                                    var value = Number.parseInt(e.target.value);
                                    if (!Number.isNaN(value)) setTotalHeightPatternCount(value);
                                    else setTotalHeightPatternCount(0)
                                } catch (e) {
                                    setTotalHeightPatternCount(0);
                                }

                            }
                            }/>무늬
                            <br/>
                            <input value={totalHeightPatternLength} onChange={(e) => {
                                try {
                                    var value = Number.parseInt(e.target.value);
                                    if (!Number.isNaN(value)) setTotalHeightPatternLength(value);
                                    else setTotalHeightPatternLength(0)
                                } catch (e) {
                                    setTotalHeightPatternLength(0);
                                }

                            }
                            }/>
                            &nbsp;.&nbsp;
                            <input value={totalHeightPatternLengthDecimal} onChange={(e) => {
                                try {
                                    var value = Number.parseInt(e.target.value);
                                    if (!Number.isNaN(value)) setTotalHeightPatternLengthDecimal(value);
                                    else setTotalHeightPatternLengthDecimal(0)
                                } catch (e) {
                                    setTotalHeightPatternLengthDecimal(0);
                                }

                            }
                            }/>cm
                            <br/>
                        </div>
                    </div>

                    <div
                        style={{
                            cursor: "pointer",
                            background: "#ff0000",
                            width: "300px",
                            height: "100px",
                            fontSize: "30px"
                        }}
                        onClick={(e) => {
                            setIsCalculation(!isCalculation)
                        }}> 계산하기
                    </div>

                </div>
            }

            {
                !isCalculation && <div>
                    <h1>게이지</h1>
                    <h2>10cm2</h2>
                    <span>가로 1무늬</span>
                    <span style={{
                        color: "#ff0000",
                        fontSize: "20px"
                    }}>{parseFloat(String(((widthUnitPerPattern) * totalWidthPatternCount * 10) / totalWidthPatternLength)).toFixed(1)}</span>
                    <span>코</span>
                    <br/>
                    <span>세로 1무늬</span>
                    <span style={{
                        color: "#ff0000",
                        fontSize: "20px"
                    }}>{parseFloat(String(((heightUnitPerPattern) * totalHeightPatternCount * 10) / totalHeightPatternLength)).toFixed(1)}</span>
                    <span>단</span>
                    <br/>

                    <h2>한무늬</h2>
                    <span>가로 1무늬</span>
                    <span style={{
                        color: "#ff0000",
                        fontSize: "20px"
                    }}>{parseFloat(String((totalWidthPatternLength + convertDecimal(totalWidthPatternLengthDecimal)) / totalWidthPatternCount)).toFixed(2)}</span>
                    <span>코</span>
                    <br/>
                    <span>세로 1무늬</span>
                    <span style={{
                        color: "#ff0000",
                        fontSize: "20px"
                    }}>{parseFloat(String((totalHeightPatternLength + convertDecimal(totalHeightPatternLengthDecimal)) / totalHeightPatternCount)).toFixed(2)}</span>
                    <span>단</span>
                    <br/>


                    <div
                        style={{
                            cursor: "pointer",
                            background: "#ff0000",
                            width: "300px",
                            height: "100px",
                            fontSize: "30px"
                        }}
                        onClick={(e) => {
                            setIsCalculation(!isCalculation)
                        }}> 돌아가기
                    </div>
                </div>


            }
        </div>
    );
}

export default App;
