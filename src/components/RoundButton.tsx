import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: "pointer",
      minWidth: "35px",
      width: "35px",
      height: "35px",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      background: "rgba(255, 255, 255, 0.1)",
      opacity: 0.9,
      border: "1px solid rgba(255, 255, 255, 0.18)",
      borderRadius: "66px",
      "& i": {
        fontSize: "22px",
        fontWeight: 100,
        color: "#fff",
      },
    },
  })
);

interface Props {
  className?: any;
  action: () => void;
  type?: string;
}

export default function RoundButton({ className, action, type }: Props) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} onClick={action}>
      {type === "redo" ? (
        <i className="fas fa-redo"></i>
      ) : (
        <i className="fas fa-play"></i>
      )}
    </div>
  );
}
