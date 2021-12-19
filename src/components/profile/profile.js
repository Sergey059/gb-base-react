import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { name, surname, subscription, sex } from "../../store/profile";
import { HomeOutlined, ForumOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStyles } from "./use-styles";

const ProfileInfo = ({
  submit,
  fullName,
  sex,
  sub,
  handleSexValue,
  handleSubscribtionValue,
  handleNameValue,
  handleSurnameValue,
  handleSubmit,
  handleUnsubmit,
}) => {
  const styles = useStyles();
  if (submit) {
    return (
      <div className={styles.wrapper}>
        <h2>{fullName}</h2>
        <h3>{sex}</h3>
        <h3>{sub}</h3>
        <button onClick={handleUnsubmit}>Edit</button>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <input
          required
          type="text"
          onInput={handleNameValue}
          placeholder="Name"
        />
        <input
          required
          type="text"
          onInput={handleSurnameValue}
          placeholder="Surname"
        />
        <div>
          <input
            type="checkbox"
            onChange={handleSubscribtionValue}
            id="checkbox"
          />
          <label htmlFor="checkbox">subscribe for notifications</label>
        </div>
        <p>choose your sex:</p>
        <div className={styles.radioDiv}>
          <input
            type="radio"
            name="sex"
            onClick={handleSexValue}
            value="male"
            id="radio-male"
          />
          <label htmlFor="radio-male">male</label>
          <input
            type="radio"
            name="sex"
            onClick={handleSexValue}
            value="female"
            id="radio-female"
          />
          <label htmlFor="radio-female">female</label>
          <input
            type="radio"
            name="sex"
            onClick={handleSexValue}
            value="other"
            id="radio-other"
          />
          <label htmlFor="radio-other">other</label>
        </div>
        <button onClick={handleSubmit}>Save</button>
      </div>
    );
  }
};

export const Profile = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  let userInfo = useSelector((state) => state.profile.userInfo);
  let [submit, setSubmit] = useState(false);
  const handleSexValue = (event) => {
    handleUnsubmit();
    dispatch(sex(event.target.value));
  };
  const handleSubscribtionValue = (event) => {
    handleUnsubmit();
    dispatch(subscription(event.target.checked));
  };
  const handleNameValue = (event) => {
    handleUnsubmit();
    dispatch(name(event.target.value));
  };
  const handleSurnameValue = (event) => {
    handleUnsubmit();
    dispatch(surname(event.target.value));
  };
  const handleSubmit = () => {
    setSubmit(true);
  };
  const handleUnsubmit = () => {
    setSubmit(false);
  };

  let name_ = userInfo.name ?? " ";
  let surname_ = userInfo.surname ?? " ";
  let fullName = name_ + " " + surname_;
  let sex_ = userInfo.sex ?? " ";
  let sub_ = userInfo.subscription ?? " ";
  if (sub_ !== " " && sub_) {
    sub_ = "you are subscribed";
  } else if (sub_ !== " " && !sub_) {
    sub_ = "you are not subscribed";
  }

  return (
    <div>
      <Link className={styles.linkHome} to={"/"}>
        <HomeOutlined fontSize="large" />
      </Link>
      <Link className={styles.linkChat} to={"/chat"}>
        <ForumOutlined fontSize="large" />
      </Link>
      <h1 className={styles.heading}>ProfilePage</h1>
      <ProfileInfo
        submit={submit}
        fullName={fullName}
        sex={sex_}
        sub={sub_}
        handleSexValue={handleSexValue}
        handleSubscribtionValue={handleSubscribtionValue}
        handleNameValue={handleNameValue}
        handleSurnameValue={handleSurnameValue}
        handleSubmit={handleSubmit}
        handleUnsubmit={handleUnsubmit}
      />
    </div>
  );
};
