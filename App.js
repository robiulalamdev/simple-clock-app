import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useState } from "react";

const RowView = ({ label, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "Inter_Regular",
            color: "#303030",
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontFamily: "Inter_Bold",
            fontSize: 20,
            color: "#303030",
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_Regular: Inter_400Regular,
    Inter_Bold: Inter_700Bold,
  });

  const [showMore, setShowMore] = useState(false);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
      source={require("./assets/light-bg.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginTop: 32,
          paddingHorizontal: 26,
        }}
      >
        {!showMore && (
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Inter_Regular",
                  fontSize: 12,
                  color: "#fff",
                }}
              >
                “The science of operations, as derived from mathematics more
                especially, is a science of itself, and has its own abstract
                truth and value.”
              </Text>
              <Text
                style={{
                  fontFamily: "Inter_Bold",
                  color: "#fff",
                  fontSize: 12,
                  marginTop: 8,
                }}
              >
                - Ada Lovelace
              </Text>
            </View>
            <Image source={require("./assets/refresh.png")} />
          </View>
        )}

        <View style={{ marginBottom: 36 }}>
          {/* GREETING Text */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("./assets/sun.png")} />
            <Text
              style={{
                fontFamily: "Inter_Regular",
                fontSize: 15,
                color: "white",
                marginLeft: 8,
                letterSpacing: 3,
              }}
            >
              GOOD MORNING
            </Text>
          </View>

          {/* TIME */}
          <View style={{ marginTop: 8 }}>
            <Text>
              <Text
                style={{
                  fontFamily: "Inter_Bold",
                  fontSize: 100,
                  color: "white",
                }}
              >
                11:30
              </Text>
              <Text
                style={{
                  fontFamily: "Inter_Regular",
                  fontSize: 15,
                  color: "white",
                }}
              >
                BST
              </Text>
            </Text>
          </View>

          {/* LOCATION */}
          <View style={{ marginTop: 16 }}>
            <Text
              style={{
                fontFamily: "Inter_Bold",
                fontSize: 15,
                color: "white",
                letterSpacing: 3,
              }}
            >
              IN LONDON, UK
            </Text>
          </View>

          {/* BUTTON */}
          <TouchableOpacity
            onPress={() => {
              setShowMore(!showMore);
            }}
            style={{
              flexDirection: "row",
              height: 40,
              width: 115,
              backgroundColor: "#fff",
              borderRadius: 30,
              marginTop: 50,
              justifyContent: "space-between",
              paddingLeft: 16,
              paddingRight: 4,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Inter_Bold",
                fontSize: 12,
                color: "#000",
                letterSpacing: 3,
              }}
            >
              {showMore ? "LESS" : "MORE"}
            </Text>
            <Image
              source={
                showMore
                  ? require("./assets/arrow-up.png")
                  : require("./assets/arrow-down.png")
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      {showMore && (
        <View
          style={{
            backgroundColor: "#fff",
            opacity: 0.8,
            paddingVertical: 48,
            paddingHorizontal: 26,
          }}
        >
          <RowView label={"Current Timezone"} value="Europe/London" />
          <RowView label={"Day of the year"} value="295" />
          <RowView label={"Day of the week"} value="5" />
          <RowView label={"Week number"} value="42" />
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
