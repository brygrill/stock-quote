import React, { Component, ReactElement } from 'react';

interface IProps {
  reset?: boolean;
  render: Function;
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
    console.log(error);
    this.setState({ error });
  }

  public componentDidUpdate(prevProps: IProps) {
    if (this.props.reset !== prevProps.reset && this.props.reset) {
      this.setState({ error: null });
    }
  }

  public render() {
    if (this.state.error) {
      return <div>{this.props.render()}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
