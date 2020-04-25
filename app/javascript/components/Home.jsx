import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import userImg from "../../assets/images/userPlaceholder.png";
import post from "../../assets/images/background.jpg";

const useStyles = makeStyles((theme) => ({
  homepageWrapper: {
    width: "100%",
    display: "grid",
    margin: "0 auto",
    gridTemplateColumns: "0.5fr 1fr 0.5fr",
    padding: "0 15px",
    maxWidth: "1440px",
    gridGap: "10px",
    paddingBottom: "10px",
  },
  newPostWrapper: {
    width: "100%",
    background: "#3F51B5",
    borderRadius: "5px",
  },
  newPost: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    paddingBottom: "0px",
  },
  userImage: {
    height: "50px",
  },
  newPostField: {
    background: "#707DC8",
    borderRadius: "30px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    padding: "0px 20px",
    width: "100%",
    marginLeft: "15px",
    color: "white",
  },
  postOptions: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginTop: "15px",
  },
  postDescription: {
    padding: "0 15px",
  },
  optionPhoto: {
    cursor: "pointer",
    padding: "10px 0px",
    borderBottomLeftRadius: "5px",
    "&:hover": {
      background: "#707DC8",
    },
  },
  postUser: {
    fontWeight: "bold",
  },
  optionArticle: {
    cursor: "pointer",
    padding: "10px 0px",
    borderBottomRightRadius: "5px",
    "&:hover": {
      background: "#707DC8",
    },
  },
  post: {
    background: "#3F51B5",
    marginTop: "15px",
    borderRadius: "5px",
    color: "white",
  },
  postsSectionWrapper: {
    overflowY: "auto",
    height: "90vh",
  },
  postBody: {
    padding: "10px 25px",
  },
  postImg: {
    width: "100%",
    marginTop: "10px",
  },
  contactBar: {
    height: "87vh",
    background: "#3F51B5",
    borderRadius: "5px",
  },
}));

function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.homepageWrapper}>
      <div className={classes.contactBar}></div>
      <div className={classes.postsSectionWrapper}>
        <div className={classes.newPostWrapper}>
          <div className={classes.newPost}>
            <div>
              <img src={userImg} className={classes.userImage} alt="" />
            </div>
            <div className={classes.newPostField}>
              {" "}
              What is on your mind ...
            </div>
          </div>
          <div className={classes.postOptions}>
            <div className={classes.optionPhoto}>Photo/Video</div>
            <div className={classes.optionArticle}>Article</div>
          </div>
        </div>
        <div className={classes.post}>
          <div className={classes.newPost}>
            <div>
              <img src={userImg} className={classes.userImage} alt="" />
            </div>
            <div className={classes.postDescription}>
              <div className={classes.postUser}>Emir Vatric</div>
              <div>3 mins</div>
            </div>
          </div>
          <div className={classes.postBody}>
            It's like smart compose for Code! Install Tabnine plugin in your IDE
            and get code suggestions as you code from the best programs.
            Available for all (well, most) languages and IDEs
          </div>
          <div className={classes.postOptions}>
            <div className={classes.optionPhoto}>Like</div>
            <div className={classes.optionArticle}>Comment</div>
          </div>
        </div>
        <div className={classes.post}>
          <div className={classes.newPost}>
            <div>
              <img src={userImg} className={classes.userImage} alt="" />
            </div>
            <div className={classes.postDescription}>
              <div className={classes.postUser}>Emir Vatric</div>
              <div>3 mins</div>
            </div>
          </div>
          <div className={classes.postBody}>
            Snimite svoje najbolje fotografije ikad, uz Galaxy S20, S20+ i S20
            Ultra modele s kamerama do čak 108MP i 8K videozapisom.
            <img src={post} className={classes.postImg} alt="" />
          </div>
          <div className={classes.postOptions}>
            <div className={classes.optionPhoto}>Like</div>
            <div className={classes.optionArticle}>Comment</div>
          </div>
        </div>
        <div className={classes.post}>
          <div className={classes.newPost}>
            <div>
              <img src={userImg} className={classes.userImage} alt="" />
            </div>
            <div className={classes.postDescription}>
              <div className={classes.postUser}>Emir Vatric</div>
              <div>3 mins</div>
            </div>
          </div>
          <div className={classes.postBody}>
            It's like smart compose for Code! Install Tabnine plugin in your IDE
            and get code suggestions as you code from the best programs.
            Available for all (well, most) languages and IDEs
          </div>
          <div className={classes.postOptions}>
            <div className={classes.optionPhoto}>Like</div>
            <div className={classes.optionArticle}>Comment</div>
          </div>
        </div>
      </div>
      <div className={classes.contactBar}></div>
    </div>
  );
}

export default Homepage;
