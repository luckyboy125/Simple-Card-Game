import { useState } from "react";
import clsx from "clsx";

import RoundButton from "components/RoundButton";
import avatar1 from "../../../../assets/image/avatar1.png";
import avatar2 from "../../../../assets/image/avatar2.png";
import avatar3 from "../../../../assets/image/avatar3.png";
import avatar4 from "../../../../assets/image/avatar4.png";
import winner from "../../../../assets/image/winner.png";
import { useStyles } from "./TableStyle";
import { Cards, Card_back, Card_div_time } from "config/constant";

interface TableProps {
  result: (e: Score) => void;
}

export const Table = ({ result }: TableProps) => {
  const classes = useStyles();

  const [cards, setCards] = useState({
    first: [] as Card[],
    second: [] as Card[],
    third: [] as Card[],
    fourth: [] as Card[],
  });

  const [score, setScore] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
  });

  const [complex, setComplex] = useState<boolean>();
  const [animationDiv, setAnimationDiv] = useState<number>();
  const [status, setStatus] = useState<boolean>();
  const [endStatus, setEndStatus] = useState<boolean>();

  const diving = async () => {
    let index: number = 0;
    setStatus(true);
    setInterval(() => {
      index++;
      if (index < 12) {
        setAnimationDiv(index % 4);
      } else {
        setStatus(false);
        setEndStatus(true);
      }
    }, Card_div_time);
  };

  const refresh = () => {
    window.location.reload();
  };

  const calcScore = (cards: Card[]) => {
    let sum = 0;
    cards.map((card: Card) => (sum += card.point));

    return sum;
  };

  const cardSort = (cards: Card[]) => {
    return cards.sort((a, b) => (a.id > b.id ? 1 : -1));
  };

  const startCard = async () => {
    setComplex(false);
    setStatus(false);
    setEndStatus(false);
    setAnimationDiv(0);

    const _firstCards: Card[] = [];
    const _secondCards: Card[] = [];
    const _thirdCards: Card[] = [];
    const _fourthCards: Card[] = [];
    setComplex(true);

    let _Cards: Card[] = [];
    _Cards = _Cards.concat(Cards);

    for (let i = 0; i < 13; i++) {
      _firstCards.push(
        _Cards.splice(Math.floor(Math.random() * _Cards.length), 1)[0]
      );
      _secondCards.push(
        _Cards.splice(Math.floor(Math.random() * _Cards.length), 1)[0]
      );
      _thirdCards.push(
        _Cards.splice(Math.floor(Math.random() * _Cards.length), 1)[0]
      );
      _fourthCards.push(
        _Cards.splice(Math.floor(Math.random() * _Cards.length), 1)[0]
      );
    }

    result({
      a: calcScore(_firstCards) + calcScore(_thirdCards),
      b: calcScore(_secondCards) + calcScore(_fourthCards),
    });

    setScore(() => {
      return {
        first: calcScore(_firstCards),
        second: calcScore(_secondCards),
        third: calcScore(_thirdCards),
        fourth: calcScore(_fourthCards),
      };
    });

    setCards(() => {
      return {
        first: cardSort(_firstCards),
        second: cardSort(_secondCards),
        third: cardSort(_thirdCards),
        fourth: cardSort(_fourthCards),
      };
    });

    setTimeout(() => {
      setComplex(false);
      diving();
    }, 1000);
  };

  return (
    <>
      <div className={classes.table}>
        <div className={classes.btnRoot}>
          <RoundButton type="redo" action={refresh} />
          <RoundButton action={startCard} className={classes.playBtn} />
        </div>

        {endStatus && (
          <>
            {score.first + score.third > score.second + score.fourth ? (
              <img src={winner} className={classes.winnerA} alt="winner" />
            ) : (
              <img src={winner} className={classes.winnerB} alt="winner" />
            )}
          </>
        )}

        <div className={classes.avatar1Root}>
          <img src={avatar1} className={classes.avatar} alt="avatar1" />
          North
        </div>
        <div className={classes.avatar2Root}>
          <img src={avatar2} className={classes.avatar} alt="avatar1" />
          East
        </div>
        <div className={classes.avatar3Root}>
          <img src={avatar3} className={classes.avatar} alt="avatar1" />
          South
        </div>
        <div className={classes.avatar4Root}>
          <img src={avatar4} className={classes.avatar} alt="avatar1" />
          West
        </div>

        {endStatus && (
          <>
            <div className={classes.score1}>{score.first}</div>
            <div className={classes.score2}>{score.second}</div>
            <div className={classes.score3}>{score.third}</div>
            <div className={classes.score4}>{score.fourth}</div>
          </>
        )}

        <>
          {complex && !status && !endStatus ? (
            <>
              <div className={classes.centerRoot}>
                <img
                  src={Card_back}
                  className={clsx(
                    classes.animationComplexLeft,
                    classes.cardBack
                  )}
                  alt="back"
                />
              </div>
              <div className={classes.centerRoot}>
                <img
                  src={Card_back}
                  className={clsx(
                    classes.animationComplexRight,
                    classes.cardBack
                  )}
                  alt="back"
                />
              </div>
            </>
          ) : (
            <></>
          )}
          {endStatus ? (
            <></>
          ) : (
            <div className={classes.centerRoot}>
              <img src={Card_back} className={classes.cardBack} alt="back" />
            </div>
          )}
          {status && !endStatus && (
            <div className={classes.centerRoot}>
              <img
                src={Card_back}
                className={clsx(classes.cardBack, {
                  [classes.animationDivTop]: animationDiv === 0,
                  [classes.animationDivLeft]: animationDiv === 1,
                  [classes.animationDivDown]: animationDiv === 2,
                  [classes.animationDivRight]: animationDiv === 3,
                })}
                alt="back"
              />
            </div>
          )}
          {status && !endStatus ? (
            <>
              <div className={classes.putRoot1}>
                <img
                  src={Card_back}
                  className={classes.cardBack}
                  alt="card"
                ></img>
              </div>
              <div className={classes.putRoot2}>
                <img
                  src={Card_back}
                  className={classes.cardBack}
                  alt="card"
                ></img>
              </div>
              <div className={classes.putRoot3}>
                <img
                  src={Card_back}
                  className={classes.cardBack}
                  alt="card"
                ></img>
              </div>
              <div className={classes.putRoot4}>
                <img
                  src={Card_back}
                  className={classes.cardBack}
                  alt="card"
                ></img>
              </div>
            </>
          ) : (
            <></>
          )}
        </>

        {endStatus ? (
          <>
            <div className={classes.field1}>
              {cards.first?.map((item: Card, key: number) => {
                return (
                  <img
                    key={key}
                    src={item?.cardImage}
                    className={classes.card}
                    alt="card"
                  ></img>
                );
              })}
            </div>
            <div className={classes.field2}>
              {cards.second?.map((item: Card, key: number) => {
                return (
                  <img
                    key={key}
                    src={item?.cardImage}
                    className={classes.card}
                    alt="card"
                  ></img>
                );
              })}
            </div>
            <div className={classes.field3}>
              {cards.third?.map((item: Card, key: number) => {
                return (
                  <img
                    key={key}
                    src={item?.cardImage}
                    className={classes.card}
                    alt="card"
                  ></img>
                );
              })}
            </div>
            <div className={classes.field4}>
              {cards.fourth?.map((item: Card, key: number) => {
                return (
                  <img
                    key={key}
                    src={item?.cardImage}
                    className={classes.card}
                    alt="card"
                  ></img>
                );
              })}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
