import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { AuthProvider } from '../contexts/AuthContext';
import Dashboard from '../pages/Dashboard';
import OrphanagesMap from '../pages/OrphanagesMap';
import OrphanageDetails from '../pages/OrphanageDetails';
import SelectMapPosition from '../pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from '../pages/CreateOrphanage/OrphanageData';
import Header from '../components/Header';

export default function SignedInRoutes() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                    <Screen
                        name="Dashboard"
                        component={Dashboard} />

                    <Screen
                        name="OrphanagesMap"
                        component={OrphanagesMap} />

                    <Screen
                        name="OrphanageDetails"
                        options={{
                            headerShown: true,
                            header: () => <Header showCancel={false} title="Orfanato" />
                        }}
                        component={OrphanageDetails} />

                    <Screen
                        name="SelectMapPosition"
                        options={{
                            headerShown: true,
                            header: () => <Header title="Selecione no mapa" />
                        }}
                        component={SelectMapPosition} />

                    <Screen
                        name="OrphanageData"
                        options={{
                            headerShown: true,
                            header: () => <Header title="Informe os dados" />
                        }}
                        component={OrphanageData} />
                </Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}