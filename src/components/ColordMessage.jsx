export const ColordMessage = (props) => {
  const contentStyle = {
    color: props.color,
    message: props.message,
    fontSize: "20px",
  };
  return <p style={contentStyle}>お元気ですか？</p>;
};
