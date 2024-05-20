import styled from "styled-components";

export const StyledIndexPage = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  align-items: center;

  width: 100%;

  > div {
    display: flex;
    flex-direction: row;
    gap: 10px;
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

export const StyledInteresting = styled.div`

  img {
      width: 100vw;
  }
  display: flex;
  flex-direction: column;

  padding-bottom: 25px;

`

export const InterestingBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 25px;
  padding-left: 25px;
  padding-right: 25px;

  > div {
    width: 75%;
    border: 1px solid black;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    gap: 10px;

    padding: 10px 12px;

    img {
      width: 25%;
    }

    h3 {
      font-size: 30px;
    }

    h5 {
      font-weight: normal;
    }

    span {
      font-size: 18px;
    }
  }
`