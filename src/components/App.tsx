import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./resuableComponents/errorBoundary/ErrorBoundary";
import HomeComponent from "./pageComponents/home/home";

const App = () => {
    
    return (
        <BrowserRouter>
            <ErrorBoundary history={history}>
                <HomeComponent />
            </ErrorBoundary>
        </BrowserRouter>
    )
}

export default App;