//// Navigating programmatically

// push
this.props.history.push("/" + id);
this.props.history.push({ pathname: "/ + id" });

// Nested Routed

    // In the parent component
        
    <Switch>
        <Route path="/some-route" component={SomeComponent} />
        <Route path="parent-url/:id" component={ParentComponent} />
    </Switch>

    //In the child component
    <Route path={this.props.match.url + "/:id"} exact component={MyComponent} />