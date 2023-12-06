/**
 * HOC -
 * It is a function that takes in SourceComponent and returns a New Component.
 * It is a pattern.
 */
export const applyStyles = (OriginalComponent) => {
  const NewComponent = () => {
    const yellowContainer = {
      background: "yellow",
      color: "black",
      padding: "10px",
    };

    // JSX return.
    return (
      <div style={yellowContainer}>
        <OriginalComponent />
      </div>
    );
  };

  // New Component return.
  return NewComponent;
};
