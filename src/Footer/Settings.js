import React from "react";
import { Settings, DropDown, Form } from "./Styled";

export default function(props) {
  return (
    <Settings>
      <Form>
        <DropDown>
          <option value="">English</option>
        </DropDown>
      </Form>
      <Form>
        <DropDown>
          <option value="">United State Dollars</option>
        </DropDown>
      </Form>
    </Settings>
  );
}
