import { useState } from "react";
import { Table } from "./components/Table/Table";
import { MainStyle } from "./MainStyle";

export const Main = () => {
  const classes = MainStyle();
  const [AlltotalArray, setAlltotalArray] = useState<Score[]>([]);
  const [AScore, setAScore] = useState(0);
  const [BScore, setBScore] = useState(0);
  const getResult = (e: Score) => {
    let instance: Score[] = [];
    instance = instance.concat(AlltotalArray, {
      a: e.a,
      b: e.b,
    });
    setAScore(AScore + e.a);
    setBScore(BScore + e.b);
    setAlltotalArray(instance);
  };

  return (
    <>
      <div className={classes.header}>Card-Game</div>
      <div className={classes.root}>
        <div className={classes.playField}>
          <Table result={(e) => getResult(e)} />
        </div>
        <div className={classes.dashboard}>
          <span className={classes.resultHeader}>Result</span>
          <div className={classes.column}>
            <div className={classes.item}>A</div>
            <span className={classes.divDot}>:</span>
            <div className={classes.item}>B</div>
          </div>
          {AlltotalArray?.map((item: Score, key: number) => {
            return (
              <div key={key} className={classes.column}>
                <div className={classes.item}>{item?.a}</div>
                <div className={classes.item}>{item?.b}</div>
              </div>
            );
          })}
          <div className={classes.column}>
            <div className={classes.item}>TOTAL : {AScore}</div>
            <div className={classes.item}>TOTAL : {BScore}</div>
          </div>
        </div>
        <div className={classes.dashboardDown}>
          <span className={classes.resultHeader}>Result</span>
          <div className={classes.dashboardTitle}>
            <div className={classes.itemDown}>A</div>
            <div className={classes.itemDiv}></div>
            <div className={classes.itemDown}>B</div>
          </div>

          {AlltotalArray?.map((item: Score, key: number) => {
            return (
              <div key={key} className={classes.dashboardDownBody}>
                <div className={classes.itemDown}>{item?.a}</div>
                <div className={classes.itemDiv}></div>
                <div className={classes.itemDown}>{item?.b}</div>
              </div>
            );
          })}
          <div className={classes.dashboardDownBody}>
            <div className={classes.itemDown}>TOTAL : {AScore}</div>
            <div className={classes.itemDiv}></div>
            <div className={classes.itemDown}>TOTAL : {BScore}</div>
          </div>
        </div>
      </div>
    </>
  );
};
