import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#222f3e",
        padding: 20,
        flex: 1,
        alignItems: "center",
    },
});

export default Layout;
