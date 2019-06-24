

/*
npm install react-native-maps –save
react-native link react-native-maps*/

                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={styles.map}
                            region={{
                                latitude: this.state.lat,
                                longitude: this.state.lng,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            >
                        </MapView>