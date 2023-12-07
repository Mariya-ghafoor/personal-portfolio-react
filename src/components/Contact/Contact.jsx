import React from "react";
import styles from "./Contact.module.scss";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mqkvrpkb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <div className={styles.form__main}>
        <div className={styles.main__wrapper}>
          <h2 className={styles.form__head}>Say Hi!</h2>
          <form onSubmit={handleSubmit} className={styles.form__wrapper}>
            <div className={styles.form__card}>
              <input
                className={styles.form__input}
                id="fullName"
                type="text"
                name="fullName"
                required="required"
                placeholder="Name"
              />
              <ValidationError
                prefix="fullName"
                field="fullName"
                errors={state.errors}
              />
              {/* <label className={styles.form__label} htmlFor="full_name"></label> */}
            </div>

            <div className={styles.form__card}>
              <input
                className={styles.form__input}
                id="email"
                type="email"
                name="email"
                required="required"
                placeholder="Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              {/* <label className={styles.form__label} htmlFor="email">
                Email
              </label> */}
            </div>

            <div className={styles.form__card}>
              <textarea
                className={styles.form__textarea}
                maxLength="420"
                rows="3"
                id="message"
                name="message"
                required="required"
                placeholder="What's up?"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              {/* <label
                className={styles.form__textarea__label}
                htmlFor="phone_number"
              >
                Message
              </label> */}
            </div>
            <div
              type="submit"
              // disabled={state.submitting}
              className={styles.btn__wrap}
            >
              <button> Submit </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
