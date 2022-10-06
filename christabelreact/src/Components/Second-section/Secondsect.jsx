import React from "react";
import styled from "styled-components";

const Second = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 25px;
`;

export default function Secondsect() {
  return (
    <Second>
      <Container>
        <h3>Welcome to Christabel Achiever's Summit</h3>
        <p>
          Christabel Achiever's Summit schools is group of schools consisting of
          creche, nursery, primary, junior and senior secondary schools, located
          at No 11 Emeuwa street Aba, Abia State, Nigeria.{" "}
        </p>
        <p>The creche, nuirsery and primary schools were founded in 2010, </p>
      </Container>
    </Second>
  );
}
