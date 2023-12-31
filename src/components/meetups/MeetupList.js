import React from "react";
import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => {
        return (
          <MeetupItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            address={item.address}
            description={item.description}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;
