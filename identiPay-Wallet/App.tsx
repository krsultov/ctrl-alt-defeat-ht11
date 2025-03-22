import { CameraView, useCameraPermissions } from "expo-camera"
import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

export default function App() {
    const [permission, requestPermission] = useCameraPermissions()
    const [processing, setProcessing] = useState(false)
    const [payload, setPayload] = useState(null)

    if (!permission) {
        return <View />
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        )
    }

    const scanBarcode = async (barcodeInfo: any) => {
        setProcessing(true)
        setPayload(barcodeInfo.data)
    }

    return (
        <View style={styles.container}>
            {!processing ?
                <CameraView onBarcodeScanned={scanBarcode} style={styles.camera} facing={"back"}>
                </CameraView> :
                <Text>{payload}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    message: {
        textAlign: "center",
        paddingBottom: 10
    },
    camera: {
        flex: 1
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent",
        margin: 64
    },
    button: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
    }
})