import React from 'react';

/** React layouts **/
import MainLayout from '../layouts/MainLayout';
import DashboardLayoutContainer from "../layouts/DashboardLayoutContainer";

/** React components **/
import AppStartingContainer from "../containers/AppStartingContainer";
import ModuleDateTimeContainer from "../containers/ModuleDateTimeContainer";
import ModuleNetatmoNAMainContainer from "../containers/ModuleNetatmoNAMainContainer";

import { ConnectedReduxProps } from '../store';

// Separate state props + dispatch props to their own interfaces.
interface IPropsFromState {
    isConfigured: boolean
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface IPropsFromDispatch {
    [key: string]: any
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = IPropsFromState & IPropsFromDispatch & ConnectedReduxProps;

class App extends React.Component<AllProps> {
    public render() {
        return (
            <MainLayout>
                {
                    this.props.isConfigured ? (
                        <DashboardLayoutContainer>
                            <ModuleDateTimeContainer/>
                            <ModuleNetatmoNAMainContainer />
                        </DashboardLayoutContainer>
                    ) : (
                        <AppStartingContainer />
                    )
                }
            </MainLayout>
        )
    }
}

export default App
