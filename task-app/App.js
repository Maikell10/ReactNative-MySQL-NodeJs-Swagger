import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={({ navigation }) => ({
                        title: "Task App",
                        headerStyle: { backgroundColor: "#222f3e" },
                        headerTitleStyle: { color: "#fff" },
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(TaskFormScreen);
                                }}
                                style={{
                                    backgroundColor: "#10ac84",
                                    marginRight: 20,
                                    borderRadius: 5,
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#fff",
                                        fontSize: 15,
                                        padding: 5,
                                    }}
                                >
                                    New
                                </Text>
                            </TouchableOpacity>
                        ),
                    })}
                />
                <Stack.Screen
                    name="TaskFormScreen"
                    component={TaskFormScreen}
                    options={{
                        title: "Create a Task",
                        headerStyle: { backgroundColor: "#222f3e" },
                        headerTitleStyle: { color: "#fff" },
                        headerTintColor: "#fff",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
