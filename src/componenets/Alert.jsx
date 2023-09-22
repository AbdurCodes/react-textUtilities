import React from "react";

export default function Alert(props) {

    function capitalizeWord (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }


  return (
    props.alert.msg && <div className={`alert alert-${props.alert.type}`} role="alert">
      {capitalizeWord(props.alert.type)} - {props.alert.msg}
    </div>
  );
}
