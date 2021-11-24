import React from "react";
import classnames from "classnames";
import { ActionItem, Input, Space, Logo } from "components/atoms";

import styles from "./index.module.scss";

type Props = {};

const AuthenticateRegister: React.FC<Props> = ({}) => {
  const [value, setValue] = React.useState();

  return (
    <>
      <div className={classnames("flex__align_center", styles.wrapper)}>
        <div className={classnames("mw__1 block", styles.phoneNumber)}>
          <div className="text__center">
            <Space size={4} />
            <Logo className={styles.logo} />
            <Space size={4} />
            <h2>OTP Confirm</h2>
          </div>
          <Space size={4} />
          <small className="mute">
            Please enter OTP code that we sent to the mobile number
            <strong> +971 588 057954</strong>
          </small>
          <Space size={4} />
          <div className="flex text__center">
            <Input
              center
              type="number"
              id="otp1"
              name="otp1"
              autoFocus
              required
            />
            <Space size={4} />
            <Input center type="number" id="otp1" name="otp1" required />
            <Space size={4} />
            <Input center type="number" id="otp1" name="otp1" required />
            <Space size={4} />
            <Input center type="number" id="otp1" name="otp1" required />
          </div>
          <div className="flex">
            <ActionItem
              text={"Confirm OTP"}
              href={"/authenticate/register"}
              type="btn__primary"
              block
            />
          </div>
          <Space size={4} />
          <div className="flex">
            <ActionItem
              text={"Resend OTP"}
              href={"/authenticate"}
              type="link__small"
            />
            <div className="flex__left"></div>
            <ActionItem
              text={"Change number"}
              href={"/authenticate"}
              type="link__small"
            />
          </div>
          <Space size={5} />
          <small className="block text__center mute">
            Having issues? <a>support@zendy.io</a>
          </small>
          <Space size={4} />
        </div>
      </div>
    </>
  );
};

export default AuthenticateRegister;
