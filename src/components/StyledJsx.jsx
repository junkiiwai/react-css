export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">-Styled Jsx-</p>
        <button className="button">ファイト！</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px blue;
          border-radius: 20px;
          padding: 20px;
          margin: 20px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: green;
        }

        .button {
          background-color: lightgray;
          border: none;
          padding: 10px;
        }
      `}</style>
    </>
  );
};
