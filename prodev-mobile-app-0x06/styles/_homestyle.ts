import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

const styles = StyleSheet.create ({
    container: {
        flex: 1
    },
    searchGroup: {
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 20
    },
    searchFormGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        padding: 8

    },
    searchControlGroup: {
        flex: 1,
        marginRight: 10,
    },
    searchFormText: {
        fontSize: 14,
    },
    searchControl: {
        fontSize: 13,
        outline: 'none',
    },
    searchIcon: {
        backgroundColor: "#34967C",
        borderRadius: 50,
        padding: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    filterGroup: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        
    },
    filterContainer: {
         alignItems: 'center',
         marginRight: 24,
         width: 50,
         
    },
    filterIcon: {
        width: 60,
        height: 60,
        marginBottom: 6,
    },
    filterText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#444',
    },
    listingContainer: {
        marginTop: 20,
        padding: 2
    },
    paginationContainer: {
       padding: 4
    },
    showMoreButton: {
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    showMoreButtonText: {
        fontSize: 18
    }

})


export {styles};