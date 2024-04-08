import styled from "styled-components";

export const StyledIndexPage = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1px;
  align-items: center;

  width: 100%;

  > div {
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: center;
    white-space: nowrap;

    padding: 10px 5px;

    overflow-x: auto;
    width: 100%;
    height: 40vh;
    flex-wrap: nowrap;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    img {
      height: 100%;
    }
  }
`

export const ImageWithCaption = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  h6 {
    padding: 0;
    margin: 0;
  }

  img {
    height: 100%;
  }
`