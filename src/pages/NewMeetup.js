import React from "react";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

const NewMeetup = () => {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-4d505-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetup;
