import React, {useState} from 'react';

import './App.css';

function App() {

  // 가로 1무늬 코
  const [widthUnitPerPattern, setWidthUnitPerPattern] = useState(0);
  // 세로 1무늬 단
  const [heightUnitPerPattern, setHeightUnitPerPattern] = useState(0);

  // 총 가로 무늬 갯수
  const [totalWidthPatternCount, setTotalWidthPatternCount] = useState(0);
  // 총 가로 무늬 길이
  const [totalHeightPatternCount, setTotalHeightPatternCount] = useState(0);

  // 총 세로 무늬 갯수
  const [totalWidthPatternLength, setTotalWidthPatternLength] = useState(0);
  // 총 세로 무늬 길이
  const [totalHeightPatternLength, setTotalHeightPatternLength] = useState(0);

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
                setWidthUnitPerPattern(Number.parseInt(e.target.value));
              }
              }/>코
              <br/>
              <span>세로 1무늬</span>
              <input value={heightUnitPerPattern} onChange={(e) => {
                setHeightUnitPerPattern(Number.parseInt(e.target.value));
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
                    setTotalWidthPatternCount(Number.parseInt(e.target.value));
                  }
                  }/> 무늬
                  <br/>
                  <input value={totalWidthPatternLength} onChange={(e) => {
                    setTotalWidthPatternLength(Number.parseInt(e.target.value));
                  }
                  }/> cm
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
                    setTotalHeightPatternCount(Number.parseInt(e.target.value));
                  }
                  }/> 무늬
                  <br/>
                  <input value={totalHeightPatternLength} onChange={(e) => {
                    setTotalHeightPatternLength(Number.parseInt(e.target.value));
                  }
                  }/> cm
                  <br/>
                </div>
              </div>

              <div
                  style={{
                    cursor: "pointer",
                    background : "#ff0000",
                    width : "300px",
                    height : "100px",
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
              <span style={{color : "#ff0000", fontSize : "20px"}}>{(widthUnitPerPattern * totalWidthPatternCount * 10) / totalWidthPatternLength}</span>
              <span>코</span>
              <br/>
              <span>세로 1무늬</span>
              <span style={{color : "#ff0000", fontSize : "20px"}}>{(heightUnitPerPattern * totalHeightPatternCount * 10) / totalHeightPatternLength}</span>
              <span>단</span>
              <br/>

              <h2>한무늬</h2>
              <span>가로 1무늬</span>
              <span style={{color : "#ff0000", fontSize : "20px"}}>{(totalWidthPatternLength) / totalWidthPatternCount}</span>
              <span>코</span>
              <br/>
              <span>세로 1무늬</span>
              <span style={{color : "#ff0000", fontSize : "20px"}}>{(totalHeightPatternLength) / totalHeightPatternCount}</span>
              <span>단</span>
              <br/>


              <div
                  style={{
                    cursor: "pointer",
                    background : "#ff0000",
                    width : "300px",
                    height : "100px",
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
