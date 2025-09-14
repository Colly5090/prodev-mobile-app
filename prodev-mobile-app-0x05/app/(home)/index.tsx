import PropertyListing from "@/components/PropertyListing";
import { styles } from "@/styles/_homestyle";
import { Feather } from "@expo/vector-icons";
import { View, Text, TextInput, Image, ScrollView, Dimensions, TouchableHighlight } from "react-native";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.searchGroup}>
                    <View style={styles.searchFormGroup}>
                        <View style={styles.searchControlGroup}>
                            <Text style={styles.searchFormText}>Where to?</Text>
                            <TextInput
                                style={{ ...styles.searchControl, ...styles.searchFormText }}
                                placeholder="Location . Date . Add guest"
                                placeholderTextColor='#666'
                            />
                        </View>
                        <View style={styles.searchIcon}>
                            <Feather name="search" size={24} color='orange' />
                        </View>
                    </View>
                </View>

                <View style={{ height: 100, backgroundColor: 'white' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.filterGroup}>
                            {FILTERS.map((filter, index) => (
                                <View style={styles.filterContainer} key={index}>
                                    <Image style={styles.filterIcon} source={require("@/assets/images/mansion.png")} />
                                    <Text style={styles.filterText}>{filter}</Text>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>

                <ScrollView style={styles.listingContainer}>
                    <PropertyListing listings={SAMPLE_DATA} />
                    <View style={styles.paginationContainer}>
                        <TouchableHighlight style={styles.showMoreButton}>
                            <Text style={styles.showMoreButtonText}>Show more</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Home;