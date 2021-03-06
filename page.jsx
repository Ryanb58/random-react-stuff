var { Router, Route, IndexRoute, Link } = ReactRouter;

var browserHistory = ReactRouter.browserHistory;

var MainLayout = React.createClass({
  render: function() {
    // Note the `className` rather than `class`
    // `class` is a reserved word in JavaScript, so JSX uses `className`
    // Ultimately, it will render with a `class` in the DOM
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
           <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/widgets">Widgets</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
});

var SearchLayout = React.createClass({
  render: function() {
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
    );
  }
});

var UserList = React.createClass({
  render: function() {
    return (
      <ul className="user-list">
        <li>Dan</li>
        <li>Ryan</li>
        <li>Michael</li>
      </ul>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (<h1>Welcome to the Home Page</h1>);
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route component={SearchLayout}>
        <Route path="users" component={UserList} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));