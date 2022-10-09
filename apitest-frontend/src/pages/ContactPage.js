import React, { useState, useEffect } from "react";
import styles from "../styles/Global";
import classes from "../components/Auth/AuthForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  postContactMessage,
  getContactMessage,
} from "../actions/contactActions";
import Message from "../components/UI/Message";
import SectionWrapper from "../components/SectionWrapper";
import assets from "../assets";
//import class from "../components/UI/Message.module.css"

const ContactPage = ({ history }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postContactMessageReturn = useSelector(
    (state) => state.postContactMessage
  );
  const {
    loading: loadingPostContactMessage,
    error: errorPostContactMessage,
    success: successPostContactMessage,
  } = postContactMessageReturn;

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      postContactMessage({
        title,
        message,
      })
    );
    setTitle("");
    setMessage("");
    
  };

  // Implement contact messages
  useEffect(() => {
    if (userInfo) {
      dispatch(getContactMessage());
    } else {
      history.push("/auth");
    }
  }, [dispatch, history, userInfo]);

  const fetchContactMessage = useSelector((state) => state.fetchContactMessage);

  return (
    <>
      <SectionWrapper
        title="Reach out to us"
        description="We gladly welcome any message from you. Whether it is a suggestion for the improvement of the site aesthetically, functionally or content-wise, or an application to work with us in any capacity. Please feel free to send your message to us via the form below. You can also make a call via any of the phone lines below or send a WhatsApp message. Thanks in anticipation of your message."
        mockupImg={assets.contact}
        banner="banner"
      />
      <div
        className={`${`items-center  
        w-11/12 sm:w-full minmd:w-3/4`} ${classes.moreStyle}`}
        
      >
        <section className={classes.auth}>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Send Us a Message
          </h1>
          <form onSubmit={submitHandler}>
            <div className={classes.flashedMsg}>
            {loadingPostContactMessage && <Message className={classes.loadingMessage}>sending message</Message>}
           {errorPostContactMessage && <Message className={classes.errorMessage}>{errorPostContactMessage}</Message>}
           {successPostContactMessage && <Message className={classes.successMessage}>Thanks, for the message. We shall act on it accordingly.</Message>} 
           </div>
            <div className={classes.control}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            <div className={styles.blackText}>
              <label htmlFor="message" className={styles.whiteText}>
                Your message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                cols={47}
                placeholder=" Your message"
                wrap="wrap"
              />
            </div>

            <div className={classes.actions}>
              <button
                type="submit"
                onClick={() =>
                  submitHandler({
                    title: title,
                    message: message,
                  })
                }
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
