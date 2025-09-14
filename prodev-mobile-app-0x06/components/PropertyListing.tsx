import { View, Text } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";
import { PropertyListingProps, PropertyListings } from "@/interfaces";
import { useState } from "react";

const PropertyListing = ({ listings }: PropertyListings) => {
    return (
        <View
            style={{ flex: 1, rowGap: 10 }}
        >
            {listings?.map((listing, key) => (
                <PropertyListingCard {...listing} key={key} />
            ))}
        </View>
    )
}

export default PropertyListing;