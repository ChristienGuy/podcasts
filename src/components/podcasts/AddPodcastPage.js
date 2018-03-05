import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const AddPodcastPage = ({ submitPodcastForm }) => {
  return (
    <Wrapper>
      <Form onSubmit={submitPodcastForm}>
        <label htmlFor="url">Url to rss feed</label>
        <input id="url" type="text" />
        <input type="submit"/>
      </Form>
    </Wrapper>
  );
};

export default AddPodcastPage;
