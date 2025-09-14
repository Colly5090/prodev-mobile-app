import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles";
import { router } from "expo-router";

export default function Index() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.navGroup}>
                    <Ionicons name="arrow-back" size={25} onPress={() => router.push("/")} />
                    <Image source={require('@/assets/images/Logo.png')} />
                </View>
                <View>
                    <Text style={styles.largeText}>Create your</Text>
                    <Text style={styles.largeText}>Account</Text>
                    <Text style={styles.smallText}>Enter your details to create a new account.</Text>
                    <View style={styles.formGroup}>
                        <View>
                            <Text style={styles.placeholderText}>Email</Text>
                            <TextInput keyboardType="email-address" placeholder="Email Address" placeholderTextColor="#888" style={styles.inputField} />
                        </View>
                        <View style={{ marginTop: 18 }}>
                            <Text style={styles.placeholderText}>Password</Text>
                            <View style={styles.passwordGroup}>
                                <TextInput style={{ flex: 1 }} placeholder="Enter Password" placeholderTextColor="#888" />
                                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                            </View>

                            <View style={[styles.passwordGroup, { marginTop: 4 }]}>
                                <TextInput style={{ flex: 1 }} placeholder="Re-enter Password" placeholderTextColor="#888" />
                                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                            </View>
                        </View>

                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                    <View style={styles.dividerGroup}>
                        <View style={styles.divider}></View>
                        <Text style={styles.dividerText}>OR</Text>
                        <View style={styles.divider}></View>
                    </View>
                    <View style={styles.socialMediaButtonGroup}>
                        <TouchableOpacity style={styles.socialMediaButton}>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5,
                            }}>
                                <Image source={require("@/assets/images/google.png")} />
                                <Text style={styles.socialMediaButtonText}>Continue with Google</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialMediaButton}>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5,
                            }}>
                                <Image source={require("@/assets/images/facebook.png")} />
                                <Text style={styles.socialMediaButtonText}>Continue with Facebook</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.subTextGroup}>
                    <Text style={styles.subText}>Already have an account?</Text>
                    <Text style={styles.subTextJoin} onPress={() => router.push("/sign")}>Sign In</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
