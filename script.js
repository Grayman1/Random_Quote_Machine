function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

var colors = [
'#16a085',
'#27ae60',
'#EDA9cF',
'#f39c12',
'#e74c3c',
'#9b59b6',
'#FB6964',
'#D978DB',
'#46D452',
'#BDBB99',
'#77B1A9',
'#73A857',
'8794ED',
'64DED6'];


class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [{ quote: "Life would be unbearably dull if we had answers to all our questions.", author: "Harry Dresden" }],
      index: 0 });_defineProperty(this, "getRandomIndex",










    () => {
      const { quotes } = this.state;

      if (quotes.length > 0) {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({
          index });

      }

    });}componentDidMount() {fetch(API).then(res => res.json()).then(res => {console.log(res);this.setState({ quotes: res.quotes }, this.getRandomIndex);});}

  render() {
    const { quotes, index } = this.state;

    const quote = quotes[index];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.getElementsByTagName('body')[0].style.backgroundColor = randomColor;
    document.getElementsByTagName('body')[0].style.color = randomColor;


    let twitterURL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22";

    let quoteInApiFormat = quote.quote.replace(/ /g, "%20");
    let authorInApiFormat = quote.author.replace(/ /g, "%20");

    twitterURL += quoteInApiFormat;
    twitterURL += authorInApiFormat;


    console.log("quote", quoteInApiFormat, "\n", "author:", authorInApiFormat, "\n", "twitter link:", twitterURL);
    console.log(randomColor);

    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper d-flex align-items-center justify-content-center" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("div", { className: "box p-4 rounded", id: "quote-box" },
      quote && /*#__PURE__*/
      React.createElement("div", { className: "mb-4" }, /*#__PURE__*/
      React.createElement("strong", null, /*#__PURE__*/
      React.createElement("p", { id: "text", className: "quote-text" }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-1.5x fa-quote-left" }),
      quote.quote, "\"")), /*#__PURE__*/

      React.createElement("cite", { id: "author", className: "author-text d-block text-right" }, "-", quote.author, " ")), /*#__PURE__*/




      React.createElement("div", { className: "d-flex justify-content-between" }, /*#__PURE__*/
      React.createElement("button", { id: "new-quote", className: "btn btn-success", onClick: this.getRandomIndex }, /*#__PURE__*/React.createElement("i", { className: "fas fa-random" }), " New Quote"), /*#__PURE__*/
      React.createElement("a", { href: twitterURL, id: "tweet-quote", className: "btn btn-primary", target: "_blank" }, /*#__PURE__*/React.createElement("i", { className: "fab fa-twitter" }), "Tweet Quote"))))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));