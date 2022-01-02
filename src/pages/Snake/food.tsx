/**
 * @food 食物类
 */
import * as React from "react";
import { connect } from "react-redux";
import style from "./index.module.scss";

interface Props {
  state: any;
};

const Food = (props: Props): JSX.Element => {
  return (
    <div className={style.food}>
      <div></div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  state: state,
});

export default connect(mapStateToProps)(Food);