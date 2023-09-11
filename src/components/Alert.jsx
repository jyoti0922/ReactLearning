import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissibleExample(props) {
  const [show, setShow] = useState(true);
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  if (show) {
    return (
      props.alert && (
        <Alert variant="success">
          <Alert.Heading>
            {capitalize(props.alert.type)}:{props.alert.msg}
          </Alert.Heading>
        </Alert>
      )
    );
  }
}

export default AlertDismissibleExample;
