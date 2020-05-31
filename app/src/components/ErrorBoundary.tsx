import React, { Component, ReactElement } from 'react';

interface IProps {
  children: ReactElement;
}

interface IState {
  error: null | Error;
}

class ErrorBoundary extends Component<IProps, IState> {
  public state: IState = {
    error: null,
  };

  public componentDidCatch(error: Error) {
    // show error message
    // let error bubble up to sentry init
    this.setState({ error });
  }

  public render() {
    if (this.state.error) {
      return <div>Error Message</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
