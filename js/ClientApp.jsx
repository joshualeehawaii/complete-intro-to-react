const ce = React.createElement;

const MyTitle = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function() {
  return ce(
    "div",
    null,
    ce(MyTitle, { title: "this is a show name: 1", color: "YellowGreen" }),
    ce(MyTitle, { title: "this is a show name: 2", color: "GreenYellow" }),
    ce(MyTitle, { title: "this is a show name: 3", color: "LimeGreen" }),
    ce(MyTitle, { title: "this is a show name: 4", color: "Lime" })
  );
};
ReactDOM.render(ce(MyFirstComponent), document.getElementById("app"));
