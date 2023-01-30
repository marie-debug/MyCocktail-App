import React from 'react'
// import { Link } from 'react-router-dom'
// import Error from './pages/Error'
import ErrorFallback from './ErrorFallback'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        return <ErrorFallback></ErrorFallback>
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary

