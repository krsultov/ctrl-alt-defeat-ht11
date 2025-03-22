import { Button, StyleSheet, View } from "react-native"
import QRCode from "react-native-qrcode-svg"
import { useState } from "react"

const backendHostname = "localhost:8080"

const initiateTransaction = async () => {
    try {
        const response = await fetch(`http://${backendHostname}/api/did/transactions?did:identiPay:localhost:8080:2VqXriCrHam1GGtWTqFw1Qty4xLSwCupJTq2UDnCBHsA6ivk81rgGTHsLFbTDKQFPAkp4LqeTDESSR34hPNXfpgAWHMQjHvHXbdwieDAWrG7frwauHJSGN7jDE3BgDmc2dVLtpUeUpuBJvKU2UhfBhSmRwcr9Mm2f3DysHi6aHrNAEJGHaGExgENUTX43Zzo4v9N3VcJ9PTmA2avTQExjaUnsUQfBwWcJM42auWfbJuMvuhdsDgRGFaowttiWmZtMcvpKEUYKGGamFgzjPiU8zpufGRZtsHPpTwYjYXiXg5Kex9n7ccHnSZbcaF3D2fpJ8NsNXrNomdzc9W5MJE7V12ah7PKKpcSkhVQ9jn4VTpDsDEATeap2GnG58PWq3vE99XgXrbDoVcUnFm7VMcMpwCKun8Cvk9f2P8PmHdokMygscNLiNAyEsf1mP86Tesj5LoKahdkjjYymZAeaTd9Y5ZZVhC2np6wpTooiGZZX2TqZM1FywwecbTUpgDq4NtBHum2Eo3gcKmKm7Fes756dUTdLXernST6uq71H8icTHuc6rwJF9WNuUvCBWBCnEgRMvSCjYFKQHXqJcJGfCZWx1GFiH8LP4K9W7JfngNSmixsxoFTCCe1cyKswp4F4qJrUtN9iR6ULWpuhB9zV5N5mrhQ8cum3nXoz1atpi88gzzZkAWTotZcVHzqrbcwsNq2tPKWodGADoksaNW1ALRsA5nZ4TmBqW6bCDvbj6tKi43JQfxX5usJvYgMUhSyu6pigDYJra1HGwkyfRvU78ow4SiTt4NjEZjTS53T3JcCibDKh43NxNWh5BWEnh4YTFpMvduBnE53UZ6ekRgUrqm9QpFe4iDgSKTKWf4Kq93Qj2xzDLGhz1FqRA4t2eiU4FP81Lu35K4eRggxrya8ZgZkJuHNhj4kz16FbYVFEajWPRNk9sfrd4swEUrfxVYUEH3QkioanQogCRGkRb2CLVEDpNbDFR13nRBvSgUkZN5FE5ZK2fCmSsXXdpsxAzbmgiWU6eDx1XLob8epndHRiaHJZLkWb7QZvd7RTsEXi4CpYHXRjev1t38ZiAw799jNL8DTnLyxm`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount: 100,
                metadata: "test transaction"
            })
        })
        const result = await response.json()
        console.log("Transaction initiated:", result)
        return result.payload
    } catch (error) {
        console.error("Error initiating transaction:", error)
    }
}

export default function App() {
    const [data, setData] = useState("");

    const transactionFlow = async () => {
        const payload = await initiateTransaction()
        setData(payload)

        console.log("Transaction initiated")
    }

    return (
        <View style={styles.container}>
            <Button title="Start Transaction" onPress={transactionFlow}></Button>
            <QRCode
                value={data}
                size={200}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})
