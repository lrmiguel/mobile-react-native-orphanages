import React, { useContext } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthContext from "../contexts/AuthContext";
import signIn from "../services/auth";

export default function Login() {
    const { signed, signIn } = useContext(AuthContext);

    async function handleSignIn() {
        await signIn();
        console.log(`Logado ${signed}`);
    }

    return (
        <View>
            <TouchableOpacity onPress={handleSignIn} />
        </View>
    );
}